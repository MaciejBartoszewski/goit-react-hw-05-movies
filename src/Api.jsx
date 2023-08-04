import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b31967df9eb5016869d63936803f4de7';

export const getTrendingMovies = async () => {
  const responce = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  console.log(responce);
  return responce.data;
};

export const getMovieById = async id => {
  const responce = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return responce.data;
};

export const getMoviesByQuery = async query => {
  const responce = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return responce.data.results;
};

export const getCast = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return responce.data.cast;
};

export const getReviews = async movieId => {
  const responce = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return responce.data.results;
};