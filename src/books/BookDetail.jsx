import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIndividualBook, reserveBook } from "../api/books";
import { useAuth } from "../auth/AuthContext";

export const BookDetail = () => {
  const [individualBookDetail, setIndividualBookDetail] = useState();
  const { id } = useParams();
  const { token } = useAuth();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getIndividualBook(id);
      setIndividualBookDetail(response);
    })();
  }, [id]);
  return (
    <>
    <div className="book-detail">
        <img
          src={individualBookDetail?.coverimage}
          alt={individualBookDetail?.title}
        />
        <h1>{individualBookDetail?.title}</h1>
        <p>Author: {individualBookDetail?.author}</p>
        <p>Description: {individualBookDetail?.description}</p>
        {token ? (
          <button
            type="button"
            onClick={async () => {
              try {
                await reserveBook(token, Number(id));
                setMessage("Reserved!");
              } catch (e) {
                setMessage(e.message);
              }
            }}
          >
            Reserve this book
          </button>
        ) : (
          <p>Please log in to reserve this book.</p>
        )}
        {message && <p>{message}</p>}
      </div>
    </>
  );
};
