import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.topic (app.litemall.topic)
 *
 * Table=> app_litemall_topic
 */
export interface IAppLitemallTopic {
  /**undefined */
  id?: number;
  /**专题标题 */
  title?: string;
  /**专题子标题 */
  subtitle?: string;
  /**专题内容 */
  content?: string;
  /**专题相关商品最低价 */
  price?: number;
  /**专题阅读量 */
  read_count?: string;
  /**专题图片 */
  pic_url?: string;
  /**排序 */
  sort_order?: number;
  /**专题相关商品 */
  goods?: number[];
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallTopicService {
  static FieldNames = [
    'id',
    'title',
    'subtitle',
    'content',
    'price',
    'read_count',
    'pic_url',
    'sort_order',
    'goods',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.topic';
  static TableName = 'app_litemall_topic';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallTopic
    */
  static Find(key: number, where: YaoQueryParam.QueryParam): IAppLitemallTopic {
    return Process('models.app.litemall.topic.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallTopic[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallTopic[] {
    return Process('models.app.litemall.topic.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallTopic>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallTopic> {
    return Process('models.app.litemall.topic.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallTopic): number {
    return Process('models.app.litemall.topic.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.topic.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallTopic): number {
    return Process('models.app.litemall.topic.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallTopic) {
    return Process('models.app.litemall.topic.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(where: YaoQueryParam.QueryParam, line: IAppLitemallTopic) {
    return Process('models.app.litemall.topic.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallTopic[], line: IAppLitemallTopic) {
    return Process('models.app.litemall.topic.EachSave', data, line);
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
    data: IAppLitemallTopic[],
    line: IAppLitemallTopic
  ) {
    return Process(
      'models.app.litemall.topic.EachSaveAfterDelete',
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
    return Process('models.app.litemall.topic.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.topic.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.topic.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.topic.DestroyWhere', where);
  }
}
