import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 35px;

  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(34, 139, 34, 0.5);
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SpanLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  &:hover {
    /* & > svg path {
      fill: green;
      stroke: green;
      */
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 38px;
  font: inherit;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkGreen};
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    font-weight: 400;
    padding: 15px;
  }
`;
