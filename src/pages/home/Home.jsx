import { getTrendingMovies } from 'Api';
import { MovieList } from 'components/movielist/MovieList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;