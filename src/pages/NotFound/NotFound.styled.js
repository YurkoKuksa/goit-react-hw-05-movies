import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d7f7ca;
  height: 100vh;
`;

export const MainTitle = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: darkgreen;
  text-shadow: 2px 2px 5px rgba(0, 255, 0, 0.5);
  margin-bottom: 30px;
  -webkit-text-stroke: 1px #3a543a;
`;

export const TextInfo = styled.p`
  font-size: 50px;
  margin-bottom: 30px;
`;

export const BackLink = styled(Link)`
  font-size: 35px;
  padding: 15px;
  border: 1px solid darkgreen;
  border-radius: 15px;
  background-color: #39ba07;

  &:hover {
    font-weight: 700;
  }
`;
