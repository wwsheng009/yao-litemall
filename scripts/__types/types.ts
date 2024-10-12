export type ModelId = number | string;

export interface PaginateSearchResult {
  data: { [key: string]: any }[];
  next: number;
  prev: number;
  page: number;
  pagesize: number;
  pagecnt: number;
  total: number;
}
