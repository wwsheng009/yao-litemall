import { Exception, Process } from '@yaoapps/client';

export function list() {}

export function mylist() {}

export function selectlist() {}

/**
 * 领取优惠券
 * @param param0
 */
export function receive({ couponId }) {
  const userId = Process('session.get', 'user_id');
  if (!userId) {
    throw new Exception('请先登录', 402);
  }
  if (!couponId || isNaN(couponId)) {
    throw new Exception('错误参数');
  }

  const coupon = Process('models.app.litemall.coupon.find', couponId, {});
  if (!coupon) {
    throw new Exception('错误参数');
  }

  const total = coupon.total; //todo
}
