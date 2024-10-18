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
  static FieldNames = {
    id: 'id',
    user_id: 'user_id',
    order_sn: 'order_sn',
    order_status: 'order_status',
    aftersale_status: 'aftersale_status',
    consignee: 'consignee',
    mobile: 'mobile',
    address: 'address',
    message: 'message',
    goods_price: 'goods_price',
    freight_price: 'freight_price',
    coupon_price: 'coupon_price',
    integral_price: 'integral_price',
    groupon_price: 'groupon_price',
    order_price: 'order_price',
    actual_price: 'actual_price',
    pay_id: 'pay_id',
    pay_time: 'pay_time',
    ship_sn: 'ship_sn',
    ship_channel: 'ship_channel',
    ship_time: 'ship_time',
    refund_amount: 'refund_amount',
    refund_type: 'refund_type',
    refund_content: 'refund_content',
    refund_time: 'refund_time',
    confirm_time: 'confirm_time',
    comments: 'comments',
    end_time: 'end_time',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.order';
  static TableName = 'app_litemall_order';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallOrder
    */
  static Find(key: number, query: YaoQueryParam.QueryParam): IAppLitemallOrder {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.find`,
      key,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallOrder[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallOrder[] {
    return Process(`models.${AppLitemallOrderService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallOrder>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallOrder> {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallOrder): number {
    return Process(`models.${AppLitemallOrderService.ModelID}.create`, data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallOrder): number {
    return Process(`models.${AppLitemallOrderService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallOrder) {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.Update`,
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
  static UpdateWhere(query: YaoQueryParam.QueryParam, line: IAppLitemallOrder) {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAppLitemallOrder[], line: IAppLitemallOrder) {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.EachSave`,
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
    data: IAppLitemallOrder[],
    line: IAppLitemallOrder
  ) {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallOrderService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallOrderService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallOrderService.ModelID}.DestroyWhere`,
      query
    );
  }
}
