import { Lii, ListItems } from 'pages/Home/Home.styled';

const { useLocation, Link } = require('react-router-dom');

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.length > 0 &&
          movies.map(item => (
            <Lii key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <ListItems>{item.original_title}</ListItems>
              </Link>
            </Lii>
          ))}
      </ul>
    </>
  );
};
