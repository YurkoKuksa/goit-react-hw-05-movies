import { getMovieReview } from 'api/apiMovies';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReview().then(reviewData => {
      console.log(reviewData);
      setReviews(reviewData);
    });
  }, []);

  return (
    <div>
      <ul>
        {reviews.map()}
        <li>
          <h2>
            dffff : <span></span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
            accusantium dolores, magnam nesciunt culpa distinctio ipsum
            praesentium architecto nemo est iure eaque rem possimus quam ipsam
            asperiores minus natus.
          </p>
        </li>
      </ul>

      <p>There are no reviews for this movie</p>
    </div>
  );
};
