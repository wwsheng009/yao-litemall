import { Process } from '@yaoapps/client';
import { ModelPaginateResult, YaoQueryParam } from '@yaoapps/types';

/**
 * Model=> app.litemall.issue (app.litemall.issue)
 *
 * Table=> app_litemall_issue
 */
export interface IAppLitemallIssue {
  /**undefined */
  id?: number;
  /**问题标题 */
  question?: string;
  /**问题答案 */
  answer?: string;
  /**删除时间 */
  deleted_at?: Date;
  /**创建时间 */
  created_at?: Date;
  /**更新时间 */
  updated_at?: Date;
}

export class AppLitemallIssueService {
  static FieldNames = [
    'id',
    'question',
    'answer',
    'deleted_at',
    'created_at',
    'updated_at'
  ];
  static ModelID = 'app.litemall.issue';
  static TableName = 'app_litemall_issue';

  /**
    * 根据主键查询单条记录。
    /**
    * 根据主键与附加条件查询单条记录。
    * @param key 主键
    * @param where 筛选条件
    * @returns IAppLitemallIssue
    */
  static Find(key: number, where: YaoQueryParam.QueryParam): IAppLitemallIssue {
    return Process('models.app.litemall.issue.find', key, where);
  }
  /**
   * 根据条件查询数据记录, 返回符合条件的结果集。
   * @param where
   * @returns IAppLitemallIssue[]
   */
  static Get(where: YaoQueryParam.QueryParam): IAppLitemallIssue[] {
    return Process('models.app.litemall.issue.get', where);
  }
  /**
   * 根据条件查询数据记录, 返回带有分页信息的数据对象。
   * @param where
   * @param page
   * @param perPage
   * @returns ModelPaginateResult<IAppLitemallIssue>
   */
  static Paginate(
    where: YaoQueryParam.QueryParam,
    page: number,
    perPage: number
  ): ModelPaginateResult<IAppLitemallIssue> {
    return Process('models.app.litemall.issue.Paginate', where, page, perPage);
  }

  /**
   * 创建单条记录, 返回新创建记录的主键
   * @param data
   * @returns
   */
  static Create(data: IAppLitemallIssue): number {
    return Process('models.app.litemall.issue.create', data);
  }

  /**
   * 一次性插入多条数据记录，返回插入行数
   * @param fields
   * @param data
   * @returns
   */
  static Insert(fields: string[], data: any[][]): number {
    return Process('models.app.litemall.issue.Insert', fields, data);
  }

  /**
   * 创建或更新单条记录。如数据记录中包含 id 则更新，不包含 id 则创建记录；返回创建或更新的记录 ID。
   * @param data
   * @returns
   */
  static Save(data: IAppLitemallIssue): number {
    return Process('models.app.litemall.issue.Save', data);
  }

  /**
   * 根据主键更新单条数据记录。
   * @param key
   * @param line
   * @returns
   */
  static Update(key: number, line: IAppLitemallIssue) {
    return Process('models.app.litemall.issue.Update', key, line);
  }

  /**
   * 根据条件更新数据记录, 返回更新行数。
   * @param where
   * @param line
   * @returns
   */
  static UpdateWhere(where: YaoQueryParam.QueryParam, line: IAppLitemallIssue) {
    return Process('models.app.litemall.issue.UpdateWhere', where, line);
  }

  /**
   * 批量创建或是更新多条记录, 不包含主键字段则创建记录, 存在更新记录。
   * @param data
   * @param line
   * @returns
   */
  static EachSave(data: IAppLitemallIssue[], line: IAppLitemallIssue) {
    return Process('models.app.litemall.issue.EachSave', data, line);
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
    data: IAppLitemallIssue[],
    line: IAppLitemallIssue
  ) {
    return Process(
      'models.app.litemall.issue.EachSaveAfterDelete',
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
    return Process('models.app.litemall.issue.Delete', key);
  }

  /**
   * 根据条件删除数据
   * @param where
   * @returns
   */
  static DeleteWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.issue.DeleteWhere', where);
  }

  /**
   * 根据主键真删除单条数据记录。
   * @param key
   * @returns
   */
  static Destroy(key: number) {
    return Process('models.app.litemall.issue.Destroy', key);
  }

  /**
   * 按条件硬删除
   * @param where
   * @returns
   */
  static DestroyWhere(where: YaoQueryParam.QueryParam) {
    return Process('models.app.litemall.issue.DestroyWhere', where);
  }
}
