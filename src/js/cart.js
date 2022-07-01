<<<<<<< HEAD
import { loadHeaderFooter } from './utils.js';
import CartList from './cartList.js';
=======
<<<<<<< HEAD
import { loadHeaderFooter } from "./utils.js";
=======
import { loadHeaderFooter } from './utils.js';
import CartList from './cartList.js';
>>>>>>> ab--individual6
>>>>>>> main

loadHeaderFooter();

const cart = new CartList('so-cart', document.querySelector('.product-list'));
cart.init();
//check to see if there is anything in the cart...
if (cart.total > 0) {
  // show our checkout button and total if there are items in the cart.
  document.querySelector('.list-footer').classList.remove('hide');
<<<<<<< HEAD
}
=======
}
>>>>>>> main
