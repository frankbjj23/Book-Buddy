import { getBooks } from "../api/books";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const BookDetail = () => {
  const [individualBookDetail, setIndividualBookDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getBooks(id);
      console.log(response);
      setIndividualBookDetail(response);
    })();
  }, [id]);
  return (
    <>
      <div>
        <h1>{individualBookDetail?.title}</h1>
        <p>Author: {individualBookDetail?.author}</p>
        <p>Description: {individualBookDetail?.description}</p>
      </div>
    </>
  );
};
