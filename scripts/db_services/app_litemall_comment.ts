import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.comment (app_litemall_comment)
 *
 * Table=> app_litemall_comment
 */
export interface IAppLitemallComment {
  /**undefined */
  id?: number;
  /**评论类型 */
  value_id?: number;
  /**评论类型 */
  type?: number;
  /**评论内容 */
  content?: string;
  /**管理员回复内容 */
  admin_content?: string;
  /**用户ID */
  user_id?: number;
  /**是否含有图片 */
  has_picture?: boolean;
  /**图片地址列表 */
  pic_urls?: object;
  /**评分， 1-5 */
  star?: number;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallCommentService {
  static FieldNames = [
    'id',
    'value_id',
    'type',
    'content',
    'admin_content',
    'user_id',
    'has_picture',
    'pic_urls',
    'star',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.comment';
  static TableName = 'app_litemall_comment';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param query 筛选条件
    * @returns IAppLitemallComment
    */
  static Find(
    key: number,
    query: YaoQueryParam.QueryParam
  ): IAppLitemallComment {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.find`,
      key,
      query
    );
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param query
   * @returns IAppLitemallComment[]
   */
  static Get(query: YaoQueryParam.QueryParam): IAppLitemallComment[] {
    return Process(`models.${AppLitemallCommentService.ModelID}.get`, query);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param query
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallComment>
   */
  static Paginate(
    query: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallComment> {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.Paginate`,
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
  static Create(data: IAppLitemallComment): number {
    return Process(`models.${AppLitemallCommentService.ModelID}.create`, data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.Insert`,
      fields,
      data
    );
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallComment): number {
    return Process(`models.${AppLitemallCommentService.ModelID}.Save`, data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallComment) {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.Update`,
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
    line: IAppLitemallComment
  ) {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.UpdateWhere`,
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
  static EachSave(data: IAppLitemallComment[], line: IAppLitemallComment) {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.EachSave`,
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
    data: IAppLitemallComment[],
    line: IAppLitemallComment
  ) {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.EachSaveAfterDelete`,
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
    return Process(`models.${AppLitemallCommentService.ModelID}.Delete`, key);
  }

  /**
   * 根据条件删除数据
   * @param query
   * @returns
   */
  static DeleteWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.DeleteWhere`,
      query
    );
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process(`models.${AppLitemallCommentService.ModelID}.Destroy`, key);
  }

  /**
   * 按条件硬删除
   * @param query
   * @returns
   */
  static DestroyWhere(query: YaoQueryParam.QueryParam) {
    return Process(
      `models.${AppLitemallCommentService.ModelID}.DestroyWhere`,
      query
    );
  }
}
