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
  extra?: object;
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
  static FieldNames = [
    'id',
    'type',
    'email',
    'mobile',
    'password',
    'password2nd',
    'name',
    'idcard',
    'key',
    'secret',
    'extra',
    'status',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'admin.user';
  static TableName = 'admin_user';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAdminUser
    */
  static Find(key: string, where: YaoQueryParam.QueryParam): IAdminUser {
    return Process('models.admin.user.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAdminUser[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAdminUser[] {
    return Process('models.admin.user.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAdminUser>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAdminUser> {
    return Process('models.admin.user.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAdminUser): number {
    return Process('models.admin.user.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.admin.user.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAdminUser): number {
    return Process('models.admin.user.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: string, line: IAdminUser) {
    return Process('models.admin.user.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(where: YaoQueryParam.QueryParam, line: IAdminUser) {
    return Process('models.admin.user.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAdminUser[], line: IAdminUser) {
    return Process('models.admin.user.EachSave', data, line);
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
    return Process('models.admin.user.EachSaveAfterDelete', keys, data, line);
  }

  /**
   * 根据主键删除数据
   * @param key
   * @returns
   */
  static Delete(key: string) {
    return Process('models.admin.user.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.admin.user.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: string) {
    return Process('models.admin.user.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.admin.user.DestroyWhere', where);
  }
}
