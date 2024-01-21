import styled from 'styled-components';

export const SearchbarStyle = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: ${({ theme }) => theme.shadows.button};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.button};
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  /* background-image: ; */
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

export const Img = styled.img``;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 38px;
  font: inherit;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    font-weight: 400;
  }
`;
