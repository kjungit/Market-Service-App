import { makeDOMwithProperties } from "../utils/dom.js";
import { getProductCard } from "./productCart.js";

/**
 *
 * @param {*} productInfoList
 * product-list-con 내부에 productCard를 넣어준다.
 */
export const getProductList = (productInfoList, reloadPage) => {
  if (productInfoList == null || !Array.isArray(productInfoList)) return;
  const productListContainer = makeDOMwithProperties("div", {
    className: "product-list-con",
  });

  productInfoList.forEach((productInfo) => {
    productListContainer.append(
      getProductCard(
        {
          ...productInfo,
        },
        reloadPage
      )
    );
  });
  return productListContainer;
};
