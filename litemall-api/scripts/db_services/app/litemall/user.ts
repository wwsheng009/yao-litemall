import { Process, Query } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.user (app_litemall_user)
 *
 * Table=> app_litemall_user
 */
export interface IAppLitemallUser {
  /**id */
  id?: number;
  /**用户名称 */
  username: string;
  /**用户密码 */
  password?: string;
  /**性别 */
  gender?: number;
  /**生日 */
  birthday?: Date;
  /**最近一次登录时间 */
  last_login_time?: Date;
  /**最近一次登录IP地址 */
  last_login_ip?: string;
  /**用户级别 */
  user_level?: number;
  /**用户昵称或网络名称 */
  nickname?: string;
  /**用户手机号码 */
  mobile?: string;
  /**用户头像图片 */
  avatar?: string;
  /**微信openid */
  weixin_openid?: string;
  /**微信会话KEY */
  session_key?: string;
  /**状态 */
  status?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallUserService {
  static FieldNames = {
    /** id */
    id: 'id',
    /** 用户名称 */
    username: 'username',
    /** 用户密码 */
    password: 'password',
    /** 性别 */
    gender: 'gender',
    /** 生日 */
    birthday: 'birthday',
    /** 最近一次登录时间 */
    last_login_time: 'last_login_time',
    /** 最近一次登录IP地址 */
    last_login_ip: 'last_login_ip',
    /** 用户级别 */
    user_level: 'user_level',
    /** 用户昵称或网络名称 */
    nickname: 'nickname',
    /** 用户手机号码 */
    mobile: 'mobile',
    /** 用户头像图片 */
    avatar: 'avatar',
    /** 微信openid */
    weixin_openid: 'weixin_openid',
    /** 微信会话KEY */
    session_key: 'session_key',
    /** 状态 */
    status: 'status',
    /** 删除时间 */
    deleted_at: 'deleted_at',
    /** 创建时间 */
    created_at: 'created_at',
    /** 更新时间 */
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.user';
  static TableName = 'app_litemall_user';

  /**
   * 根据主键与附加条件查询单条记录。
   * @param key 主键
   * @param query 筛选条件
   * @returns IAppLitemallUser
   */
  static Find(key: number, query: YaoQueryParam.QueryParam): IAppLitemallUser {
    return Process(`models.${AppLitemallUserService.ModelID}.find`, key, query);
  }

  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallUser[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallUser[] {
    return Process(`models.${AppLitemallUserService.ModelID}.get`, query);
  }

  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallUser>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallUser> {
    return Process(
      `models.${AppLitemallUserService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallUser): number {
    return Process(`models.${AppLitemallUserService.ModelID}.create`, data);
  }

  /**
   * 根据字段与数据，一次性插入多条数据记录，返回插入行数
   * @param columns
   * @param values
   * @returns
   */
  static Insert(columns: string[], values: any[][]): number {
    return Process(
      `models.${AppLitemallUserService.ModelID}.Insert`,
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
    data: IAppLitemallUser,
    uniqueBy: string | string[],
    updateColumns?: string[]
  ): number {
    return Process(
      `models.${AppLitemallUserService.ModelID}.Upsert`,
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
  static InsertBatch(data: IAppLitemallUser[]): number {
    const { columns, values } = Process('utils.arr.split', data);
    return Process(
      `models.${AppLitemallUserService.ModelID}.Insert`,
      columns,
      values
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: Partial<IAppLitemallUser>): number {
    return Process(`models.${AppLitemallUserService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: Partial<IAppLitemallUser>) {
    return Process(
      `models.${AppLitemallUserService.ModelID}.Update`,
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
    line: Partial<IAppLitemallUser>
  ) {
    return Process(
      `models.${AppLitemallUserService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAppLitemallUser[], line: Partial<IAppLitemallUser>) {
    return Process(
      `models.${AppLitemallUserService.ModelID}.EachSave`,
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
    data: IAppLitemallUser[],
    line: Partial<IAppLitemallUser>
  ) {
    return Process(
      `models.${AppLitemallUserService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallUserService.ModelID}.Delete`, key);
  }

  /**
   * 删除所有数据
   * @returns
   */
  static DeleteAll() {
    return new Query('default').Run({
      sql: { stmt: `delete from ${AppLitemallUserService.TableName}` }
    });
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallUserService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallUserService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallUserService.ModelID}.DestroyWhere`,
      query
    );
  }
}
