import { getMovie } from 'api/apiMovies';
import { useEffect, useState } from 'react';
import { Container, Lii, ListItems, Title } from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then(movieData => {
      setMovies(movieData);
    });
  }, []);

  return (
    <Container>
      <Title>Trending Today</Title>
      <ul>
        {movies.length > 0 &&
          movies.map(item => (
            <Lii key={item.id}>
              <Link to={`/movies/${item.id}`}>
                <ListItems>{item.original_title}</ListItems>
              </Link>
            </Lii>
          ))}
      </ul>
    </Container>
  );
};
