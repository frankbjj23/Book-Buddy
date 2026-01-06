import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  accountDetails,
  getReservations,
  returnReservation,
} from "../api/books";

export const Account = () => {
  const { token } = useAuth();
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (!token) return;

    (async () => {
      try {
        const data = await accountDetails(token);
        setAccount(data);

        const reservationData = await getReservations(token);
        setReservations(reservationData);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [token]);

  if (!token) return <p>Please Log in to view your account.</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <div>
      <h1>Welcome, {account?.firstname}</h1>
      <p>Your email on file with us is {account?.email}</p>
      <h3>Your reservations</h3>
      {reservations.length === 0 ? (
        <p>You have not reserved any books yet.</p>
      ) : (
        <ul>
          {reservations.map((res) => (
            <li key={res.id}>
              <p>
                {res.title} - {res.author}
              </p>
              <button
                type="button"
                onClick={async () => {
                  await returnReservation(token, res.id);
                  setReservations((prev) =>
                    prev.filter((r) => r.id !== res.id)
                  );
                }}
              >
                Return
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
