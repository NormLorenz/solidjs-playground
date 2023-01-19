import { createSignal, createEffect, onMount, For } from 'solid-js';

import { setLoading, setProducts } from './Shopping';
import { productList } from './productList';
import { Product } from './product.model';

type Filter = {
  name: string;
  checked: boolean;
}

export default function Filters() {

  // make copy so the list doesn't mutate
  const ALLPRODUCTS = productList.slice();
  let filterList: Filter[] = [];
  const [filters, setFilters] = createSignal(filterList);

  // create a list of product filters
  onMount(() => {
    ALLPRODUCTS.forEach((product) => {
      product.category.forEach((cat) => {
        let found = filterList.some((filter) => {
          return filter.name === cat;
        });
        if (!found) {
          filterList.push({ name: cat, checked: false });
        }
      })
    })
    console.log(111, filterList);
    console.log(222, new Date());
    setFilters(filterList);
  })

  // create a list of products based upon the filters set
  createEffect(() => {
    setLoading(true);
    let filterArr: Filter[] = [];
    filters().forEach((item) => {
      if (item.checked) {
        filterArr.push(item);
      }
    })

    if (filterArr.length === 0) {
      setProducts(ALLPRODUCTS);
    }
    //  else {
    //   let filteredProducts: Product[] = ALLPRODUCTS.filter((item) => {
    //     let found = item.category.some((cat) => {
    //       return filterArr.includes(cat);
    //     });
    //     if (found) {
    //       return item;
    //     }
    //   })
    //   setProducts(filteredProducts);
    // }

    setLoading(false);
  });

  function filterChangeHandler(evt: { target: { value: string; checked: any; }; }) {
    setFilters(
      filters().map((item) => {
        return item.name === evt.target.value ? { ...item, checked: evt.target.checked } : { ...item };
      })
    );
    return false;
  }

  return (
    <>
      <h4>hi {JSON.stringify(filters())}</h4>
      <h4>{new Date().toString()}</h4>
    </>
    // <For each={filters()}>
    //   {(filter) => {
    //     return (
    //       // <div >
    //       //   <input class="form-check-input"
    //       //     type="checkbox"
    //       //     value={filter.name}
    //       //     id={filter.name}
    //       //     checked={filter.checked}
    //       //     // onChange={filterChangeHandler} 
    //       //     />
    //       //   <label class="form-check-label" for={filter.name}>
    //       //     {filter.name}
    //       //   </label>
    //       // </div>
    //       <span>{filter.name}</span>
    //     )
    //   }}
    // </For>
  )
}
