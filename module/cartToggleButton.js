import { CART_COOKIE_KEY } from "../constants/cart.js";
import { makeDOMwithProperties } from "../utils/dom.js";

/**
 * 현재 localStorage에 담겨있는 장바구니 목록
 */
export const getCartInfo = () =>
  JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

// 현재 해당 상품이 장바구니 안에 있는지를 판단하여 결과를 반환
const isInCart = ({ id }) => {
  const originalCartInfo = getCartInfo();
  // 저장한 값이 현재 존재하는지 여부를 boolean값으로 return
  return !!originalCartInfo.find((cartInfo) => cartInfo.id === id); // true, false
};

/**
 *
 * @param {*} productInfo
 * @returns 만약 같은 싱품이 있으면 return
 *
 * 장바구니에 해당 싱품의 정보를 저장
 */
const addCartInfo = (productInfo) => {
  const originalCartInfo = getCartInfo();
  // 현재 저장된 cartInfo와 다시 저장되는 productInfo가 같으면 return
  if (
    originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id) !==
    -1
  )
    return;
  localStorage.setItem(
    CART_COOKIE_KEY,
    JSON.stringify([...originalCartInfo, productInfo])
  );
};

/**
 * 장바구니에서 해당 상품의 정보를 삭제하는 함수
 */
const removeCartInfo = ({ id }) => {
  // 로컬스트리지에 담겨져 있는 상품 정보
  const originalCartInfo = getCartInfo();

  const newCartInfo = originalCartInfo.filter((cartInfo) => cartInfo.id !== id);

  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(newCartInfo));
};

export const getCartToggleButton = (productInfo, reloadPage) => {
  let inCart = isInCart(productInfo);
  const cardToggleBtn = makeDOMwithProperties("button", {
    className: "cart-toggle-btn",
    type: "button",
    onclick: () => {
      if (inCart) {
        // 장바구니에 들어가 있으면 -> 장바구니에서 상품 삭제
        swal({
          title: "삭제",
          text: `${productInfo.name}을(를)
          장바구니에서 삭제할까요?`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            removeCartInfo(productInfo);
            cartImg.src = "public/assets/cart.png";
            reloadPage?.();
          }
        });
      } else {
        // 장바구니에 없으면 -> 장바구니에 상품 넣기
        addCartInfo(productInfo);
        cartImg.src = "public/assets/cartDisabled.png";
        swal({
          title: "장바구니에 담았습니다.",
          text: "장바구니 페이지로 이동할까요?",
          icon: "success",
          buttons: true,
        }).then((goToCart) => {
          if (goToCart) {
            location.href = "cart.html";
          }
        });
      }
      inCart = !inCart;
    },
  });

  const cartImg = makeDOMwithProperties("img", {
    className: "cart-image",
    src: inCart ? "public/assets/cartDisabled.png" : "public/assets/cart.png",
    alt: "cart",
  });
  cardToggleBtn.append(cartImg);

  return cardToggleBtn;
};
