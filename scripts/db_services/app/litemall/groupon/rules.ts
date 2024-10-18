import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.groupon.rules (app.litemall.groupon.rules)
 *
 * Table=> app_litemall_groupon_rules
 */
export interface IAppLitemallGrouponRules {
  /**id */
  id?: number;
  /**商品ID */
  goods_id: number;
  /**商品名称 */
  goods_name: string;
  /**商品图片 */
  pic_url?: string;
  /**优惠金额 */
  discount: number;
  /**达到优惠条件的人数 */
  discount_member: number;
  /**团购过期时间 */
  expire_time?: Date;
  /**团购规则状态 */
  status?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
  /** Relation: goods=> app.litemall.goods */
  goods?: IAppLitemallGoods;
}

export class AppLitemallGrouponRulesService {
  static FieldNames = {
    id: 'id',
    goods_id: 'goods_id',
    goods_name: 'goods_name',
    pic_url: 'pic_url',
    discount: 'discount',
    discount_member: 'discount_member',
    expire_time: 'expire_time',
    status: 'status',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };
  static ModelID = 'app.litemall.groupon.rules';
  static TableName = 'app_litemall_groupon_rules';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallGrouponRules
    */
  static Find(
    key: number,
    query: YaoQueryParam.QueryParam
  ): IAppLitemallGrouponRules {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.find`,
      key,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallGrouponRules[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallGrouponRules[] {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.get`,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallGrouponRules>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallGrouponRules> {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallGrouponRules): number {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.create`,
      data
    );
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallGrouponRules): number {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.Save`,
      data
    );
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallGrouponRules) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.Update`,
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
    line: IAppLitemallGrouponRules
  ) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.UpdateWhere`,
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
    data: IAppLitemallGrouponRules[],
    line: IAppLitemallGrouponRules
  ) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.EachSave`,
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
    data: IAppLitemallGrouponRules[],
    line: IAppLitemallGrouponRules
  ) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.EachSaveAfterDelete`,
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
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.Delete`,
      key
    );
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.Destroy`,
      key
    );
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallGrouponRulesService.ModelID}.DestroyWhere`,
      query
    );
  }
}
