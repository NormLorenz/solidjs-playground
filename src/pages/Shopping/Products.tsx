import { For } from 'solid-js';
import Filters from './Filters';

// import { useNavigate } from "solid-app-router";
// import { Card, Col, Row } from "solid-bootstrap";

import { Product } from './product.model';
import { products } from './Shopping';

function ProductTile(props: { product: Product; }) {

  const { product } = props;

  // const navigate = useNavigate();

  return (
    <div class="col lg-3">
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

/*
  return (
          <Col lg="3">
              <Card class="product-tile" onclick={()=>{navigate(`/${product.slug}/`)}}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text class="lt-clamp-3">
                      {product.description}
                  </Card.Text>
              </Card.Body>
              </Card>             
          </Col>
      )
*/

export default function Products() {
  return (
    <div class="row mb-5 mt-5">
      <h3 class="mb-5">Products</h3>
      <div class="col lg-3">
        <Filters />
      </div>
      <div class="col lg-9 d-flex flex-wrap gap-4">
        <For each={products}>
          {product => <ProductTile product={product} />}
        </For>
      </div>
    </div>
  )
}

/*
   export default function Products(){
       return (
           <Row class="mb-5 mt-5">
           <h3 class="mb-5">Products</h3>
           <Col lg="3">
               <Filters />
           </Col>         
           <Col lg="9" class="d-flex flex-wrap gap-4">        
           <For each={products}>            
               {product => <ProductTile product={product} /> }
           </For>         
           </Col>       
           </Row>
       )
   }
 */
