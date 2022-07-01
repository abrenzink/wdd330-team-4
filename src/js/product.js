import ExternalServices from "./ExternalServices.js";
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";

const productId = getParam("product");
<<<<<<< HEAD
const dataSource = new ProductData();
=======
const dataSource = new ExternalServices();
>>>>>>> ab--individual6

const product = new ProductDetails(productId, dataSource);
product.init();