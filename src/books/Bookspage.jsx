import { useState, useEffect } from "react";
import { getBooks, getReservations } from "../api/books";
import { BookList } from "./BookList";
import { useAuth } from "../auth/AuthContext";

export const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const [reservations, setReservations] = useState([]);
  const { token } = useAuth();

  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    syncBooks();

    if (!token) {
      setReservations([]);
      return;
    }

    (async () => {
      const data = await getReservations(token);
      setReservations(data);
    })();
  }, [token]);

  const filteredBooks = books.filter((book) => {
    const term = search.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <h1>Catalog</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList books={filteredBooks} reservations={reservations} />
    </>
  );
};
