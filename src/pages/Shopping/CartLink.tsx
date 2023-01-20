/*
  .cart-link {
    position:relative;
  }
  .cart-item-indicator {
    background: #00d46a;
    width: 21px;
    height: 21px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    font-size: 13px;
    color: #000;
    position: absolute;
    top: 5px;
    right: -18px;
  }

    <Nav.Link class="cart-link" onClick={setShowCart(true)}>
      Cart 
      { cartItems.length > 0 ? 
        <span class="cart-item-indicator"> {cartItems.length} </span> 
      : null 
      }
    </Nav.Link>
*/

import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export const [cartItems, setCartItems] = createStore([]);
export const [showCart,setShowCart] = createSignal(false);

const CartLink = () => {
  return (
    <>
      <a class="nav-link active" aria-current="page" href="#" onClick={setShowCart(true)}>
        Cart {cartItems.length > 0 ? <span class="cart-item-indicator"> {cartItems.length} </span> : null}
      </a>
    </>
  )
};

export default CartLink;
