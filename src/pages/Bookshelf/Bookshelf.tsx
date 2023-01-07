// https://docs.solidjs.com/guides/tutorials/getting-started-with-solid/fetching-data#congratulations

import { createSignal, Show } from "solid-js";

import { BookList } from "./BookList";
import { AddBook } from "./AddBook";

export type Book = {
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

interface BookshelfProps {
  name: string;
}

// function BookShelf(props: BookshelfProps) {
function BookShelf() {

  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);
  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      <h1>Solid's Bookshelf</h1>
      {/* <h1>{props.name}'s Bookshelf</h1> */}
      <BookList books={books()} />
      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a book</button>}
      >
        <AddBook setBooks={setBooks} />
        <button onClick={toggleForm}>Finished adding books</button>
      </Show>
    </div>
  );
}

// function App() {
//   return (
//     <Bookshelf name="Solid" />
//   );
// }

export default BookShelf;
