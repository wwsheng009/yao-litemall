import { Process, Query } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';
import { IAppLitemallCategory } from './category';
import { IAppLitemallBrand } from './brand';
import { IAppLitemallGoodsAttribute } from './goods/attribute';
import { IAppLitemallGoodsProduct } from './goods/product';
import { IAppLitemallGoodsSpecification } from './goods/specification';

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
  /** Relation: category=> app.litemall.category */
  category?: IAppLitemallCategory;
  /** Relation: attributes=> app.litemall.goods.attribute */
  attributes?: IAppLitemallGoodsAttribute[];
  /** Relation: products=> app.litemall.goods.product */
  products?: IAppLitemallGoodsProduct[];
  /** Relation: specifications=> app.litemall.goods.specification */
  specifications?: IAppLitemallGoodsSpecification[];
  /** Relation: brand=> app.litemall.brand */
  brand?: IAppLitemallBrand;
}

export class AppLitemallGoodsService {
  static FieldNames = {
    /** ID */
    id: 'id',
    /** 商品编号 */
    goods_sn: 'goods_sn',
    /** 商品名称 */
    name: 'name',
    /** 类目ID */
    category_id: 'category_id',
    /** 品牌ID */
    brand_id: 'brand_id',
    /** 商品宣传图片列表 */
    gallery: 'gallery',
    /** 商品关键字，采用逗号间隔 */
    keywords: 'keywords',
    /** 商品简介 */
    brief: 'brief',
    /** 是否上架 */
    is_on_sale: 'is_on_sale',
    /** 商品页面商品图片 */
    pic_url: 'pic_url',
    /** 商品分享海报 */
    share_url: 'share_url',
    /** 是否人气推荐 */
    is_hot: 'is_hot',
    /** 商品单位 */
    unit: 'unit',
    /** 专柜价格 */
    counter_price: 'counter_price',
    /** 商品详细介绍 */
    detail: 'detail',
    /** 是否新品首发 */
    is_new: 'is_new',
    /** 零售价格 */
    retail_price: 'retail_price',
    /** 删除时间 */
    deleted_at: 'deleted_at',
    /** 创建时间 */
    created_at: 'created_at',
    /** 更新时间 */
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.goods';
  static TableName = 'app_litemall_goods';

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
   * 根据字段与数据，一次性插入多条数据记录，返回插入行数
   * @param columns
   * @param values
   * @returns
   */
  static Insert(columns: string[], values: any[][]): number {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.Insert`,
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
    data: IAppLitemallGoods,
    uniqueBy: string | string[],
    updateColumns?: string[]
  ): number {
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.Upsert`,
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
  static InsertBatch(data: IAppLitemallGoods[]): number {
    const { columns, values } = Process('utils.arr.split', data);
    return Process(
      `models.${AppLitemallGoodsService.ModelID}.Insert`,
      columns,
      values
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: Partial<IAppLitemallGoods>): number {
    return Process(`models.${AppLitemallGoodsService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: Partial<IAppLitemallGoods>) {
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
  static UpdateWhere(
    query: YaoQueryParam.QueryParam,
    line: Partial<IAppLitemallGoods>
  ) {
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
  static EachSave(data: IAppLitemallGoods[], line: Partial<IAppLitemallGoods>) {
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
    line: Partial<IAppLitemallGoods>
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
   * 删除所有数据
   * @returns
   */
  static DeleteAll() {
    return new Query('default').Run({
      sql: { stmt: `delete from ${AppLitemallGoodsService.TableName}` }
    });
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
