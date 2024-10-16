import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.order (app_litemall_order)
 *
 * Table=> app_litemall_order
 */
export interface IAppLitemallOrder {
  /**undefined */
  id?: number;
  /**用户ID */
  user_id: number;
  /**订单编号 */
  order_sn: string;
  /**订单状态 */
  order_status: number;
  /**售后状态 */
  aftersale_status?: number;
  /**收货人名称 */
  consignee: string;
  /**收货人手机号 */
  mobile: string;
  /**收货具体地址 */
  address: string;
  /**用户订单留言 */
  message?: string;
  /**商品总费用 */
  goods_price: number;
  /**配送费用 */
  freight_price: number;
  /**优惠券减免 */
  coupon_price: number;
  /**用户积分减免 */
  integral_price: number;
  /**团购优惠价减免 */
  groupon_price: number;
  /**订单费用 */
  order_price: number;
  /**实付费用 */
  actual_price: number;
  /**微信付款编号 */
  pay_id?: string;
  /**微信付款时间 */
  pay_time?: Date;
  /**发货编号 */
  ship_sn?: string;
  /**发货快递公司 */
  ship_channel?: string;
  /**发货开始时间 */
  ship_time?: Date;
  /**实际退款金额 */
  refund_amount?: number;
  /**退款方式 */
  refund_type?: string;
  /**退款备注 */
  refund_content?: string;
  /**退款时间 */
  refund_time?: Date;
  /**用户确认收货时间 */
  confirm_time?: Date;
  /**待评价订单商品数量 */
  comments?: number;
  /**订单关闭时间 */
  end_time?: Date;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallOrderService {
  static FieldNames = [
    'id',
    'user_id',
    'order_sn',
    'order_status',
    'aftersale_status',
    'consignee',
    'mobile',
    'address',
    'message',
    'goods_price',
    'freight_price',
    'coupon_price',
    'integral_price',
    'groupon_price',
    'order_price',
    'actual_price',
    'pay_id',
    'pay_time',
    'ship_sn',
    'ship_channel',
    'ship_time',
    'refund_amount',
    'refund_type',
    'refund_content',
    'refund_time',
    'confirm_time',
    'comments',
    'end_time',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.order';
  static TableName = 'app_litemall_order';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallOrder
    */
  static Find(key: number, where: YaoQueryParam.QueryParam): IAppLitemallOrder {
    return Process('models.app.litemall.order.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallOrder[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallOrder[] {
    return Process('models.app.litemall.order.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallOrder>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallOrder> {
    return Process('models.app.litemall.order.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallOrder): number {
    return Process('models.app.litemall.order.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.order.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallOrder): number {
    return Process('models.app.litemall.order.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallOrder) {
    return Process('models.app.litemall.order.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(where: YaoQueryParam.QueryParam, line: IAppLitemallOrder) {
    return Process('models.app.litemall.order.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallOrder[], line: IAppLitemallOrder) {
    return Process('models.app.litemall.order.EachSave', data, line);
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
    data: IAppLitemallOrder[],
    line: IAppLitemallOrder
  ) {
    return Process(
      'models.app.litemall.order.EachSaveAfterDelete',
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
    return Process('models.app.litemall.order.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.order.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.order.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.order.DestroyWhere', where);
  }
}
