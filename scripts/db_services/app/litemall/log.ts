import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.log (app_litemall_log)
 *
 * Table=> app_litemall_log
 */
export interface IAppLitemallLog {
  /**undefined */
  id?: number;
  /**管理员 */
  admin?: string;
  /**管理员地址 */
  ip?: string;
  /**操作分类 */
  type?: number;
  /**操作动作 */
  action?: string;
  /**操作状态 */
  status?: number;
  /**操作结果 */
  result?: string;
  /**补充信息 */
  comment?: string;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallLogService {
  static FieldNames = [
    'id',
    'admin',
    'ip',
    'type',
    'action',
    'status',
    'result',
    'comment',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.log';
  static TableName = 'app_litemall_log';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallLog
    */
  static Find(key: number, where: YaoQueryParam.QueryParam): IAppLitemallLog {
    return Process('models.app.litemall.log.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallLog[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallLog[] {
    return Process('models.app.litemall.log.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallLog>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallLog> {
    return Process('models.app.litemall.log.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallLog): number {
    return Process('models.app.litemall.log.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.log.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallLog): number {
    return Process('models.app.litemall.log.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallLog) {
    return Process('models.app.litemall.log.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(where: YaoQueryParam.QueryParam, line: IAppLitemallLog) {
    return Process('models.app.litemall.log.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallLog[], line: IAppLitemallLog) {
    return Process('models.app.litemall.log.EachSave', data, line);
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
    data: IAppLitemallLog[],
    line: IAppLitemallLog
  ) {
    return Process(
      'models.app.litemall.log.EachSaveAfterDelete',
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
    return Process('models.app.litemall.log.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.log.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.log.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.log.DestroyWhere', where);
  }
}
