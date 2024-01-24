import { useEffect, useState } from 'react';
import {
  Box,
  BoxReview,
  Btn,
  GenreBox,
  MainTitle,
  More,
  P,
  Poster,
  Pp,
  Span,
} from './MovieDetails.styled';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/apiMovies';
import { Title } from '../Home/Home.styled';

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(movieData => {
      setMovies(movieData);
    });
  }, [movieId]);

  // id, media_type, original_title, overview, backdrop_path

  return (
    <>
      <Link>
        <Btn type="button">&larr;go back</Btn>
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
              User Score: <Span>{movies.vote_average.toFixed(1)}%</Span>
            </P>
            <Title>Overview:</Title>
            <P>{movies.overview}</P>
            <Title>Genres:</Title>
            <GenreBox>
              {movies.genres.map(item => (
                <P key={item.id}>{item.name}</P>
              ))}
            </GenreBox>
          </div>
        </Box>
      )}
      <BoxReview>
        <More>Additional information</More>
        <nav>
          <Link to="cast">
            <Pp>Cast</Pp>
          </Link>
          <Link to="reviews">
            <Pp>Reviwe</Pp>
          </Link>
        </nav>
      </BoxReview>
      <Outlet />
    </>
  );
};
