import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: 20px;
  &:hover {
    color: darkgreen;
    font-weight: 700;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const Poster = styled.img`
  width: 250px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 10px;
`;

export const Title = styled.h2``;

export const Span = styled.span`
  font-weight: 700;
`;

export const P = styled.p`
  margin-bottom: 10px;
`;

export const BoxReview = styled.div`
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGreen};
  margin-top: 10px;

  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGreen};
  box-shadow: inset 0 0 10px 5px rgba(144, 238, 144, 0.3),
    0 2.8px 2.2px rgba(144, 238, 144, 0.034),
    0 6.7px 5.3px rgba(144, 238, 144, 0.048),
    0 12.5px 10px rgba(144, 238, 144, 0.06),
    0 22.3px 17.9px rgba(144, 238, 144, 0.072),
    0 41.8px 33.4px rgba(144, 238, 144, 0.086),
    0 100px 80px rgba(144, 238, 144, 0.12);
`;

export const GenreBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const More = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const Pp = styled.p`
  margin-bottom: 5px;
  &:hover {
    font-weight: 700;
    color: darkgreen;
  }
`;
