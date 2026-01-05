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
