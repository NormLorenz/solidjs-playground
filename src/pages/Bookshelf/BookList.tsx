import { For } from "solid-js";

import { Book } from "./BookShelf";

interface BookListProps {
  books: Book[];
}

export function BookList(props: BookListProps) {

  const totalBooks = () => props.books.length;

  return (
    <>
      <h2>My books ({totalBooks()})</h2>
      <ul class="list-group">
        <For each={props.books}>
          {(book) => {
            return (
              <li class="list-group-item">
                {book.title} <span style={{ "font-style": "italic" }}> ({book.author})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
