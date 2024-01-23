import { useEffect, useState } from 'react';
import {
  Box,
  BoxReview,
  Btn,
  MainTitle,
  P,
  Poster,
} from './MovieDetails.styled';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/apiMovies';
import { Title } from './Home.styled';

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(movieData => {
      console.log(movieData);
      setMovies(movieData);
    });
  }, [movieId]);

  // id, media_type, original_title, overview, backdrop_path

  return (
    <>
      <Link>
        <Btn type="button">go home</Btn>
      </Link>

      {movies && (
        <Box>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={movies.original_title}
          />
          <div>
            <MainTitle>{movies.original_title}</MainTitle>
            <P>
              User Score: <span>{movies.vote_average}</span>
            </P>
            <Title>Overview:</Title>
            <P>{movies.overview}</P>
            <Title>Genres:</Title>
            <P>{movies.genre_ids} </P>
          </div>
        </Box>
      )}
      <BoxReview>
        <h3>Additional information</h3>
        <Outlet />
        <Link>
          <p>CAst</p>
        </Link>
        <Link>
          <p>Reviwe</p>
        </Link>
      </BoxReview>
    </>
  );
};
