import { createSignal, Setter, JSX, createResource, For, Show } from "solid-js";

import { Book } from "./BookShelf";
import { searchBooks } from "./searchBooks";

export interface AddBookProps {
  setBooks: Setter<Book[]>;
}

export function AddBook(props: AddBookProps) {

  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");

  const [data] = createResource<Book[], string>(query, searchBooks);

  return (
    <>
      <form>
        <div>
          <label class="form-label" for="title">Search books:</label>
          <input class="form-control" id="title" value={input()} onInput={(e) => { setInput(e.currentTarget.value); }} />
        </div>
        <button class="btn btn-outline-primary" type="submit" onClick={(e) => { e.preventDefault(); setQuery(input()); }}>Search</button>
      </form>

      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul class="list-group">
          <For each={data()}>
            {(book) => (
              <li class="list-group-item">
                {book.title} by {book.author}{" "}
                <button type="button" class="btn btn-outline-primary" aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={(e) => { e.preventDefault(); props.setBooks((books) => [...books, book]); }}>
                  Add
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  )
}
