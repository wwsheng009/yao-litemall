import { Process } from '@yao/yao';
import { YaoQueryParam } from '@yaoapps/types';

export function getCategoryListL1() {
  const channelList = Process('models.app.litemall.category.get', {
    select: ['id', 'name', 'icon_url'],
    wheres: [{ column: 'level', value: 'L1' }],
    limit: 10
  } as YaoQueryParam.QueryParam);

  return channelList;
}
