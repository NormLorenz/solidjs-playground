import { For } from 'solid-js';
import Filters from './Filters';

// import { useNavigate } from "solid-app-router";

import { Product } from './product.model';
import { products } from './Shopping';

function ProductTile(props: { product: Product; }) {

  const { product } = props;

  // const navigate = useNavigate();

  return (
    <div class="col-lg-3">
      <div class="card">
        <span class="p-3">
          <img src={product.image} class="card-img-top" alt="..." />
        </span>
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text lt-clamp-3">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <div class="row mb-5 mt-5">
      <h3 class="mb-5">Products</h3>
      <div class="col-lg-3">
        <Filters />
      </div>
      <div class="col-lg-9 d-flex flex-wrap gap-4">
        <For each={products}>
          {product => <ProductTile product={product} />}
        </For>
      </div>
    </div>
  )
}

/*

<style>       
   .loading {
     display: flex;
     align-content: center;
     justify-content: center;
     align-items: center;
     height: 100vh;
     width: 100%;
     background: #0000002b;
     position: fixed;
     z-index: 1000;
   }
   .no-underline {
     text-decoration: none;
   }
   .color-white {
     color: #fff;
   }
   .inner-wrap {
     max-width:960px;
     margin:0 auto;
   } 
   .product-tile:hover {
     cursor:pointer;
     opacity : 0.8;
   }
   #root {
     position: relative;
     min-height: 100vh;
   }
   .main-wrap {
     padding-bottom: 2.5rem; 
   }
   footer {
     background: #000;
     color: #fff;
     position: absolute;
     bottom: 0;
     width: 100%;
     height: 2.5rem;
     padding-top: 8px;
   }
   .lt-clamp-3{
     display: -webkit-box;
     -webkit-line-clamp: 3;
     -webkit-box-orient: vertical;  
     overflow: hidden;
   }
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
   .thumbnail {
     width: 100%;;
   }
   .price-row {
     display:flex;
     justify-content: space-between;
   }
   .total-row {
     text-align: right;
   }
   .cart-item {
     height:66px;
   }
   .cart-item-text h6 {
     margin-bottom: 2px;
     display: flex;
     justify-content: space-between;
   }
   .cart-item-text p {
     margin-bottom:0px;
     font-size: 13px;
     color:#606060;
   }
   .btn-primary.disabled, 
   .btn-primary:disabled {
     background-color: #a7a7a7;
     border-color: #b6b6b6;
   }
   .cart-item-text button {
     border: 1px solid #ccc;
     color: #0a0909;       
     border-radius: 4px;
     margin-left: 5px;
     margin-right: 5px;
     font-size: 12px;
     height: 16px;     
     line-height: 9px;
     padding-bottom: 2px;
   }      
 </style>
*/
