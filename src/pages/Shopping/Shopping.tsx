import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

import { productList } from './productList';
import Products from './Products';
// import styles from './Shopping.module.css';

export const [loading, setLoading] = createSignal(false);
export const [showCart, setShowCart] = createSignal(false);
export const [toastMessage, setToastMessage] = createSignal(false);
export const [cartItems, setCartItems] = createStore([]);
export const [products, setProducts] = createStore(productList);

const Shopping = () => {

  // https://michaelsoriano.com/lets-build-a-shopping-cart-website-with-solidjs-and-bootstrap-part-1/
  // https://michaelsoriano.com/lets-build-a-shopping-cart-website-with-solidjs-and-bootstrap-part-2/
  // https://github.com/michaelsoriano/solidjs-shoppingcart
  // https://solidjs-shoppingcart.vercel.app/
  // https://www.solidjs.com/tutorial/bindings_directives?solved
  // https://www.youtube.com/watch?v=HSoRtowmOEY

  return (
    <div class="container">

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <h1>Shopping Page</h1>
        </div>
      </div>

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <Products />
        </div>
      </div>

    </div>
  )
}

export default Shopping;
