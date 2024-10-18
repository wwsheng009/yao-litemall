import { UtilsProxy } from '@lib/yao_proxy';
import { AppLitemallCartService } from '@scripts/db_services/app/litemall/cart';
import { AppLitemallGoodsService } from '@scripts/db_services/app/litemall/goods';
import { AppLitemallGoodsProductService } from '@scripts/db_services/app/litemall/goods/product';
import { updateOutputData } from '@scripts/serivce/data';
import { apiWrapper, convertKeysToSnakeCase } from '@scripts/serivce/utils';
import { Exception, log, Query } from '@yaoapps/client';

interface CartItem {
  goods_id: number;
  number: number; // 购物数量
  product_id: number;
}

/**
 * 加入商品到购物车
 * 如果已经存在购物车货品，则增加数量；
 * 否则添加新的购物车货品项。
 * @param payload {goodsId: number, number: number, productId: number}
 */
export function add(payload: {
  goodsId: number;
  number: string | number;
  productId: number;
}) {
  const user_id = getUserId();

  const cart = convertKeysToSnakeCase(payload) as CartItem;

  if (!payload.goodsId || !payload.number || !payload.productId) {
    throw new Exception('参数不正确');
  }
  payload.number = parseInt(payload.number + '');
  if (payload.number <= 0) {
    throw new Exception('参数不正确');
  }
  const goods = AppLitemallGoodsService.Find(payload.goodsId, {});
  if (!goods || !goods.is_on_sale) {
    throw new Exception('商品已下架');
  }

  const product = AppLitemallGoodsProductService.Find(payload.productId, {});

  const [existCart] = AppLitemallCartService.Get({
    wheres: [
      {
        column: AppLitemallCartService.FieldNames.goods_id,
        value: cart.goods_id
      },
      {
        column: AppLitemallCartService.FieldNames.product_id,
        value: cart.product_id
      },
      {
        column: AppLitemallCartService.FieldNames.user_id,
        value: user_id
      }
    ]
  });

  if (existCart == null) {
    if (product == null || cart.number > product.number) {
      throw new Exception('商品库存不足');
    }

    AppLitemallCartService.Create({
      user_id,
      number: cart.number,
      product_id: cart.product_id,
      goods_id: goods.id,
      goods_sn: goods.goods_sn,
      goods_name: goods.name,
      pic_url: !product.url ? goods.pic_url : product.url,
      price: product.price,
      specifications: product.specifications,
      checked: true
    });
  } else {
    existCart.number += cart.number;
    if (existCart.number > product.number) {
      throw new Exception('商品库存不足');
    }
    if (!AppLitemallCartService.Save(existCart)) {
      throw new Exception('更新失败');
    }
  }
  return goodscount();
}
export function fastadd() {}

export function update() {}

export function deleteItem() {}

export function checked() {}

export function goodscount() {
  const user_id = getUserId();

  const qs = new Query();

  const rec = qs.First({
    select: [':SUM(number) as total'],
    from: `$${AppLitemallCartService.ModelID}`,
    wheres: [
      {
        field: AppLitemallCartService.FieldNames.user_id,
        value: user_id,
        op: '='
      }
    ]
  });
  return parseInt(rec.total);

  // 方法二：
  // const cartList = AppLitemallCartService.Get({
  //   wheres: [
  //     {
  //       column: AppLitemallCartService.FieldNames.user_id,
  //       value: user_id
  //     }
  //   ]
  // });
  // //sum the number of the cartlist
  // let goodsCount = 0;
  // cartList.map((item) => (goodsCount += item.number));
  // return goodsCount;
}

export function checkout() {}

export function index() {
  const user_id = getUserId();

  let list = AppLitemallCartService.Get({
    wheres: [
      {
        column: AppLitemallCartService.FieldNames.user_id,
        value: user_id
      }
    ]
  });

  const cartList = [];
  list = updateOutputData(AppLitemallCartService.ModelID, list);
  for (const cart of list) {
    // cart.specifications = JSON.parse(cart.specifications);
    const goods = AppLitemallGoodsService.Find(cart.goods_id, {});
    if (goods == null || !goods.is_on_sale) {
      // 商品已下架，删除购物车记录
      AppLitemallCartService.Delete(cart.id);
      log.Debug(
        `系统自动删除失效购物车商品 goodsId=${cart.goods_id} productId=${cart.product_id}`
      );
    } else {
      cartList.push(cart);
    }
  }

  let goodsCount = 0;
  let goodsAmount = 0;
  let checkedGoodsCount = 0;
  let checkedGoodsAmount = 0;

  for (const cart of cartList) {
    goodsCount += cart.number;
    goodsAmount += cart.number * cart.price;
    if (cart.checked) {
      checkedGoodsCount += cart.number;
      checkedGoodsAmount += cart.number * cart.price;
    }
  }

  return apiWrapper({
    cartTotal: {
      goodsCount,
      checkedGoodsCount,
      goodsAmount,
      checkedGoodsAmount
    },
    cartList
  });
}

function getUserId() {
  const user_id = parseInt(UtilsProxy.Session().Get('user_id'));
  if (!user_id) {
    throw new Exception('请先登录', 401);
  }
  return user_id;
}
