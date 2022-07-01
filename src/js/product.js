import ExternalServices from "./ExternalServices.js";
import ProductDetails from "./ProductDetails.js";
import { getParam } from "./utils.js";

const productId = getParam("product");
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();