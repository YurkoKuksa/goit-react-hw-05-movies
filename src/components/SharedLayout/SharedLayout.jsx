import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Navigator } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigator>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigator>
      </Header>

      <Outlet />
    </Container>
  );
};
