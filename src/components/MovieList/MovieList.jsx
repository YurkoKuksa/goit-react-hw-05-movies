const { useLocation } = require('react-router-dom');

const MoviesList = ({ movies }) => {
  const location = useLocation();

  console.log(location.pathname);
  console.log(location.search);
  console.log(location.hash);

  return (
    <>
      <ul>hjhjhkjhkh</ul>
    </>
  );
};

export default MoviesList;
