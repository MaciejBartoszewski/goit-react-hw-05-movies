import { getCast } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Components.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div className={css.castContainer}>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li className={css.castItem} key={actor.id}>
            <img
              className={css.castImage}
              key={actor.id}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt={actor.profile_path}
              loading="lazy"
              width="100"
              height="150"
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};