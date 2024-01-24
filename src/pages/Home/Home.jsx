import { getMovie } from 'api/apiMovies';
import { useEffect, useState } from 'react';
import { Container, Title } from './Home.styled';

import { MoviesList } from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovie()
      .then(movieData => {
        setMovies(movieData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <Title>Trending Today</Title>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </Container>
  );
};

export default Home;
