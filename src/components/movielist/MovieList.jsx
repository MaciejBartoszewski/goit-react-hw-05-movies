import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from 'components/Components.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const DEFAULT_MOVIE_POSTER =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li className={css.moviesListItem} key={movie.id}>
          <Link
            className={css.moviesListLink}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
              <img
              className={css.moviesListImg}
              src={
                movie.poster_path
                  ? baseUrl + movie.poster_path
                  : DEFAULT_MOVIE_POSTER
              }
              alt={movie.title}
              width="400"
            />
            <p className={css.moviesListTitle}>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};