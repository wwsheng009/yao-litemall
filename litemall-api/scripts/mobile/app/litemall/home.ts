import { LiteMallResPonse, shopInfos } from './type';
import { apiWrapper } from '@scripts/serivce/utils';
import { AppLitemallAdService } from '@scripts/db_services/app/litemall/ad';
import { AppLitemallBrandService } from '@scripts/db_services/app/litemall/brand';
import { AppLitemallCategoryService } from '@scripts/db_services/app/litemall/category';
import {
  AppLitemallGoodsService,
  IAppLitemallGoods
} from '@scripts/db_services/app/litemall/goods';
import { AppLitemallCouponService } from '@scripts/db_services/app/litemall/coupon';
import { AppLitemallGrouponRulesService } from '@scripts/db_services/app/litemall/groupon/rules';
import { AppLitemallTopicService } from '@scripts/db_services/app/litemall/topic';

interface extendGood extends IAppLitemallGoods {
  groupon_discount?: number;
  groupon_member?: number;
  groupon_price?: number;
}

/**
 * yao run scripts.app.litemall.shop.getRulesGoods
 * @returns
 */
function getRulesGoods() {
  const grouponRulesList = AppLitemallGrouponRulesService.Get({
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
  });

  return grouponRulesList
    .filter((f) => f.goods != null)
    .map((r) => {
      const item = { ...r.goods } as extendGood;
      item.groupon_discount = r.discount;
      item.groupon_member = r.discount_member;
      item.groupon_price = item.retail_price - r.discount;
      return item;
    });
}
/**
 * 首页数据
 *
 * yao run scripts.mobile.app.litemall.home.index
 */
export function index(): LiteMallResPonse<shopInfos> {
  const bannerlist = AppLitemallAdService.Get({
    select: ['id', 'url'],
    wheres: [
      { column: 'position', value: 1 },
      { column: 'enabled', value: 1 },
      { column: 'deleted_at', op: 'null' }
    ],
    limit: 10
  });

  const branList = AppLitemallBrandService.Get({
    select: ['id', 'name', 'pic_url'],
    limit: 10
  });

  const channelList = AppLitemallCategoryService.Get({
    select: ['id', 'name', 'icon_url'],
    wheres: [{ column: 'level', value: 'L1' }],
    limit: 10
  });

  const topicList = AppLitemallTopicService.Get({
    select: ['id', 'title', 'pic_url'],
    limit: 10
  });

  const newGoodsList = AppLitemallGoodsService.Get({
    select: ['id', 'name', 'pic_url'],
    wheres: [{ column: 'is_new', value: 1 }],
    limit: 10
  });

  const hotGoodsList = AppLitemallGoodsService.Get({
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
  });

  const couponList = AppLitemallCouponService.Get({
    select: ['id', 'name', 'discount', 'tag', 'desc', 'days', 'end_time'],
    wheres: [
      { column: 'deleted_at', op: 'null' },
      { column: 'status', value: 0 },
      { column: 'type', value: 0 } //
    ],
    limit: 3
  });

  return apiWrapper({
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
