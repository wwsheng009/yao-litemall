import { Process, Query } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.groupon (app_litemall_groupon)
 *
 * Table=> app_litemall_groupon
 */
export interface IAppLitemallGroupon {
  /**id */
  id?: number;
  /**关联的订单ID */
  order_id: number;
  /**团购活动ID */
  groupon_id?: number;
  /**团购规则ID */
  rules_id: number;
  /**用户ID */
  user_id: number;
  /**团购分享图片地址 */
  share_url?: string;
  /**开团用户ID */
  creator_user_id: number;
  /**开团时间 */
  creator_user_time?: Date;
  /**团购活动状态 */
  status?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallGrouponService {
  static FieldNames = {
    /** id */
    id: 'id',
    /** 关联的订单ID */
    order_id: 'order_id',
    /** 团购活动ID */
    groupon_id: 'groupon_id',
    /** 团购规则ID */
    rules_id: 'rules_id',
    /** 用户ID */
    user_id: 'user_id',
    /** 团购分享图片地址 */
    share_url: 'share_url',
    /** 开团用户ID */
    creator_user_id: 'creator_user_id',
    /** 开团时间 */
    creator_user_time: 'creator_user_time',
    /** 团购活动状态 */
    status: 'status',
    /** 删除时间 */
    deleted_at: 'deleted_at',
    /** 创建时间 */
    created_at: 'created_at',
    /** 更新时间 */
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.groupon';
  static TableName = 'app_litemall_groupon';

  /**
   * 根据主键与附加条件查询单条记录。
   * @param key 主键
   * @param query 筛选条件
   * @returns IAppLitemallGroupon
   */
  static Find(
    key: number,
    query: YaoQueryParam.QueryParam
  ): IAppLitemallGroupon {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.find`,
      key,
      query
    );
  }

  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallGroupon[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallGroupon[] {
    return Process(`models.${AppLitemallGrouponService.ModelID}.get`, query);
  }

  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallGroupon>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallGroupon> {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallGroupon): number {
    return Process(`models.${AppLitemallGrouponService.ModelID}.create`, data);
  }

  /**
   * 根据字段与数据，一次性插入多条数据记录，返回插入行数
   * @param columns
   * @param values
   * @returns
   */
  static Insert(columns: string[], values: any[][]): number {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.Insert`,
      columns,
      values
    );
  }

  /**
   * 如果记录不存在则插入，如果存在则更新记录
   * @param data 数据
   * @param uniqueBy 唯一键 或 唯一键数组
   * @param updateColumns 更新或插入记录的ID
   * @returns afftectedRows
   */
  static Upsert(
    data: IAppLitemallGroupon,
    uniqueBy: string | string[],
    updateColumns?: string[]
  ): number {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.Upsert`,
      data,
      uniqueBy,
      updateColumns
    );
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param data
   * @returns
   */
  static InsertBatch(data: IAppLitemallGroupon[]): number {
    const { columns, values } = Process('utils.arr.split', data);
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.Insert`,
      columns,
      values
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: Partial<IAppLitemallGroupon>): number {
    return Process(`models.${AppLitemallGrouponService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: Partial<IAppLitemallGroupon>) {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.Update`,
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
    line: Partial<IAppLitemallGroupon>
  ) {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.UpdateWhere`,
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
  static EachSave(
    data: IAppLitemallGroupon[],
    line: Partial<IAppLitemallGroupon>
  ) {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.EachSave`,
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
    data: IAppLitemallGroupon[],
    line: Partial<IAppLitemallGroupon>
  ) {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallGrouponService.ModelID}.Delete`, key);
  }

  /**
   * 删除所有数据
   * @returns
   */
  static DeleteAll() {
    return new Query('default').Run({
      sql: { stmt: `delete from ${AppLitemallGrouponService.TableName}` }
    });
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallGrouponService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallGrouponService.ModelID}.DestroyWhere`,
      query
    );
  }
}
