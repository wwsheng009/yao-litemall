import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.cart (app_litemall_cart)
 *
 * Table=> app_litemall_cart
 */
export interface IAppLitemallCart {
  /**undefined */
  id?: number;
  /**用户ID */
  user_id?: number;
  /**商品ID */
  goods_id?: number;
  /**商品编号 */
  goods_sn?: string;
  /**商品名称 */
  goods_name?: string;
  /**货品ID */
  product_id?: number;
  /**商品价格 */
  price?: number;
  /**商品数量 */
  number?: number;
  /**商品规格值列表 */
  specifications?: string[];
  /**否选择状态 */
  checked?: boolean;
  /**商品图片 */
  pic_url?: string;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallCartService {
  static FieldNames = {
    id: 'id',
    user_id: 'user_id',
    goods_id: 'goods_id',
    goods_sn: 'goods_sn',
    goods_name: 'goods_name',
    product_id: 'product_id',
    price: 'price',
    number: 'number',
    specifications: 'specifications',
    checked: 'checked',
    pic_url: 'pic_url',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.cart';
  static TableName = 'app_litemall_cart';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallCart
    */
  static Find(key: number, query: YaoQueryParam.QueryParam): IAppLitemallCart {
    return Process(`models.${AppLitemallCartService.ModelID}.find`, key, query);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallCart[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallCart[] {
    return Process(`models.${AppLitemallCartService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallCart>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallCart> {
    return Process(
      `models.${AppLitemallCartService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallCart): number {
    return Process(`models.${AppLitemallCartService.ModelID}.create`, data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallCartService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallCart): number {
    return Process(`models.${AppLitemallCartService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallCart) {
    return Process(
      `models.${AppLitemallCartService.ModelID}.Update`,
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
  static UpdateWhere(query: YaoQueryParam.QueryParam, line: IAppLitemallCart) {
    return Process(
      `models.${AppLitemallCartService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAppLitemallCart[], line: IAppLitemallCart) {
    return Process(
      `models.${AppLitemallCartService.ModelID}.EachSave`,
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
    data: IAppLitemallCart[],
    line: IAppLitemallCart
  ) {
    return Process(
      `models.${AppLitemallCartService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallCartService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallCartService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallCartService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallCartService.ModelID}.DestroyWhere`,
      query
    );
  }
}
