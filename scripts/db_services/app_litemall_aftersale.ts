import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.aftersale (app_litemall_aftersale)
 *
 * Table=> app_litemall_aftersale
 */
export interface IAppLitemallAftersale {
  /**undefined */
  id?: number;
  /**售后编号 */
  aftersale_sn?: string;
  /**订单ID */
  order_id: number;
  /**用户ID */
  user_id: number;
  /**售后类型 */
  type?: number;
  /**退款原因 */
  reason?: string;
  /**退款金额 */
  amount?: number;
  /**退款凭证图片链接 */
  pictures?: object;
  /**退款说明 */
  comment?: string;
  /**售后状态 */
  status?: number;
  /**管理员操作时间 */
  handle_time?: Date;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallAftersaleService {
  static FieldNames = [
    'id',
    'aftersale_sn',
    'order_id',
    'user_id',
    'type',
    'reason',
    'amount',
    'pictures',
    'comment',
    'status',
    'handle_time',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.aftersale';
  static TableName = 'app_litemall_aftersale';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallAftersale
    */
  static Find(
    key: number,
    query: YaoQueryParam.QueryParam
  ): IAppLitemallAftersale {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.find`,
      key,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallAftersale[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallAftersale[] {
    return Process(`models.${AppLitemallAftersaleService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallAftersale>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallAftersale> {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallAftersale): number {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.create`,
      data
    );
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallAftersale): number {
    return Process(`models.${AppLitemallAftersaleService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallAftersale) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.Update`,
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
  static UpdateWhere(
    query: YaoQueryParam.QueryParam,
    line: IAppLitemallAftersale
  ) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAppLitemallAftersale[], line: IAppLitemallAftersale) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.EachSave`,
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
    data: IAppLitemallAftersale[],
    line: IAppLitemallAftersale
  ) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallAftersaleService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.Destroy`,
      key
    );
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallAftersaleService.ModelID}.DestroyWhere`,
      query
    );
  }
}
