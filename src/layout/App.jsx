import { BooksPage } from "../books/Bookspage";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { BookDetail } from "../books/BookDetail";
import { Register } from "../auth/Register";
import { Login } from "../auth/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
