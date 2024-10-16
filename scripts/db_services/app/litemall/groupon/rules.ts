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
  goods?: app_litemall_goods;
}

export class AppLitemallGrouponRulesService {
  static FieldNames = [
    'id',
    'goods_id',
    'goods_name',
    'pic_url',
    'discount',
    'discount_member',
    'expire_time',
    'status',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.groupon.rules';
  static TableName = 'app_litemall_groupon_rules';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallGrouponRules
    */
  static Find(
    key: number,
    where: YaoQueryParam.QueryParam
  ): IAppLitemallGrouponRules {
    return Process('models.app.litemall.groupon.rules.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallGrouponRules[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallGrouponRules[] {
    return Process('models.app.litemall.groupon.rules.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallGrouponRules>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallGrouponRules> {
    return Process(
      'models.app.litemall.groupon.rules.Paginate',
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
  static Create(data: IAppLitemallGrouponRules): number {
    return Process('models.app.litemall.groupon.rules.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.groupon.rules.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallGrouponRules): number {
    return Process('models.app.litemall.groupon.rules.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallGrouponRules) {
    return Process('models.app.litemall.groupon.rules.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(
    where: YaoQueryParam.QueryParam,
    line: IAppLitemallGrouponRules
  ) {
    return Process(
      'models.app.litemall.groupon.rules.UpdateWhere',
      where,
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
    return Process('models.app.litemall.groupon.rules.EachSave', data, line);
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
      'models.app.litemall.groupon.rules.EachSaveAfterDelete',
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
    return Process('models.app.litemall.groupon.rules.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.groupon.rules.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.groupon.rules.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.groupon.rules.DestroyWhere', where);
  }
}
