import { makeDOMwithProperties } from "../utils/dom.js";
import { getProductList } from "./productList.js";

const MAX_PRICE = Number.MAX_VALUE;

const minPriceFilter = document.getElementById("price-min-filter");
const maxPriceFilter = document.getElementById("price-max-filter");
const discountPriceFilter = document.getElementById("discount-filter");
const filterBtn =
  document.getElementsByClassName("product-filter-con")[0]?.lastElementChild;

// 필터 버튼 => min, max, discound 값을 받아온다. -> 값을 이용하여 해당하는 상품을 추출 -> 화면을 나타냄
export const setButtonEvent = (productList) => {
  filterBtn.onclick = () => {
    const minPrice = convertPriceToNumber(minPriceFilter.value) || 0;
    const maxPrice = convertPriceToNumber(maxPriceFilter.value) || MAX_PRICE;
    const discountRate = convertPercentToNumber(discountPriceFilter.value) || 0;

    const newProductList = productList.filter((productInfo) => {
      const { price, discountPercent } = productInfo;
      return (
        price >= minPrice &&
        price <= maxPrice &&
        discountRate <= discountPercent
      );
    });

    const sectionDOM = document.getElementsByTagName("section")[0];
    const originalProductListDOM =
      document.getElementsByClassName("product-list-con")[0];
    sectionDOM.removeChild(originalProductListDOM);

    if (newProductList.length > 0) {
      const productListDOM = getProductList(newProductList);
      sectionDOM.append(productListDOM);
    } else {
      const emptyProductListDOM = makeDOMwithProperties("div", {
        className: "product-list-con empty",
        innerHTML: "조건에 해당하는 상품이 없습니다.",
      });
      sectionDOM.append(emptyProductListDOM);
    }
  };
};

const convertPercentToNumber = (originalValue) => {
  const formattedString = String(originalValue)
    .replace("%", "")
    .replace("%", "");
  const formattedNumber = Number(formattedString);
  return isNaN(formattedNumber) ? "" : formattedNumber;
};

const convertPriceToNumber = (originalPrice) => {
  const formattedString = String(originalPrice)
    .replace("원", "")
    .replace(",", "");
  const formattedNumber = Number(formattedString);
  return isNaN(formattedNumber) ? "" : formattedNumber;
};

const formatToPrice = (event) => {
  const value = event.target.value;

  const result = Number(value);
  if (isNaN(result)) {
    alert("숫자를 입력해주세요");
    return;
  }
  event.target.value = `${result.toLocaleString()}원`;
};

export const setFilterEvent = () => {
  // 필터 DOM들이 가지는 이벤트 핸들러를 구현
  // 필터 입력창을 클릭하면 숫자
  // 필터 입력창 외에 부분을 클릭하면 -> 원, %가 붙은 value값이 보이게 구현

  minPriceFilter.onfocus = (event) => {
    event.target.value = convertPriceToNumber(event.target.value);
  };
  minPriceFilter.onblur = formatToPrice;

  maxPriceFilter.onfocus = (event) => {
    event.target.value = convertPriceToNumber(event.target.value);
  };
  maxPriceFilter.onblur = formatToPrice;

  discountPriceFilter.onfocus = (event) => {
    event.target.value = convertPercentToNumber(event.target.value);
  };

  discountPriceFilter.onblur = (event) => {
    const value = event.target.value;
    const result = Number(value);
    if (isNaN(result)) {
      alert("숫자를 입력해주세요");
      return;
    }
    if (result > 100 || result < 0) {
      alert("0 이상 100 이하의 숫자를 입력해주세요.");
      return;
    }
    event.target.value = `${result}%`;
  };
};
