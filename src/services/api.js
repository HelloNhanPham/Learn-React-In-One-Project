import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
      query
    )}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }
  );
  return response.data.results;
};
