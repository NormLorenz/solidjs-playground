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

  onMount(() => {
    ALLPRODUCTS.forEach((product) => {
      product.category.forEach((cat) => {
        let found = filterList.some(function (el) {
          return el.name === cat;
        });
        if (!found) {
          filterList.push({ name: cat, checked: false });
        }
      })
    })
    setFilters(filterList);
  })

  createEffect(() => {
    // make a flat array so we don't have to loop for every product and use .includes instead.
    setLoading(true);
    let filterArr: Product[] = [];
    filters().forEach((item) => {
      if (item.checked) {
        filterArr.push(item.name);
      }
    })

    if (filterArr.length === 0) {
      setProducts(ALLPRODUCTS);
    } else {
      let filteredProducts = ALLPRODUCTS.filter((item) => {
        let found = item.category.some((cat) => {
          return filterArr.includes(cat);
        });
        if (found) {
          return item;
        }
      })
      setProducts(filteredProducts);
    }

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
    <For each={filters()}>
      {(filter) => {
        return (
          <div class="form-check">
            <input class="form-check-input"
              type="checkbox"
              value={filter.name}
              id={filter.name}
              checked={filter.checked}
              onChange={filterChangeHandler} />
            <label class="form-check-label" for={filter.name}>
              {filter.name}
            </label>
          </div>
        )
      }}
    </For>
  )
}
