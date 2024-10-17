import { LiteMallResPonse, catelogInfo } from './type';
import { apiWrapper } from '@scripts/serivce/utils';
import {
  AppLitemallCategoryService,
  IAppLitemallCategory
} from '@scripts/db_services/app/litemall/category';

/**
 * 首页的分类数据
 *
 * yao run scripts.mobile.app.litemall.mobile.catelog.index
 */
export function index(id: number): LiteMallResPonse<catelogInfo> {
  const categoryList = getfirstcategory();

  if (Array.isArray(categoryList) && categoryList.length) {
    const myId = id ? id : categoryList[0].id;
    const currentCategory = AppLitemallCategoryService.Find(myId, {});
    const currentSubCategory = getsecondcategory(myId);

    return apiWrapper({
      categoryList: categoryList,
      currentSubCategory: currentSubCategory,
      currentCategory: currentCategory
    });
  } else {
    return apiWrapper({
      categoryList: [],
      currentSubCategory: [],
      currentCategory: {}
    });
  }
}

/**
 * 当前分类栏目
 * @param id 分类id
 * @returns 当前分类栏目
 */
export function current(id: number) {
  const currentCategory = AppLitemallCategoryService.Find(id, {});
  const currentSubCategory = AppLitemallCategoryService.Get({
    select: [],
    wheres: [{ column: 'pid', value: currentCategory.id }],
    limit: 10
  });

  return apiWrapper({
    currentSubCategory,
    currentCategory
  });
}

/**
 * 所有分类信息
 *
 * yao run scripts.mobile.app.litemall.mobile.catelog.all
 * @returns 所有分类
 */
export function all() {
  const outPut = {
    categoryList: [] as IAppLitemallCategory[],
    alllist: [] as IAppLitemallCategory[],
    currentCategory: {} as IAppLitemallCategory,
    currentSubCategory: [] as IAppLitemallCategory[]
  };

  const all = AppLitemallCategoryService.Get({
    withs: { subItems: {} },
    wheres: [
      { column: 'level', value: 'L1' },
      { column: 'deleted_at', op: 'null' }
    ],
    limit: 10000
  });

  all.forEach((line, idx: number) => {
    const currentItem = { ...line };
    outPut.categoryList.push(currentItem);
    outPut.alllist.push(currentItem);
    if (idx == 0) {
      outPut.currentCategory = { ...currentItem };
    }
    if (line.subItems) {
      const subItems = [...line.subItems];
      delete currentItem.subItems;

      outPut.alllist.push(...subItems);
      if (idx == 0) {
        outPut.currentSubCategory = [...subItems];
      }
    }
  });

  return outPut;
}

/**
 * 获取一级分类
 */
export function getfirstcategory() {
  const categoryList = AppLitemallCategoryService.Get({
    select: [],
    wheres: [
      { column: 'level', value: 'L1' },
      { column: 'deleted_at', op: 'null' }
    ],
    limit: 10000
  });

  return categoryList;
}
export function getsecondcategory(id: number) {
  const currentSubCategory = AppLitemallCategoryService.Get({
    select: [],
    wheres: [
      { column: 'pid', value: id },
      { column: 'deleted_at', op: 'null' }
    ],
    limit: 10000
  });
  return currentSubCategory;
}

/**
 * yao run scripts.mobile.app.litemall.mobile.catelog.getCategoryListL1
 * @returns L1分类
 */
export function getCategoryListL1() {
  const channelList = AppLitemallCategoryService.Get({
    select: ['id', 'name', 'icon_url'],
    wheres: [
      { column: 'level', value: 'L1' },
      { column: 'deleted_at', op: 'null' }
    ],

    limit: 10000
  });

  return channelList;
}

export function categoryFindById(id: number) {
  const category = AppLitemallCategoryService.Find(id, {
    select: [],
    wheres: [{ column: 'deleted_at', op: 'null' }],
    limit: 10000
  });
  return category;
}

export function categoryQueryByPid(pid: number) {
  return getsecondcategory(pid);
}

/**
 * 根据 ID 查询二级分类列表
 *
 * 这个函数用于根据提供的 ID 列表查询二级分类。它会返回一个包含所有匹配的二级分类的数组。
 *
 * yao run scripts.mobile.app.litemall.catelog.queryL2ByIds 1,2,3
 *
 * @param ids - 要查询的分类 ID 列表
 * @returns 一个包含所有匹配的二级分类的数组
 * @throws {Error} 如果查询过程中发生错误，将抛出错误
 */
export function queryL2ByIds(ids: number[]) {
  if (ids && ids.length && typeof ids === 'string') {
    ids = (ids + '').split(',').map(Number);
  }

  if (!Array.isArray(ids) || !ids.length) {
    return [];
  }

  return AppLitemallCategoryService.Get({
    select: [],
    wheres: [
      { column: 'id', op: 'in', value: ids },
      { column: 'level', value: 'L2' },
      { column: 'deleted_at', op: 'null' }
    ],
    limit: 10000
  });
}
