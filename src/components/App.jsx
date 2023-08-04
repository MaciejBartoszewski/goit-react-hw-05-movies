import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import MovieDetails from 'pages/moviedetails/MovieDetails';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
