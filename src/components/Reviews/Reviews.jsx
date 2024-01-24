import { getMovieReview } from 'api/apiMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, NoReview, Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReview(movieId).then(reviewData => {
      setReviews(reviewData.results);
    });
  }, [movieId]);

  return (
    <div>
      {reviews?.length ? (
        <ul>
          {reviews?.length > 0 &&
            reviews.map(item => (
              <li key={item.id}>
                <Author>
                  Author: <span> {item.author} </span>
                </Author>
                <Review>{item.content}</Review>
              </li>
            ))}
        </ul>
      ) : (
        <NoReview>There are no reviews for this movie</NoReview>
      )}
    </div>
  );
};

export default Reviews;
