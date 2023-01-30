import { getCartInfo } from "./cartToggleButton.js";

const DELIVERY_FREE_PRICE = 20000;
const DELIVERY_PRICE = 3000;

const originalPriceDOM = document.getElementById("original-price");
const discountPriceDOM = document.getElementById("discount-price");
const deliveryPriceDOM = document.getElementById("delivery-price");
const totalPriceDOM = document.getElementById("total-price");

export const setPayInfo = () => {
  // 1. 장바구니에서 상품 정보 얻어오기
  // 2. 상품 정보들을 순회하면서 총 가격, 할인 가격, 배송비, 결제 금액 계산하기
  // 3. 2번에거 계산된 금액들을 DOM.innerHTML로 할당

  const cartInfoList = getCartInfo();

  let deliveryPrice = 0; // 20,000원 미만 구매 -> 3,000원, 이상 구매 = 0원
  let totalPrice = 0;

  const { originalPrice, discountPrice } = cartInfoList.reduce(
    (prev, curr) => ({
      originalPrice: prev.originalPrice + curr.originalPrice,
      discountPrice: prev.discountPrice + (curr.originalPrice - curr.price),
    }),
    {
      originalPrice: 0,
      discountPrice: 0,
    }
  );

  const payPrice = originalPrice - discountPrice;
  if (payPrice >= DELIVERY_FREE_PRICE) {
    deliveryPrice = 0;
  } else {
    deliveryPrice = DELIVERY_PRICE;
  }

  totalPrice = payPrice + deliveryPrice;

  originalPriceDOM.innerHTML = `${originalPrice.toLocaleString()}원`;
  discountPriceDOM.innerHTML = discountPrice
    ? `${discountPrice.toLocaleString()}원`
    : "0원";
  deliveryPriceDOM.innerHTML = deliveryPrice
    ? `+${deliveryPrice.toLocaleString()}원`
    : "0원";
  totalPriceDOM.innerHTML = totalPrice
    ? `${totalPrice.toLocaleString()}원`
    : "0원";
};
