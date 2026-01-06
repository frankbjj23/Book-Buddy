import { BooksPage } from "../books/Bookspage";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { BookDetail } from "../books/BookDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Route>
      </Routes>
    </>
  );
}
