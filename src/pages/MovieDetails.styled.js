import styled from 'styled-components';

export const Btn = styled.button`
  /* padding: 0; */
`;

export const Poster = styled.img`
  width: 250px;
`;

export const Box = styled.div`
  display: flex;
  gap: 15px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 5px;
`;

export const Title = styled.h2``;

export const P = styled.p`
  margin-bottom: 10px;
`;

export const BoxReview = styled.div`
  padding: 10px;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGreen};
  margin-top: 10px;

  margin-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGreen};
`;
