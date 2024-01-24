import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: inset 0 0 10px 5px rgba(144, 238, 144, 0.3),
    0 2.8px 2.2px rgba(144, 238, 144, 0.034),
    0 6.7px 5.3px rgba(144, 238, 144, 0.048),
    0 12.5px 10px rgba(144, 238, 144, 0.06),
    0 22.3px 17.9px rgba(144, 238, 144, 0.072),
    0 41.8px 33.4px rgba(144, 238, 144, 0.086),
    0 100px 80px rgba(144, 238, 144, 0.12);

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Navigator = styled.nav``;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 25px;

  &:hover {
    /* font-weight: 700; */
  }

  &.active {
    color: white;
    background-color: green;
    opacity: 0.7;
  }
`;
