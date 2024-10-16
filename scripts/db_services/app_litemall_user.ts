import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.user (app_litemall_user)
 *
 * Table=> app_litemall_user
 */
export interface IAppLitemallUser {
  /**undefined */
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
  static FieldNames = [
    'id',
    'username',
    'password',
    'gender',
    'birthday',
    'last_login_time',
    'last_login_ip',
    'user_level',
    'nickname',
    'mobile',
    'avatar',
    'weixin_openid',
    'session_key',
    'status',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.user';
  static TableName = 'app_litemall_user';

  /**
    * 根据主键查询单条记录。
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
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallUserService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallUser): number {
    return Process(`models.${AppLitemallUserService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallUser) {
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
  static UpdateWhere(query: YaoQueryParam.QueryParam, line: IAppLitemallUser) {
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
  static EachSave(data: IAppLitemallUser[], line: IAppLitemallUser) {
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
    line: IAppLitemallUser
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
