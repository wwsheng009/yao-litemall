import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.coupon.user (app_litemall_coupon_user)
 *
 * Table=> app_litemall_coupon_user
 */
export interface IAppLitemallCouponUser {
  /**undefined */
  id?: number;
  /**用户ID */
  user_id: number;
  /**优惠券ID */
  coupon_id: number;
  /**使用状态 */
  status?: number;
  /**使用时间 */
  used_time?: Date;
  /**有效期开始时间 */
  start_time?: Date;
  /**有效期截至时间 */
  end_time?: Date;
  /**订单ID */
  order_id?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallCouponUserService {
  static FieldNames = [
    'id',
    'user_id',
    'coupon_id',
    'status',
    'used_time',
    'start_time',
    'end_time',
    'order_id',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.coupon.user';
  static TableName = 'app_litemall_coupon_user';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallCouponUser
    */
  static Find(
    key: number,
    where: YaoQueryParam.QueryParam
  ): IAppLitemallCouponUser {
    return Process('models.app.litemall.coupon.user.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallCouponUser[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallCouponUser[] {
    return Process('models.app.litemall.coupon.user.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallCouponUser>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallCouponUser> {
    return Process(
      'models.app.litemall.coupon.user.Paginate',
      where,
      page,
      perPage
    );
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallCouponUser): number {
    return Process('models.app.litemall.coupon.user.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.coupon.user.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallCouponUser): number {
    return Process('models.app.litemall.coupon.user.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallCouponUser) {
    return Process('models.app.litemall.coupon.user.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(
    where: YaoQueryParam.QueryParam,
    line: IAppLitemallCouponUser
  ) {
    return Process('models.app.litemall.coupon.user.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(
    data: IAppLitemallCouponUser[],
    line: IAppLitemallCouponUser
  ) {
    return Process('models.app.litemall.coupon.user.EachSave', data, line);
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
    data: IAppLitemallCouponUser[],
    line: IAppLitemallCouponUser
  ) {
    return Process(
      'models.app.litemall.coupon.user.EachSaveAfterDelete',
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
    return Process('models.app.litemall.coupon.user.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.coupon.user.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.coupon.user.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.coupon.user.DestroyWhere', where);
  }
}
