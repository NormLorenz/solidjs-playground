import { createEffect, createSignal, For, onMount } from 'solid-js';
import { useParams } from "@solidjs/router";

// import { Button, Card, Col, Container, Form, FormLabel, Row, Toast, ToastContainer } from "solid-bootstrap";
import { productList } from './productList';
// import { cartItems, setCartItems, setToastMessage } from '../App';

import { Product as ProductType } from './product.model';

export default function Product() {

  const ALLPRODUCTS = productList.slice();
  const [product, setProduct] = createSignal({} as ProductType);
  const [selectedSize, setSelectedSize] = createSignal('');
  const [quantity, setQuantity] = createSignal(1);
  const [btnDisabled, setBtnDisabled] = createSignal(true);
  const params = useParams();

  onMount(() => {
    let product = ALLPRODUCTS.find((product: ProductType) => {
      return product.id === params.id;
    })
    setProduct(product as ProductType)
  })

  createEffect(() => {
    if (selectedSize() !== '' && quantity() !== 1) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  })

  // function addToCart() {
  //   let productToAdd = {
  //     ...product(),
  //     size: selectedSize(),
  //     quantity: quantity()

  //   };
  //   let items = cartItems.slice();
  //   let foundIndex, found;

  //   found = items.filter((item, ind) => {
  //     }
  //   })

  //   let msg = '';
  //       ...found[0],
  //       quantity: productToAdd.quantity,
  //       subtotal: productToAdd.quantity * productToAdd.price
  //     }
  //     items.splice(foundIndex, 1, productToUpdate);
  //   } else {
  //     msg = 'Item added to cart';
  //     productToAdd.size = selectedSize();
  //     productToAdd.quantity = quantity();
  //     productToAdd.subtotal = productToAdd.quantity * productToAdd.price;
  //     items.push(productToAdd);
  //   }
  //   setCartItems(items);
  //   setToastMessage(msg);
  // }

  // function changeHandler(evt) {
  //   switch (evt.target.name) {
  //     case 'size':
  //       setSelectedSize(evt.target.value);
  //       break;
  //     case 'quantity':
  //       setQuantity(parseInt(evt.target.value));
  //       break;
  //   }
  // }

  return (
    <div class="container mb-5 mt-5 row inner-wrap">
      <h3 class="mb-5">{product().name}</h3>

      <div class="col-lg-6">
        <div class="card" >
          <img src={product().image} class="card-img-top" alt="..." />
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Description</h5>
            <hr />
            <p class="card-text">{product().description}</p>
            <div class="row">
              <div class="col-lg-6">
                <label class="form-label">Size</label>
                <select class="form-select mb-4" size="sm" name="size" value={selectedSize()}
                //  onChange={changeHandler}
                >
                  <option value=''>--</option>
                  <For each={product().sizes}>
                    {size => <option value={size}>{size}</option>}
                  </For>
                </select>
              </div>

              <div class="col-lg-6">
                <label class="form-label">Quantity</label>
                <select class="form-select mb-4" size="sm" name="quantity" value={quantity()}
                //  onChange={changeHandler}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
            </div>

            {/* <button type="button" class="btn btn-outline-primary" onclick={addToCart}>Add to Cart</button> */}
            <button type="button" class="btn btn-outline-primary" disabled={btnDisabled()} value={product().id}>Add to Cart</button>

          </div>
        </div>
      </div>
    </div >
  )
}
