import { Link } from "react-router-dom";

export const BookList = ({ books }) => {
  return (
    //     <ul id="books">
    //       {books.map((book) => (
    //         <li key={book.id} className="book-item">

    //           {book.coverimage && (
    //             <img
    //               src={book.coverimage}
    //               alt={book.title}
    //               width="75"
    //               height="100"
    //             />
    //           )}
    //           <div>
    //             <h2>{book.title}</h2>
    //             <p className="author">{book.author}</p>
    //             <p>{book.description}</p>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // };

    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>
            {book.coverimage && (
              <img id="bookImage" src={book.coverimage} alt={book.title} />
            )}
            {book.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const BookListItem = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <p>{book.title}</p>
    </Link>
  );
};
