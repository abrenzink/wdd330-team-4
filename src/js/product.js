import ExternalServices from "./ExternalServices.js";
<<<<<<< HEAD
import ProductDetails from "./ProductDetails.js";
import { getParam } from "./utils.js";

const productId = getParam("product");
const dataSource = new ExternalServices();
=======
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";

const productId = getParam("product");
<<<<<<< HEAD
const dataSource = new ProductData();
=======
const dataSource = new ExternalServices();
>>>>>>> ab--individual6
>>>>>>> main

const product = new ProductDetails(productId, dataSource);
product.init();