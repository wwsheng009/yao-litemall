import { ModelId } from '@yao/types';
import { Process } from '@yaoapps/client';
import { QueryObjectIn } from '@yao/request';
import { YaoModel, YaoQueryParam } from '@yaoapps/types';
import { PaginateSearchResult } from '@yao/types';

export function saveDataById(modelId: ModelId, id: string, payload: object) {
  return Process(`models.${modelId}.update`, id, payload);
}

// 推荐在循环对象属性的时候，使用for...in,
// 在遍历数组的时候的时候使用for...of。
// for...in循环出的是key，for...of循环出的是value
// 注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足
// for...of不能循环普通的对象，需要通过和Object.keys()搭配使用
export function mergeQueryObject(querysIn: QueryObjectIn, payload: object) {
  // console.log(`types of querysIn${typeof querysIn}`);
  // console.log(`types of payload${typeof payload}`);

  if (payload == null) {
    return querysIn;
  }
  if (querysIn == null) {
    querysIn = {};
  }
  if (typeof querysIn !== 'object') {
    return querysIn;
  }
  const querys = querysIn;

  if (typeof payload === 'object' && Object.keys(querys).length) {
    for (const key in payload) {
      if (Object.hasOwnProperty.call(payload, key)) {
        const element = payload[key];
        const values = querys[key];
        if (Array.isArray(values)) {
          if (!values.some((x) => x == element)) {
            // 使用弱比较，'1'应该等于1
            querys[key].push(element);
          }
        } else {
          querys[key] = [element];
        }
      }
    }
  }

  return querys;
}

/**
 * 从对象中获取指定键的第一个数组项，如果键不存在或对应的值不是数组，则返回默认值
 * @param querys - 要搜索的对象
 * @param key - 要搜索的键
 * @returns 找到的第一个数组项或默认值
 */
export function getArrayItem(
  querys: { [x: string]: string[] },
  key: string
): string {
  if (typeof querys !== 'object') {
    return;
  }
  if (Array.isArray(querys[key]) && querys[key].length) {
    return querys[key][0];
  } else {
    return String(querys[key]);
  }
}

/**
 * 转换URL查询对象成YAO的QueryParam对象
 * @param {object} modelIn 模型定义
 * @param {object} querysIn URL查询对象
 * @param {object} queryParams yao解析的queryParams
 * @returns 返回Yao QueryParam
 */
export function queryToQueryParam(
  modelIn: ModelId | YaoModel.ModelDSL,
  querysIn: QueryObjectIn,
  queryParams?: YaoQueryParam.QueryParam
) {
  if (querysIn == null && queryParams == null) {
    return {};
  }
  const querys = querysIn || {};
  // 查询条件
  const queryParam = queryParams || {};
  const orders = [];
  const wheres = [];
  // 根据url参数信息，构造yao的查询条件
  let whereCount = 1;

  const columnMap = {};
  let model = modelIn as YaoModel.ModelDSL;

  if (typeof model === 'string') {
    model = FindCachedModelById(model);
  }
  model = addModelMetaFields(model);

  model.columns?.forEach((col) => {
    columnMap[col.name] = col;
  });

  let select = [];
  if (
    querys != null &&
    Object.prototype.hasOwnProperty.call(querys, 'select')
  ) {
    const joinedString = querys['select'].join(',');
    const selectArray = joinedString.split(',');
    select = [...new Set(selectArray)];
    delete querys['select'];
    select = select.filter((col) =>
      Object.prototype.hasOwnProperty.call(columnMap, col)
    );
  }

  const keywords = querys['keyword'];
  delete querys['keyword'];

  delete querys['page'];
  delete querys['limit'];

  const orderby = querys['sort'];
  const orderDir = querys['order'];
  delete querys['sort'];
  delete querys['order'];
  let option = 'asc';
  if (orderDir && orderDir.length && orderDir[0] != '') {
    option = orderDir[0];
  }
  // only one object
  if (orderby && orderby.length && orderby[0] != '') {
    orders.push({
      column: orderby[0],
      option: option
    });
  }

  for (const key in querys) {
    // 不存在列
    if (!Object.prototype.hasOwnProperty.call(columnMap, key)) {
      continue;
    }
    const column = columnMap[key];
    if (column == null) {
      continue;
    }
    const isDateTime = isDateTimeType(column);

    const conditions = querys[key]; // 查询都是一个数组

    for (const condition of conditions) {
      if (condition === '') {
        // 前端无法清空搜索值
        continue;
      }
      // 时间范围查询
      if (isDateTime && condition.includes(',')) {
        const conds = condition.split(',');
        if (conds.length === 2) {
          const low = conds[0];
          const high = conds[1];
          wheres.push({
            column: key,
            value: low,
            method: 'where',
            op: 'ge' // >=
          });
          wheres.push({
            column: key,
            value: high,
            method: 'where',
            op: 'le' // <=
          });
          whereCount += 2;
          continue;
        }
      }

      let param = {};
      //* xx* 转换成数据库的%%
      if (typeof condition === 'string' && condition.includes('*')) {
        if (condition === '*') {
          continue;
        }
        const newcondt = condition.replaceAll(/\*/g, '%');
        param = {
          column: key,
          value: newcondt,
          op: 'like'
        };
      } else {
        param = {
          column: key,
          value: condition
        };
      }
      // 超过一个条件，使用交叉查询
      if (whereCount > 1) {
        param['method'] = 'where';
      }
      wheres.push(param);
      whereCount += 1;
    }
  }

  // 使用keywords进行模糊
  if (
    keywords &&
    Array.isArray(keywords) &&
    keywords.length &&
    keywords[0] != '' &&
    keywords[0] != '*' &&
    wheres.length == 0
  ) {
    const keyword = keywords[0] + '';
    for (const colname in columnMap) {
      // const type = column.type.toUpperCase();
      if (
        colname == 'deleted_at' ||
        colname == 'updated_at' ||
        colname == 'created_at' ||
        colname == '__restore_data'
      ) {
        continue;
      }
      if (Object.hasOwnProperty.call(columnMap, colname)) {
        // console.log("colname:", colname);
        const column = columnMap[colname];
        if (column == null) {
          continue;
        }
        const param = {
          column: column.name,
          value: `%${keyword}%`,
          op: 'like'
        };
        if (keyword.includes('*')) {
          const newcondt = keyword.replaceAll(/\*/g, '%');
          param.value = newcondt;
        }

        if (whereCount > 1) {
          param['method'] = 'orwhere';
        }
        wheres.push(param);
        whereCount += 1;
      }
    }
  }
  if (wheres.length) {
    queryParam['wheres'] = queryParam['wheres'] || [];
    queryParam['wheres'] = queryParam['wheres'].concat(wheres);
  }
  if (orders.length) {
    queryParam['orders'] = queryParam['orders'] || [];
    queryParam['orders'] = queryParam['orders'].concat(orders);
  }
  if (select.length) {
    queryParam['select'] = queryParam['select'] || [];
    queryParam['select'] = queryParam['select'].concat(select);
    queryParam['select'] = [...new Set(queryParam['select'])];
  }

  return queryParam;
}

