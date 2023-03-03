import axios from "axios";

export const searchGroceries = async (searchTerm: string) => {
  try {
    const data = await axios.get(import.meta.env.VITE_GROCERIES_API_URL, {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_GROCERIES_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_GROCERIES_API_HOST,
      },
      params: { ingr: searchTerm },
    });

    return data.data.hints;
  } catch (error) {
    console.error(error);
  }

  return null;
};
