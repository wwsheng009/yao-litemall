import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.coupon (app.litemall.coupon)
 *
 * Table=> app_litemall_coupon
 */
export interface IAppLitemallCoupon {
  /**undefined */
  id?: number;
  /**优惠券名称 */
  name: string;
  /**优惠券介绍 */
  desc?: string;
  /**优惠券标签 */
  tag?: string;
  /**优惠券数量 */
  total?: number;
  /**优惠金额， */
  discount?: number;
  /**最少消费金额 */
  min?: number;
  /**用户领券限制数量 */
  limit?: number;
  /**优惠券赠送类型 */
  type?: number;
  /**优惠券状态 */
  status?: number;
  /**商品限制类型 */
  goods_type?: number;
  /**商品限制值 */
  goods_value?: object;
  /**优惠券兑换码 */
  code?: string;
  /**有效时间限制 */
  time_type?: number;
  /**有效天数 */
  days?: number;
  /**使用券开始时间 */
  start_time?: Date;
  /**使用券截至时间 */
  end_time?: Date;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallCouponService {
  static FieldNames = [
    'id',
    'name',
    'desc',
    'tag',
    'total',
    'discount',
    'min',
    'limit',
    'type',
    'status',
    'goods_type',
    'goods_value',
    'code',
    'time_type',
    'days',
    'start_time',
    'end_time',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.coupon';
  static TableName = 'app_litemall_coupon';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallCoupon
    */
  static Find(
    key: number,
    where: YaoQueryParam.QueryParam
  ): IAppLitemallCoupon {
    return Process('models.app.litemall.coupon.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallCoupon[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallCoupon[] {
    return Process('models.app.litemall.coupon.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallCoupon>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallCoupon> {
    return Process('models.app.litemall.coupon.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallCoupon): number {
    return Process('models.app.litemall.coupon.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.coupon.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallCoupon): number {
    return Process('models.app.litemall.coupon.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallCoupon) {
    return Process('models.app.litemall.coupon.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(
    where: YaoQueryParam.QueryParam,
    line: IAppLitemallCoupon
  ) {
    return Process('models.app.litemall.coupon.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallCoupon[], line: IAppLitemallCoupon) {
    return Process('models.app.litemall.coupon.EachSave', data, line);
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
    data: IAppLitemallCoupon[],
    line: IAppLitemallCoupon
  ) {
    return Process(
      'models.app.litemall.coupon.EachSaveAfterDelete',
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
    return Process('models.app.litemall.coupon.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.coupon.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.coupon.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.coupon.DestroyWhere', where);
  }
}
