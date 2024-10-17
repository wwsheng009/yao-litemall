import { UtilsProxy } from '@lib/yao_proxy';
import { AppLitemallCollectService } from '@scripts/db_services/app/litemall/collect';
import { Query } from '@yaoapps/client';
import { YaoQuery } from '@yaoapps/types';

export function addordelete() {}

export function list() {}

export function count(type: number, gid: number) {
  const uid = parseInt(UtilsProxy.Env().Get('user_id'));
  if (!uid) {
    return 0;
  }
  const q = new Query();
  const rec = q.First({
    select: [':COUNT(id) as total'],
    from: `$${AppLitemallCollectService.ModelID}`,
    wheres: [
      { field: 'deleted_at', op: '=', value: null },
      { field: 'type', op: '=', value: type },
      { field: 'value_id', op: '=', value: gid },
      { field: 'user_id', op: '=', value: uid }
    ]
  } as YaoQuery.QueryDSL);
  return rec.total;
}
