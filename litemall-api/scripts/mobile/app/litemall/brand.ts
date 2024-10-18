import { AppLitemallBrandService } from '@scripts/db_services/app/litemall/brand';
import { dataPaginate, getArrayItem } from '@scripts/serivce/data';
import { apiWrapper, convertKeysToSnakeCase } from '@scripts/serivce/utils';
import { QueryObjectIn } from '@yao/request';

export function list(queryIn: QueryObjectIn) {
  queryIn = queryIn || {};

  const query = convertKeysToSnakeCase(queryIn);

  const order = getArrayItem(query, 'order', 'created_at');
  const sort = getArrayItem(query, 'sort', 'desc');

  const list = dataPaginate(
    AppLitemallBrandService.ModelID,
    query,
    {},
    { orders: [{ column: order, option: sort }] }
  );
  return apiWrapper(list);
}

export function detail(id: number) {
  const data = AppLitemallBrandService.Find(id, {});

  return apiWrapper(data);
}

export function index() {}
