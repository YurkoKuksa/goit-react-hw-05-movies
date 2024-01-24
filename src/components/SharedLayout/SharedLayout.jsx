import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Navigator } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigator>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigator>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
