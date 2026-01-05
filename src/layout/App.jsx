import { BooksPage } from "../books/Bookspage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<BooksPage />}>
          <Route index element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Route>
      </Routes>
    </>
  );
}
