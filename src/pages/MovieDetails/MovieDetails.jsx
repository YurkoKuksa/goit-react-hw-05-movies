import { useEffect, useState } from 'react';
import {
  Box,
  BoxReview,
  GenreBox,
  MainTitle,
  More,
  P,
  Poster,
  Pp,
  Span,
  StyledLink,
} from './MovieDetails.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/apiMovies';
import { Title } from '../Home/Home.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const defaultPic =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg';

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(movieData => {
        setMovies(movieData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <StyledLink to={location.state?.from || '/'}>&larr;go back</StyledLink>
      {movies && (
        <Box>
          <Poster
            src={
              movies.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                : defaultPic
            }
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
      {isLoading && <Loader />}
    </>
  );
};

export default MovieDetails;
