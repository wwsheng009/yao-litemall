import { Process, Query } from '@yaoapps/client';
import {
  dataPaginate,
  mergeQueryObject,
  queryToQueryParam,
  updateOutputData
} from '@scripts/serivce/data';
import {
  categoryFindById,
  categoryQueryByPid,
  queryL2ByIds as categoryQueryL2ByIds
} from './catelog';
import { apiWrapper, convertKeysToSnakeCase } from '@scripts/serivce/utils';
import { YaoQuery } from '@yaoapps/types';
import { AppLitemallGoodsService } from '@scripts/db_services/app/litemall/goods';
import { AppLitemallBrandService } from '@scripts/db_services/app/litemall/brand';
import { AppLitemallGrouponRulesService } from '@scripts/db_services/app/litemall/groupon/rules';

/**
 * 在售的商品总数
 * yao run scripts.mobile.app.litemall.goods.count
 */
export function count() {
  const q = new Query();
  const rec = q.First({
    select: [':COUNT(id) as total'],
    from: '$app.litemall.goods',
    wheres: [
      { field: 'deleted_at', op: '=', value: null },
      { field: 'is_on_sale', op: '=', value: 1 }
    ]
  } as YaoQuery.QueryDSL);
  return rec.total;
}

/**
 * yao run scripts.mobile.app.litemall.goods.list
 * @param queryIn
 * @returns
 */
export function list(queryIn) {
  // * @param categoryId 分类类目ID，可选
  // * @param brandId    品牌商ID，可选
  // * @param keyword    关键字，可选
  // * @param isNew      是否新品，可选
  // * @param isHot      是否热买，可选
  // * @param userId     用户ID
  // * @param page       分页页数 = 当前页码
  // * @param limit      分页大小 = pagesize
  // * @param sort       排序方式，支持"add_time", "retail_price"或"name"
  // * @param order      排序类型，顺序或者降序

  //to-do 添加到搜索历史

  queryIn = queryIn || {};

  const query = convertKeysToSnakeCase(queryIn);

  queryIn['select'] = [
    'id',
    'name',
    'brief',
    'pic_url',
    'is_new',
    'is_hot',
    'retail_price',
    'counter_price'
  ];
  const goodsList = dataPaginate('app.litemall.goods', queryIn, {});

  // 查询商品所属类目列表。
  const catIds = getCategoryIds(
    query.brand_id,
    query.keywords,
    query.is_hot,
    query.is_new
  );

  const filterCategoryList = categoryQueryL2ByIds(catIds);

  return apiWrapper({ ...goodsList, filterCategoryList });
}
// list({
//   categoryId: ['1008009'],
//   limit: ['10'],
//   page: ['1']
// });

/**
 * yao run scripts.mobile.app.litemall.goods.getCategoryIds
 * @param brand_id
 * @param keywords
 * @param is_hot
 * @param is_new
 * @returns
 */
function getCategoryIds(
  brand_id: string,
  keywords: string,
  is_hot: number,
  is_new: number
): number[] {
  const query = mergeQueryObject({}, { brand_id, keywords, is_hot, is_new });
  const queryParam = queryToQueryParam('app.litemall.goods', query, {
    select: ['category_id'],
    limit: 10000
  });

  const goodsList = Process('models.app.litemall.goods.get', queryParam);

  const categoryIds = goodsList.map((item) => item.category_id) || [];
  return [...new Set(categoryIds)] as number[];
}
// getCategoryIds('', '', 1, 1);

function findSubItemById(attributeName: string, id: number) {
  const data = Process(`models.app.litemall.goods.${attributeName}.get`, {
    select: [],
    wheres: [{ column: 'goods_id', value: id }],
    limit: 1000
  });

  return updateOutputData(`app.litemall.goods.${attributeName}`, data);
}

function getSpecificationValueList(id: number) {
  const specifications = findSubItemById('specification', id);

  //按规格进行分组
  const data =
    specifications.reduce((prev, curr) => {
      if (prev[curr.specification]) {
        prev[curr.specification].push(curr);
      } else {
        prev[curr.specification] = [curr];
      }
      return prev;
    }, {}) || {};
  //convert the key,value in specification to valueList
  //转换成数组
  const result = Object.keys(data).map((key) => {
    return {
      name: key,
      valueList: data[key]
    };
  });
  return result;
}

/**
 * yao run scripts.mobile.app.litemall.goods.detail 1009009
 * @param id goods id
 * @returns goods info
 */
export function detail(id: number) {
  // 商品信息
  // 商品属性
  // 商品规格
  // 商品规格对应的数量和价格
  // 商品问题，这里是一些通用问题
  // 商品品牌商
  // 评论
  // 团购信息
  // 用户收藏
  // 记录用户的足迹 异步处理
  const info = AppLitemallGoodsService.Find(id, {});

  const comments = dataPaginate(
    'app.litemall.comment',
    {},
    { page: 1, limit: 4 },
    {
      wheres: [
        {
          column: 'value_id',
          value: id
        }
      ],
      limit: 2
    }
  );
  comments.list.map((l) => {
    l.picList = l.pic_urls;
    delete l.pic_urls;
  });
  let brand = {};
  try {
    brand = AppLitemallBrandService.Find(info.brand_id, {});
    if (brand) {
      brand = updateOutputData('app.litemall.brand', brand);
    }
  } catch (error) {}

  const groupon = AppLitemallGrouponRulesService.Get({
    wheres: [
      { column: 'goods_id', value: id },
      { column: 'status', value: 0 }
    ]
  });

  const data = {
    info: updateOutputData(`app.litemall.goods`, info),
    attribute: findSubItemById('attribute', id),
    productList: findSubItemById('product', id),
    specificationList: getSpecificationValueList(id),
    groupon: updateOutputData('app.litemall.groupon.rules', groupon),
    issue: dataPaginate('app.litemall.issue', {}, { page: 1, limit: 4 }).list,
    userHasCollect: 0,
    shareImage: {},
    comment: { data: comments.list, count: comments.total },
    share: [],
    brand
  };
  return apiWrapper(data);
}
// detail(1009024);

/**
 * 根据分类获取商品列表
 * yao run scripts.mobile.app.litemall.goods.category 1
 *
 * 用户在首页点击一级分类，获取该分类相关的其它分类
 */
export function category(id: number) {
  let cur = categoryFindById(id);
  let children = null;
  let parent = null;

  // 是一级分类，没有父节点
  if (cur.pid == 0) {
    parent = cur;
    children = categoryQueryByPid(cur.id);
    cur = children.length > 0 ? children[0] : cur;
  } else {
    // 是二级分类,查找父节点
    parent = categoryFindById(cur.pid);
    children = categoryQueryByPid(parent.id);
  }

  return apiWrapper({
    currentCategory: cur,
    parentCategory: parent,
    brotherCategory: children
  });
}
