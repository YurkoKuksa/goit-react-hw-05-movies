import {
  Box,
  Character,
  LiItems,
  NoCast,
  Photo,
  Title,
  UlWrapper,
} from './Cast.styled';
import { useEffect, useState } from 'react';

import { getMovieCast } from 'api/apiMovies';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(movieId)
      .then(castData => {
        setCast(castData.cast);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <Box>
      {cast?.length > 0 ? (
        <UlWrapper>
          {cast.map(item => (
            <LiItems key={item.id}>
              <Photo
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={`Photo of ${item.original_name}`}
              />
              <Title>{item.original_name}</Title>
              <Character>
                Character: <span>{item.character}</span>
              </Character>
            </LiItems>
          ))}
        </UlWrapper>
      ) : (
        <NoCast>There are no casts for this movie</NoCast>
      )}
      {isLoading && <Loader />}
    </Box>
  );
};

export default Cast;
