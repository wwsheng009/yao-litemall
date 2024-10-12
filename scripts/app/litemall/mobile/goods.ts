import { Process } from '@yaoapps/client';
import {
  mergeQueryObject,
  queryToQueryParam,
  searchModelData
} from '../serivce/data';
import { categoryFindById, categoryQueryByPid } from './catelog';
import { convertKeysToSnakeCase } from './utils';

export function count() {}

/**
 * yao run scripts.app.litemall.mobile.goods.list
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
  // * @param page       分页页数
  // * @param limit       分页大小
  // * @param sort       排序方式，支持"add_time", "retail_price"或"name"
  // * @param order      排序类型，顺序或者降序

  queryIn = queryIn || {};

  const query = convertKeysToSnakeCase(queryIn);

  const queryParam = queryToQueryParam('app.litemall.goods', query, {
    limit: 10000
  });

  const goodsList = searchModelData(
    'app.litemall.goods',
    queryParam,
    queryIn.page,
    queryIn.limit
  );

  return goodsList;
}

/**
 * yao run scripts.app.litemall.mobile.goods.getCategoryIds
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
) {
  const query = mergeQueryObject({}, { brand_id, keywords, is_hot, is_new });

  const queryParam = queryToQueryParam('app.litemall.goods', query, {
    select: ['category_id'],
    limit: 10000
  });

  const goodsList = Process('models.app.litemall.goods.get', queryParam);

  const categoryIds = goodsList.map((item) => item.category_id);
  return categoryIds;
}

export function detail() {}

/**
 * 根据分类获取商品列表
 * yao run scripts.app.litemall.mobile.goods.category 1
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

  return {
    currentCategory: cur,
    parentCategory: parent,
    brotherCategory: children
  };
}
