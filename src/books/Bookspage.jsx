import { useState, useEffect } from "react";
import { getBooks, getReservations } from "../api/books";
import { BookList } from "./BookList";
import { useAuth } from "../auth/AuthContext";

export const BooksPage = () => {
  const [books, setBooks] = useState([]);
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

  return (
    <>
      <h1>Catalog</h1>
      <BookList books={books} reservations={reservations} />
    </>
  );
};
