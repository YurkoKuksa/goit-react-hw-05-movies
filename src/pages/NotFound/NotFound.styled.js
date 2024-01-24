import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: darkgreen;
  text-shadow: 2px 2px 5px rgba(0, 255, 0, 0.5);
  margin-bottom: 30px;
  & {
    -webkit-text-stroke: 1px #3a543a;
  }
`;

export const TextInfo = styled.p`
  font-size: 50px;
  margin-bottom: 30px;
`;

export const BackLink = styled(Link)`
  font-size: 35px;

  &:hover {
    font-weight: 700;
    color: darkgreen;
  }
`;
