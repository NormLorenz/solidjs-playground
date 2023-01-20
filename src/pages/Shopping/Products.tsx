import { For } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import Filters from './Filters';
import { Product as ProductType } from './product.model';
import { products } from './Shopping';

const ProductTile = (props: { product: ProductType; }) => {

  const { product } = props;
  const navigate = useNavigate();

  //   .lt-clamp-3 {
  //         display: -webkit-box;
  //         -webkit-line-clamp: 3;
  //         -webkit-box-orient: vertical;  
  //         overflow: hidden;
  //   }

  return (
    <div class="col-lg-3">
      <div class="card" onclick={() => { navigate(`${product.id}/`) }}>
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

const Products = () => {
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

export default Products;
