import { useState, useEffect } from "react";
import { getBooks } from "../api/books";
import { BookList } from "./BookList";
export const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
    console.log(data);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <BookList books={books} syncBooks={syncBooks} />
    </>
  );
};
