import { useEffect, useState } from 'react';
import { Button, Img, Input, SearchForm, SpanLabel } from './Movies.styled';
import Logo from 'img/find.svg';
import { getSearch } from 'api/apiMovies';

import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const name = searchParams.get('name');

  useEffect(() => {
    if (!name) {
      return;
    }

    setIsLoading(true);

    getSearch(name)
      .then(data => {
        setMovies(data.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ name: event.target.elements.query.value });
    setMovies([]);
  };

  return (
    <>
      <SearchForm autoFocus onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          required
          name="query"
        />
        <Button type="submit">
          <SpanLabel>
            <Img src={Logo} alt="React Logo" />
          </SpanLabel>
        </Button>
      </SearchForm>

      {movies.length > 0 && <MoviesList movies={movies} />}

      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
