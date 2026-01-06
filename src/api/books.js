const API = import.meta.env.VITE_API;

export const getBooks = async () => {
  try {
    const response = await fetch(API + `/books`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const getIndividualBook = async (id) => {
  const response = await fetch(API + `/books/${id}`);
  const result = await response.json();
  return result;
};

export const accountDetails = async (token) => {
  const response = await fetch(API + `/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const getReservations = async (token) => {
  const response = await fetch(API + `/reservations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  if (!response.ok)
    throw Error(result.message || "Failed to fetch reservations");
  return result;
};

export const reserveBook = async (token, bookId) => {
  const response = await fetch(API + `/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookId }),
  });
  const result = await response.json();
  if (!response.ok) throw Error(result.message || "Failed to reserve book");
  return result;
};

export const returnReservation = async (token, reservationId) => {
  const response = await fetch(API + `/reservations/${reservationId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw Error("Failed to return book");
};