/**
 * 根据模型ID在缓存中查找模型定义
 * yao run scripts.system.model_lib.FindCachedModelById
 * @param {string} modelId 模型标识
 * @returns YaoModel.ModelDSL | null
 */
export function FindCachedModelById(modelId: ModelId) {
  const exist = Process(`models.${modelId}.exists`);
  if (exist) {
    const model = Process(`models.${modelId}.read`);
    const modelDsl = updateModelMetaFields(model);
    return modelDsl;
  } else {
    return null;
  }
}

export function updateModelMetaFields(
  modelDsl: YaoModel.ModelDSL
): YaoModel.ModelDSL {
  if (!modelDsl) {
    return modelDsl;
  }
  if (!modelDsl?.columns || !Array.isArray(modelDsl?.columns)) {
    return modelDsl;
  }
  if (!modelDsl.option?.timestamps && !modelDsl.option?.soft_deletes) {
    return modelDsl;
  }
  modelDsl?.columns?.forEach((c) => {
    if (modelDsl.option?.timestamps) {
      if (c.name == 'created_at' && c.label == '::Created At') {
        c.label = '创建时间';
      } else if (c.name == 'updated_at' && c.label == '::Updated At') {
        c.label = '更新时间';
      }
    }
    if (modelDsl?.option?.soft_deletes) {
      if (c.name == 'deleted_at' && c.label == '::Deleted At') {
        c.label = '删除时间';
      }
    }
  });
  return modelDsl;
}

/**
 * 更新模型，增加元数据字段如果它们不存在，
 *
 * 字段包含：创建时间，更新时间，删除时间字段。
 * @param {object} modelDsl yao模型定义
 * @returns 新的模型定义
 */
function addModelMetaFields(modelDsl2: YaoModel.ModelDSL) {
  const modelDsl = modelDsl2;
  if (modelDsl.option?.timestamps) {
    let result = modelDsl.columns?.some((item) => item.name === 'created_at');
    if (!result) {
      modelDsl.columns.push({
        name: 'created_at',
        label: '创建时间',
        type: 'datetime'
      });
    }
    result = modelDsl.columns?.some((item) => item.name === 'updated_at');
    if (!result) {
      modelDsl.columns.push({
        name: 'updated_at',
        label: '更新时间',
        type: 'datetime'
      });
    }
  }
  if (modelDsl.option?.soft_deletes) {
    const result = modelDsl.columns?.some((item) => item.name === 'deleted_at');
    if (!result) {
      modelDsl.columns.push({
        name: 'deleted_at',
        label: '删除时间',
        type: 'datetime'
      });
    }
  }

  return modelDsl;
}

export function isDateTimeType(column) {
  const columnType = column.type?.toUpperCase();
  switch (columnType) {
    case 'DATE':
    case 'DATETIME':
    case 'DATETIMETZ':
    case 'TIME':
    case 'TIMETZ':
    case 'TIMESTAMP':
    case 'TIMESTAMPTZ':
      return true;
  }
  return false;
}

/**
 * search the model data with page
 *
 * 分页搜索模型数据
 * @param modelId model id
 * @param queryParam
 * @param page
 * @param perPage
 * @returns
 */
export function searchModelData(
  modelId: ModelId,
  queryParam: YaoQueryParam.QueryParam,
  page: number,
  perPage: number
): PaginateSearchResult {
  page = page || 1;
  perPage = perPage || 10;

  let modelData = null;

  modelData = Process(`models.${modelId}.Paginate`, queryParam, page, perPage);
  return modelData;
}
