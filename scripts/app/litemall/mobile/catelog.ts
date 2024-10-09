import { Process } from '@yaoapps/client';
import { YaoQueryParam } from '@yaoapps/types';
import { LiteMallResPonse, catelogInfo } from './type';
import { convertKeysToCamelCase } from './utils';

/**
 * 首页的分类数据
 *
 * yao run scripts.app.litemall.mobile.shop.catelogIndex
 */
export function index(id: number): LiteMallResPonse<catelogInfo> {
  const categoryList = Process('models.app.litemall.category.get', {
    select: [],
    wheres: [{ column: 'level', value: 'L1' }],
    limit: 10
  } as YaoQueryParam.QueryParam);

  if (Array.isArray(categoryList) && categoryList.length) {
    const myId = id ? id : categoryList[0].id;
    const currentCategory = Process(
      'models.app.litemall.category.find',
      myId,
      {}
    );
    const currentSubCategory = Process('models.app.litemall.category.get', {
      select: [],
      wheres: [{ column: 'pid', value: myId }],
      limit: 10
    } as YaoQueryParam.QueryParam);

    return convertKeysToCamelCase({
      categoryList: categoryList,
      currentSubCategory: currentSubCategory,
      currentCategory: currentCategory
    });
  } else {
    return convertKeysToCamelCase({
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
  const currentCategory = Process('models.app.litemall.category.find', id, {});
  const currentSubCategory = Process('models.app.litemall.category.get', {
    select: [],
    wheres: [{ column: 'pid', value: currentCategory.id }],
    limit: 10
  } as YaoQueryParam.QueryParam);

  return convertKeysToCamelCase({
    currentSubCategory,
    currentCategory
  });
}

export function all() {


    
}
