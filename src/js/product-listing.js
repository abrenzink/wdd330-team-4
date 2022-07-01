<<<<<<< HEAD
import ExternalServices from "./ExternalServices.js";
import ProductList from "./ProductList.js";
=======
<<<<<<< HEAD
import ProductData from "./productData.js";
=======
import ExternalServices from "./ExternalServices.js";
>>>>>>> ab--individual6
import ProductList from "./productList.js";
>>>>>>> main
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const category = getParam("category");
<<<<<<< HEAD
// first create an instance of our ProductData class.
<<<<<<< HEAD
const dataSource = new ExternalServices();
=======
const dataSource = new ProductData();
=======
// first create an instance of our ExternalServices class.
const dataSource = new ExternalServices();
>>>>>>> ab--individual6
>>>>>>> main
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();