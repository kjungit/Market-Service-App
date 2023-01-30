import { makeDOMwithProperties } from "../utils/dom.js";
import { getCartToggleButton } from "./cartToggleButton.js";
export const getProductCard = (productInfo, reloadPage) => {
  const { imgSrc, name, discountPercent, price, originalPrice } = productInfo;
  const productCard = makeDOMwithProperties("div", {
    className: "product-card",
  });
  const productImageCon = makeDOMwithProperties("div", {
    className: "product-image-con",
  });
  const productImage = makeDOMwithProperties("img", {
    src: imgSrc,
    alt: name,
  });

  const cardToggleBtn = getCartToggleButton(productInfo, reloadPage);

  productImageCon.append(productImage, cardToggleBtn);

  const productDescription = makeDOMwithProperties("div", {
    className: "product-description",
  });
  const productName = makeDOMwithProperties("div", {
    className: "product-name",
    innerText: name,
  });
  const productPriceCon = makeDOMwithProperties("div", {
    className: "product-price-con",
  });
  const productDiscoundPercent = makeDOMwithProperties("div", {
    className: "product-discount-percent",
    innerText: `${discountPercent}%`,
  });
  const productPrice = makeDOMwithProperties("div", {
    className: "product-price",
    innerText: `${price.toLocaleString()}원`,
  });
  const productOriginPrice = makeDOMwithProperties("div", {
    className: "product-original-price",
    innerText: `${originalPrice.toLocaleString()}원`,
  });
  productPriceCon.append(productDiscoundPercent, productPrice);
  productDescription.append(productName, productPriceCon, productOriginPrice);

  productCard.append(productImageCon, productDescription);

  return productCard;
};
