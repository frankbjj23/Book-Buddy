import { Link } from "react-router-dom";

export const BookList = ({ books, reservations }) => {
  return (
    <ul id="bookList">
      {books.map((book) => {
        const reservedByYou = reservations?.some(
          (res) => res.bookid === book.id
        );

        return (
          <li id="bookListContainer" key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.coverimage && (
                <img id="bookImage" src={book.coverimage} alt={book.title} />
              )}
              <h2>{book.title}</h2>
            </Link>
            <p>{book.description}</p>
            {reservedByYou ? (
              <p>Reserved by you</p>
            ) : book.available ? (
              <p>Available</p>
            ) : (
              <p>Reserved</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
