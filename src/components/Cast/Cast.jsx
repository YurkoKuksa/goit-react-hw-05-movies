import {
  Box,
  Character,
  LiItems,
  Photo,
  Title,
  UlWrapper,
} from './Cast.styled';
import { useEffect, useState } from 'react';

import { getMovieCast } from 'api/apiMovies';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(castData => {
      setCast(castData.cast);
    });
  }, [movieId]);

  return (
    <Box>
      <UlWrapper>
        {cast?.length > 0 &&
          cast.map(item => (
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
    </Box>
  );
};
