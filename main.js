import { getProductSection } from "./module/productSection.js";
import { fetchSectionListData } from "./module/fetch.js";
async function displaySections() {
  try {
    const sectionInfoList = await fetchSectionListData();
    sectionInfoList.forEach((setionInfo) => {
      const productSectionDOM = getProductSection(
        setionInfo.sectionTitle,
        setionInfo.productList
      );
      document.body.append(productSectionDOM);
    });
  } catch (error) {
    console.log(error);
  }
}

displaySections();
