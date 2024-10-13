export type ModelId = number | string;


export interface PaginateSearchResult {
  /**数据记录集合 */
  data: { [key: string]: any }[];
  /**下一页，如没有下一页返回 `-1` */
  next: number;
  /**上一页，如没有上一页返回 `-1` */
  prev: number;
  /**当前页码 */
  page: number;
  /**每页记录数量 */
  pagesize: number;
  /**总页数 */
  pagecnt: number;
  /**总记录数 */
  total: number;
}

export interface SearchResult {
  /**数据记录集合 */
  list: { [key: string]: any }[];
  /**当前页码 */
  page: number;
  /**总页数 */
  pages: number;
  /**每页记录数量 */
  limit: number;
  /**总记录数 */
  total: number;
}
