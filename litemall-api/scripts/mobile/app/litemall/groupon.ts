import { AppLitemallGrouponService } from '@scripts/db_services/app/litemall/groupon';
import { getArrayItem, dataPaginate } from '@scripts/serivce/data';
import { convertKeysToSnakeCase, apiWrapper } from '@scripts/serivce/utils';
import { QueryObjectIn } from '@yao/request';

export function list(queryIn: QueryObjectIn) {
  queryIn = queryIn || {};

  const query = convertKeysToSnakeCase(queryIn);

  const order = getArrayItem(query, 'order', 'created_at');
  const sort = getArrayItem(query, 'sort', 'desc');

  const list = dataPaginate(
    AppLitemallGrouponService.ModelID,
    query,
    {},
    { orders: [{ column: order, option: sort }] }
  );
  return apiWrapper(list);
}
