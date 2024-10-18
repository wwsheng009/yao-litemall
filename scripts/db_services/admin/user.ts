import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> admin.user (管理员)
 *
 * Table=> admin_user (the administraor table)
 */
export interface IAdminUser {
  /**ID */
  id: number;
  /**类型 */
  type?: 'admin' | 'staff' | 'user' | 'robot';
  /**邮箱 */
  email?: string;
  /**手机号 */
  mobile?: string;
  /**登录密码 */
  password?: string;
  /**操作密码 */
  password2nd?: string;
  /**姓名 */
  name?: string;
  /**身份证号码 */
  idcard?: string;
  /**API Key */
  key: string;
  /**API 密钥 */
  secret?: string;
  /**扩展信息 */
  extra?: any;
  /**状态 */
  status?: 'enabled' | 'disabled';
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AdminUserService {
  static FieldNames = {
    id: 'id',
    type: 'type',
    email: 'email',
    mobile: 'mobile',
    password: 'password',
    password2nd: 'password2nd',
    name: 'name',
    idcard: 'idcard',
    key: 'key',
    secret: 'secret',
    extra: 'extra',
    status: 'status',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };
  static ModelID = 'admin.user';
  static TableName = 'admin_user';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAdminUser
    */
  static Find(key: string, query: YaoQueryParam.QueryParam): IAdminUser {
    return Process(`models.${AdminUserService.ModelID}.find`, key, query);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAdminUser[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAdminUser[] {
    return Process(`models.${AdminUserService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAdminUser>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAdminUser> {
    return Process(
      `models.${AdminUserService.ModelID}.Paginate`,
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
  static Create(data: IAdminUser): number {
    return Process(`models.${AdminUserService.ModelID}.create`, data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(`models.${AdminUserService.ModelID}.Insert`, fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAdminUser): number {
    return Process(`models.${AdminUserService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: string, line: IAdminUser) {
    return Process(`models.${AdminUserService.ModelID}.Update`, key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param query
   * @param line
   * @returns
   */
  static UpdateWhere(query: YaoQueryParam.QueryParam, line: IAdminUser) {
    return Process(
      `models.${AdminUserService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAdminUser[], line: IAdminUser) {
    return Process(`models.${AdminUserService.ModelID}.EachSave`, data, line);
  }

  /**
   * 删除并保存数据，删除给定 ID 的记录后，保存多条记录数据, 不包含主键字段则创建记录, 存在更新记录, 返回记录 ID 集合 ，返回创建或更新的记录 ID 集合。
   * @param keys
   * @param data
   * @param line
   * @returns
   */
  static EachSaveAfterDelete(
    keys: string[],
    data: IAdminUser[],
    line: IAdminUser
  ) {
    return Process(
      `models.${AdminUserService.ModelID}.EachSaveAfterDelete`,
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
  static Delete(key: string) {
    return Process(`models.${AdminUserService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(`models.${AdminUserService.ModelID}.DeleteWhere`, query);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: string) {
    return Process(`models.${AdminUserService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(`models.${AdminUserService.ModelID}.DestroyWhere`, query);
  }
}
