import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.region (app_litemall_region)
 *
 * Table=> app_litemall_region
 */
export interface IAppLitemallRegion {
  /**undefined */
  id?: number;
  /**行政区域父ID */
  pid?: number;
  /**行政区域名称 */
  name?: string;
  /**行政区域类型 */
  type?: number;
  /**行政区域编码 */
  code?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallRegionService {
  static FieldNames = [
    'id',
    'pid',
    'name',
    'type',
    'code',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.region';
  static TableName = 'app_litemall_region';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallRegion
    */
  static Find(
    key: number,
    where: YaoQueryParam.QueryParam
  ): IAppLitemallRegion {
    return Process('models.app.litemall.region.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallRegion[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallRegion[] {
    return Process('models.app.litemall.region.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallRegion>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallRegion> {
    return Process('models.app.litemall.region.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallRegion): number {
    return Process('models.app.litemall.region.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.region.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallRegion): number {
    return Process('models.app.litemall.region.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallRegion) {
    return Process('models.app.litemall.region.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(
    where: YaoQueryParam.QueryParam,
    line: IAppLitemallRegion
  ) {
    return Process('models.app.litemall.region.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallRegion[], line: IAppLitemallRegion) {
    return Process('models.app.litemall.region.EachSave', data, line);
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
    data: IAppLitemallRegion[],
    line: IAppLitemallRegion
  ) {
    return Process(
      'models.app.litemall.region.EachSaveAfterDelete',
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
    return Process('models.app.litemall.region.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.region.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.region.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.region.DestroyWhere', where);
  }
}
