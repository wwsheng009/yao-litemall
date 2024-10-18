import { AppLitemallGoodsService } from '@scripts/db_services/app/litemall/goods';
import { AppLitemallTopicService } from '@scripts/db_services/app/litemall/topic';
import {
  getArrayItem,
  dataPaginate,
  paginateToSearchResult
} from '@scripts/serivce/data';
import { convertKeysToSnakeCase, apiWrapper } from '@scripts/serivce/utils';
import { QueryObjectIn } from '@yao/request';
import { count as CollectCount } from './collect';
export function detail(id: number) {
  const topic = AppLitemallTopicService.Find(id, {});

  if (!topic) {
    throw new Error('专题不存在');
  }

  let goods = [];
  if (Array.isArray(topic.goods) && topic.goods.length) {
    goods = AppLitemallGoodsService.Get({
      wheres: [
        { column: 'id', value: topic.goods, op: 'in' },
        { column: 'is_on_sale', value: 1 },
        { column: 'deleted_at', op: 'null' }
      ]
    });
  }
  // 用户收藏
  const userHasCollect = CollectCount(1, id);

  return apiWrapper({ topic, goods, userHasCollect });
}

export function related(id: number) {
  const data = queryRelatedList(id, 0, 4);
  const data2 = paginateToSearchResult(data);
  return apiWrapper(data2);
}
// related(271);

function queryList(
  offset: number,
  limit: number,
  sort: string,
  order: 'desc' | 'asc'
) {
  return AppLitemallTopicService.Paginate(
    {
      wheres: [
        {
          column: 'deleted_at',
          op: 'null'
        }
      ],
      limit,
      offset,
      orders: [
        {
          column: sort,
          option: order
        }
      ]
    },
    1,
    limit
  );
}

function queryRelatedList(id: number, offset: number = 0, limit: number = 4) {
  // 检查是否存在
  const topics = AppLitemallTopicService.Get({
    wheres: [
      {
        column: 'deleted_at',
        op: 'null'
      },
      {
        column: 'id',
        value: id
      }
    ]
  });
  if (topics.length == 0) {
    return queryList(0, 4, 'created_at', 'desc');
  }
  const topic = topics[0];

  //   相关的topic
  const relateds = AppLitemallTopicService.Paginate(
    {
      wheres: [
        {
          column: 'deleted_at',
          op: 'null'
        },
        {
          column: 'id',
          op: 'ne',
          value: topic.id
        }
      ],
      limit,
      offset,
      orders: [
        {
          column: 'created_at',
          option: 'desc'
        }
      ]
    },
    1,
    limit
  );

  if (relateds.data.length) {
    return relateds;
  }
  return queryList(offset, limit, 'created_at', 'desc');
}

export function list(queryIn: QueryObjectIn) {
  queryIn = queryIn || {};

  const query = convertKeysToSnakeCase(queryIn);

  const order = getArrayItem(query, 'order', 'created_at');
  const sort = getArrayItem(query, 'sort', 'desc');

  const list = dataPaginate(
    AppLitemallTopicService.ModelID,
    query,
    {},
    { orders: [{ column: order, option: sort }] }
  );
  return apiWrapper(list);
}
