import ProductData from './productData.js';
import ProductList from './productList.js';

const data = new ProductData('tents');

const listElement = document.querySelector('.product-list');

const list = new ProductList('tents', data, listElement);

list.init();
console.log(list);