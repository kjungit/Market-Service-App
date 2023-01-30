import { CART_COOKIE_KEY } from "./constants/cart.js";
import { getCartInfo } from "./module/cartToggleButton.js";
import { setPayInfo } from "./module/payModule.js";
import { getProductList } from "./module/productList.js";
import { makeDOMwithProperties } from "./utils/dom.js";

const sectionDOM = document.getElementsByTagName("section")[0];
const cartPayCantainerDOM = document.getElementById("cart-pay-container");

const cartInfo = getCartInfo();

export const reloadPage = () => location.reload();

if (cartInfo.length < 1) {
  // 장바구니에 상품이 없다는 표시
  const noticeDOM = makeDOMwithProperties("div", {
    innerHTML: "장바구니에 상품이 없습니다.",
    className: "product-list-con",
  });
  sectionDOM.insertBefore(noticeDOM, cartPayCantainerDOM);
} else {
  const productListDOM = getProductList(cartInfo, reloadPage);
  sectionDOM.insertBefore(productListDOM, cartPayCantainerDOM);
}

const cartAllDeleteButtonDOM = document.getElementById("remove-all-button");
cartAllDeleteButtonDOM.onclick = () => {
  //  localStorage에 있는 장바구니 상품 목록 정보 전부 삭제
  localStorage.removeItem(CART_COOKIE_KEY);
  location.reload();
};

setPayInfo();
