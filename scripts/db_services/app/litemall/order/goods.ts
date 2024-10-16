import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.order.goods (app_litemall_order_goods)
 *
 * Table=> app_litemall_order_goods
 */
export interface IAppLitemallOrderGoods {
  /**undefined */
  id?: number;
  /**订单表的订单ID */
  order_id?: number;
  /**商品ID */
  goods_id?: number;
  /**商品名称 */
  goods_name?: string;
  /**商品编号 */
  goods_sn?: string;
  /**货品ID */
  product_id?: number;
  /**购买数量 */
  number?: number;
  /**售价 */
  price?: number;
  /**规格列表 */
  specifications: string;
  /**货品图片 */
  pic_url?: string;
  /**订单商品评论 */
  comment?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallOrderGoodsService {
  static FieldNames = [
    'id',
    'order_id',
    'goods_id',
    'goods_name',
    'goods_sn',
    'product_id',
    'number',
    'price',
    'specifications',
    'pic_url',
    'comment',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.order.goods';
  static TableName = 'app_litemall_order_goods';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallOrderGoods
    */
  static Find(
    key: number,
    where: YaoQueryParam.QueryParam
  ): IAppLitemallOrderGoods {
    return Process('models.app.litemall.order.goods.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallOrderGoods[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallOrderGoods[] {
    return Process('models.app.litemall.order.goods.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallOrderGoods>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallOrderGoods> {
    return Process(
      'models.app.litemall.order.goods.Paginate',
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
  static Create(data: IAppLitemallOrderGoods): number {
    return Process('models.app.litemall.order.goods.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.order.goods.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallOrderGoods): number {
    return Process('models.app.litemall.order.goods.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallOrderGoods) {
    return Process('models.app.litemall.order.goods.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(
    where: YaoQueryParam.QueryParam,
    line: IAppLitemallOrderGoods
  ) {
    return Process('models.app.litemall.order.goods.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(
    data: IAppLitemallOrderGoods[],
    line: IAppLitemallOrderGoods
  ) {
    return Process('models.app.litemall.order.goods.EachSave', data, line);
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
    data: IAppLitemallOrderGoods[],
    line: IAppLitemallOrderGoods
  ) {
    return Process(
      'models.app.litemall.order.goods.EachSaveAfterDelete',
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
    return Process('models.app.litemall.order.goods.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.order.goods.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.order.goods.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.order.goods.DestroyWhere', where);
  }
}
