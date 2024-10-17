export function fastadd() {}

export function update() {}

export function deleteItem() {}

export function checked() {}

export function goodscount() {}

export function checkout() {}

export function index() {
  return {
    cartTotal: {
      goodsCount: 0,
      checkedGoodsCount: 0,
      goodsAmount: 0,
      checkedGoodsAmount: 0
    },
    cartList: []
  };
}
