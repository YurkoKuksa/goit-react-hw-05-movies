import { getMovie } from 'api/apiMovies';
import { useEffect, useState } from 'react';
import { Container, Title } from './Home.styled';

import { MoviesList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then(movieData => {
      setMovies(movieData);
    });
  }, []);

  return (
    <Container>
      <Title>Trending Today</Title>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;
