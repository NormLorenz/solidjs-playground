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
  const [filters, setFilters] = createSignal([] as Filter[]);

  // create a list of product filters
  onMount(() => {
    console.log('Filters onMount ', new Date());
    let filterList: Filter[] = [];
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
    setFilters(filterList);
  })

  // create a list of products based upon the filters that are set
  createEffect(() => {
    setLoading(true);

    let categoryList: string[] = [];
    filters().forEach((item: Filter) => {
      if (item.checked) {
        categoryList.push(item.name);
      }
    })

    if (categoryList.length === 0) {
      setProducts(ALLPRODUCTS);
    } else {
      let filteredProducts = ALLPRODUCTS.filter((product: Product) => {
        let found = product.category.some((category) => {
          return categoryList.includes(category);
        });
        if (found) {
          return product;
        }
      })
      setProducts(filteredProducts);
    }

    setLoading(false);
  });

  // update the checked value
  function filterChangeHandler(e: MouseEvent & { currentTarget: HTMLInputElement; target: Element; }) {
    setFilters(
      filters().map((item: Filter) => {
        return item.name === e.currentTarget.value ? { ...item, checked: e.currentTarget.checked } : { ...item };
      })
    );
  }

  return (
    <For each={filters()}>
      {(filter) => {
        return (
          <div class="form-check">
            <input class="form-check-input"
              type="checkbox"
              value={filter.name}
              id={filter.name}
              checked={filter.checked}
              onClick={(e) => { e.preventDefault(); filterChangeHandler(e); }} />
            <label class="form-check-label" for={filter.name}>
              {filter.name}
            </label>
          </div>
        )
      }}
    </For>
  )
}
