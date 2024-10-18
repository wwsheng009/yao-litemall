import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.goods (app.litemall.goods)
 *
 * Table=> app_litemall_goods
 */
export interface IAppLitemallGoods {
  /**ID */
  id?: number;
  /**商品编号 */
  goods_sn?: string;
  /**商品名称 */
  name?: string;
  /**类目ID */
  category_id?: number;
  /**品牌ID */
  brand_id?: number;
  /**商品宣传图片列表 */
  gallery?: any;
  /**商品关键字，采用逗号间隔 */
  keywords?: string;
  /**商品简介 */
  brief?: string;
  /**是否上架 */
  is_on_sale?: boolean;
  /**商品页面商品图片 */
  pic_url?: string;
  /**商品分享海报 */
  share_url?: string;
  /**是否人气推荐 */
  is_hot?: boolean;
  /**商品单位 */
  unit?: string;
  /**专柜价格 */
  counter_price?: number;
  /**商品详细介绍 */
  detail?: string;
  /**是否新品首发 */
  is_new?: boolean;
  /**零售价格 */
  retail_price?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
  /** Relation: attributes=> app.litemall.goods.attribute */
  attributes?: IAppLitemallGoodsAttribute[];
  /** Relation: products=> app.litemall.goods.product */
  products?: IAppLitemallGoodsProduct[];
  /** Relation: specifications=> app.litemall.goods.specification */
  specifications?: IAppLitemallGoodsSpecification[];
  /** Relation: brand=> app.litemall.brand */
  brand?: IAppLitemallBrand;
  /** Relation: category=> app.litemall.category */
  category?: IAppLitemallCategory;
}

export class AppLitemallGoodsService {
  static FieldNames = {
    id: 'id',
    goods_sn: 'goods_sn',
    name: 'name',
    category_id: 'category_id',
    brand_id: 'brand_id',
    gallery: 'gallery',
    keywords: 'keywords',
    brief: 'brief',
    is_on_sale: 'is_on_sale',
    pic_url: 'pic_url',
    share_url: 'share_url',
    is_hot: 'is_hot',
    unit: 'unit',
    counter_price: 'counter_price',
    detail: 'detail',
    is_new: 'is_new',
    retail_price: 'retail_price',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.goods';
  static TableName = 'app_litemall_goods';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallGoods
    */
  static Find(key: number, query: YaoQueryParam.QueryParam): IAppLitemallGoods {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.find`,
      key,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallGoods[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallGoods[] {
    return Process(`models.${AppLitemallGoodsService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallGoods>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallGoods> {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallGoods): number {
    return Process(`models.${AppLitemallGoodsService.ModelID}.create`, data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallGoods): number {
    return Process(`models.${AppLitemallGoodsService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallGoods) {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.Update`,
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
  static UpdateWhere(query: YaoQueryParam.QueryParam, line: IAppLitemallGoods) {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAppLitemallGoods[], line: IAppLitemallGoods) {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.EachSave`,
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
    data: IAppLitemallGoods[],
    line: IAppLitemallGoods
  ) {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallGoodsService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallGoodsService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.DestroyWhere`,
      query
    );
  }
}
