import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.brand (app_litemall_brand)
 *
 * Table=> app_litemall_brand
 */
export interface IAppLitemallBrand {
  /**undefined */
  id?: number;
  /**品牌商名称 */
  name?: string;
  /**品牌商简介 */
  desc?: string;
  /**品牌商图片 */
  pic_url?: string;
  /**排序 */
  sort_order?: number;
  /**品牌商的商品低价 */
  floor_price?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallBrandService {
  static FieldNames = [
    'id',
    'name',
    'desc',
    'pic_url',
    'sort_order',
    'floor_price',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.brand';
  static TableName = 'app_litemall_brand';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallBrand
    */
  static Find(key: number, query: YaoQueryParam.QueryParam): IAppLitemallBrand {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.find`,
      key,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallBrand[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallBrand[] {
    return Process(`models.${AppLitemallBrandService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallBrand>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallBrand> {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.Paginate`,
      query,
      page,
      perPage
    );
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallBrand): number {
    return Process(`models.${AppLitemallBrandService.ModelID}.create`, data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallBrand): number {
    return Process(`models.${AppLitemallBrandService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallBrand) {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.Update`,
      key,
      line
    );
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param query
   * @param line
   * @returns
   */
  static UpdateWhere(query: YaoQueryParam.QueryParam, line: IAppLitemallBrand) {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.UpdateWhere`,
      query,
      line
    );
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallBrand[], line: IAppLitemallBrand) {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.EachSave`,
      data,
      line
    );
  }

  /**
   * 删除并保存数据，删除给定 ID 的记录后，保存多条记录数据, 不包含主键字段则创建记录, 存在更新记录, 返回记录 ID 集合 ，返回创建或更新的记录 ID 集合。
   * @param keys
   * @param data
   * @param line
   * @returns
   */
  static EachSaveAfterDelete(
    keys: number[],
    data: IAppLitemallBrand[],
    line: IAppLitemallBrand
  ) {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.EachSaveAfterDelete`,
      keys,
      data,
      line
    );
  }

  /**
   * 根据主键删除数据
   * @param key
   * @returns
   */
  static Delete(key: number) {
    return Process(`models.${AppLitemallBrandService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallBrandService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallBrandService.ModelID}.DestroyWhere`,
      query
    );
  }
}
