export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.coverimage && (
            <img src={book.coverimage} alt={book.title} width="50" />
          )}
          {book.title}
        </li>
      ))}
    </ul>
  );
};
