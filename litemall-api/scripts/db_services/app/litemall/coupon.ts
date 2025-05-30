import { Process, Query } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.coupon (app.litemall.coupon)
 *
 * Table=> app_litemall_coupon
 */
export interface IAppLitemallCoupon {
  /**id */
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
  goods_value?: any;
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
  static FieldNames = {
    /** id */
    id: 'id',
    /** 优惠券名称 */
    name: 'name',
    /** 优惠券介绍 */
    desc: 'desc',
    /** 优惠券标签 */
    tag: 'tag',
    /** 优惠券数量 */
    total: 'total',
    /** 优惠金额， */
    discount: 'discount',
    /** 最少消费金额 */
    min: 'min',
    /** 用户领券限制数量 */
    limit: 'limit',
    /** 优惠券赠送类型 */
    type: 'type',
    /** 优惠券状态 */
    status: 'status',
    /** 商品限制类型 */
    goods_type: 'goods_type',
    /** 商品限制值 */
    goods_value: 'goods_value',
    /** 优惠券兑换码 */
    code: 'code',
    /** 有效时间限制 */
    time_type: 'time_type',
    /** 有效天数 */
    days: 'days',
    /** 使用券开始时间 */
    start_time: 'start_time',
    /** 使用券截至时间 */
    end_time: 'end_time',
    /** 删除时间 */
    deleted_at: 'deleted_at',
    /** 创建时间 */
    created_at: 'created_at',
    /** 更新时间 */
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.coupon';
  static TableName = 'app_litemall_coupon';

  /**
   * 根据主键与附加条件查询单条记录。
   * @param key 主键
   * @param query 筛选条件
   * @returns IAppLitemallCoupon
   */
  static Find(
    key: number,
    query: YaoQueryParam.QueryParam
  ): IAppLitemallCoupon {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.find`,
      key,
      query
    );
  }

  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallCoupon[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallCoupon[] {
    return Process(`models.${AppLitemallCouponService.ModelID}.get`, query);
  }

  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallCoupon>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallCoupon> {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallCoupon): number {
    return Process(`models.${AppLitemallCouponService.ModelID}.create`, data);
  }

  /**
   * 根据字段与数据，一次性插入多条数据记录，返回插入行数
   * @param columns
   * @param values
   * @returns
   */
  static Insert(columns: string[], values: any[][]): number {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.Insert`,
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
    data: IAppLitemallCoupon,
    uniqueBy: string | string[],
    updateColumns?: string[]
  ): number {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.Upsert`,
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
  static InsertBatch(data: IAppLitemallCoupon[]): number {
    const { columns, values } = Process('utils.arr.split', data);
    return Process(
      `models.${AppLitemallCouponService.ModelID}.Insert`,
      columns,
      values
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: Partial<IAppLitemallCoupon>): number {
    return Process(`models.${AppLitemallCouponService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: Partial<IAppLitemallCoupon>) {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.Update`,
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
    line: Partial<IAppLitemallCoupon>
  ) {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.UpdateWhere`,
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
    data: IAppLitemallCoupon[],
    line: Partial<IAppLitemallCoupon>
  ) {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.EachSave`,
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
    data: IAppLitemallCoupon[],
    line: Partial<IAppLitemallCoupon>
  ) {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallCouponService.ModelID}.Delete`, key);
  }

  /**
   * 删除所有数据
   * @returns
   */
  static DeleteAll() {
    return new Query('default').Run({
      sql: { stmt: `delete from ${AppLitemallCouponService.TableName}` }
    });
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallCouponService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallCouponService.ModelID}.DestroyWhere`,
      query
    );
  }
}
