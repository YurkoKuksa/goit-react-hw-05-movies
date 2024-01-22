import { getMovie } from 'api/apiMovies';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    getMovie().then(console.log);
  }, []);
  return <>Home</>;
};
