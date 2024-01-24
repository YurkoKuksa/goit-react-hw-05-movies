import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 20px;
`;

export const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LiItems = styled.li`
  flex-basis: calc((100% - 80px) / 5);
`;

export const Photo = styled.img`
  width: 140px;
  height: auto;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  color: darkgreen;
  font-weight: 700;
`;

export const Character = styled.p`
  margin-bottom: 30px;
`;

export const NoCast = styled.p`
  margin-top: 50px;
  color: darkgreen;
  font-weight: 700;
`;
