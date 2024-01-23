import { useEffect, useState } from 'react';
import { Button, Img, Input, SearchForm, SpanLabel } from './Movies.styled';
import Logo from 'img/find.svg';
import { getSearch } from 'api/apiMovies';
import { Lii, ListItems } from './Home.styled';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSearch().then(movieData => {
      console.log(movieData);
      setMovies(movieData);
    });
  }, []);

  return (
    <>
      <SearchForm autoFocus>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          required
        />
        <Button type="submit">
          <SpanLabel>
            <Img src={Logo} alt="React Logo" />
          </SpanLabel>
        </Button>
      </SearchForm>

      {movies.length > 0 &&
        movies.map(item => (
          <Lii key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <ListItems></ListItems>
            </Link>
          </Lii>
        ))}
    </>
  );
};
