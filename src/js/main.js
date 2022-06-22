import productData from "./productData.js";
import productList from "./productList.js";

const dataSource = new productData("tents");
const listElement = document.querySelector(".product-list");
const myList = new productList("tents", dataSource, listElement);
myList.init();