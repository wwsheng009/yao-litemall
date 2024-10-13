import { Process } from '@yao/yao';
import { LiteMallResPonse, shopInfos } from './type';
import { convertKeysToCamelCase } from '../serivce/utils';
import { YaoQueryParam } from '@yaoapps/types';

/**
 * yao run scripts.app.litemall.shop.getRulesGoods
 * @returns
 */
function getRulesGoods() {
  const grouponRulesList = Process('models.app.litemall.groupon.rules.get', {
    withs: {
      goods: {
        query: {
          select: [
            'id',
            'title',
            'pic_url',
            'brief',
            'counter_price',
            'retail_price'
          ]
        }
      }
    },
    limit: 500,
    select: ['id', 'discount', 'discount_member']
  } as YaoQueryParam.QueryParam);

  return grouponRulesList
    .filter((f) => f.goods != null)
    .map((r) => {
      const item = { ...r.goods };
      item.groupon_discount = r.discount;
      item.groupon_member = r.discount_member;
      item.groupon_price = item.retail_price - r.discount;
      return item;
    });
}
/**
 * 首页数据
 *
 * yao run scripts.app.litemall.mobile.home.index
 */
export function index(): LiteMallResPonse<shopInfos> {
  const bannerlist = Process('models.app.litemall.ad.get', {
    select: ['id', 'url'],
    wheres: [
      { column: 'position', value: 1 },
      { column: 'enabled', value: 1 },
      { column: 'deleted_at', op: 'null' }
    ],
    limit: 10
  } as YaoQueryParam.QueryParam);

  const branList = Process('models.app.litemall.brand.get', {
    select: ['id', 'name', 'pic_url'],
    limit: 10
  } as YaoQueryParam.QueryParam);

  const channelList = Process('models.app.litemall.category.get', {
    select: ['id', 'name', 'icon_url'],
    wheres: [{ column: 'level', value: 'L1' }],
    limit: 10
  } as YaoQueryParam.QueryParam);

  const topicList = Process('models.app.litemall.topic.get', {
    select: ['id', 'title', 'pic_url'],
    limit: 10
  } as YaoQueryParam.QueryParam);

  const newGoodsList = Process('models.app.litemall.goods.get', {
    select: ['id', 'name', 'pic_url'],
    wheres: [{ column: 'is_new', value: 1 }],
    limit: 10
  } as YaoQueryParam.QueryParam);

  const hotGoodsList = Process('models.app.litemall.goods.get', {
    select: [
      'id',
      'title',
      'pic_url',
      'brief',
      'counter_price',
      'retail_price'
    ],
    wheres: [{ column: 'is_hot', value: 1 }],
    limit: 10
  } as YaoQueryParam.QueryParam);

  const couponList = Process('models.app.litemall.coupon.get', {
    select: ['id', 'name', 'discount', 'tag', 'desc', 'days', 'end_time'],
    wheres: [
      { column: 'deleted_at', op: 'null' },
      { column: 'status', value: 0 },
      { column: 'type', value: 0 } //
    ],
    limit: 3
  } as YaoQueryParam.QueryParam);

  return convertKeysToCamelCase({
    banner: bannerlist,
    channel: channelList,
    couponList: couponList,
    grouponList: getRulesGoods(),
    brandList: branList,
    newGoodsList: newGoodsList,
    hotGoodsList: hotGoodsList,
    topicList: topicList
  });
}
