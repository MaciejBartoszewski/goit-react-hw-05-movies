import { getReviews } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Components.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {reviews.length === 0
          ? "Sorry, we don't have reviews for this movie"
          : reviews.map(({ author, content, id }) => (
              <li key={id}>
                <p className={css.reviewsAuthor}>Author: {author}</p>
                <p className={css.reviewsContent}>{content}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};