import { makeDOMwithProperties } from "../utils/dom.js";
import { getProductList } from "./productList.js";

export const getProductSection = (sectionName, productInfoList) => {
  const productListSection = makeDOMwithProperties("section", {
    className: "product-list-section",
  });

  const sectionTitle = makeDOMwithProperties("div", {
    className: "section-title",
  });

  const title = makeDOMwithProperties("span", {
    innerHTML: sectionName,
  });
  sectionTitle.append(title);

  const productListContainer = getProductList(productInfoList);
  productListSection.append(sectionTitle, productListContainer);

  return productListSection;
};
