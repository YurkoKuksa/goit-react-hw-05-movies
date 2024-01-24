import { BackLink, TextInfo, Wrapper, MainTitle } from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <MainTitle>404</MainTitle>

      <TextInfo>PAGE NOT FOUND</TextInfo>
      <BackLink to="/">Go back home</BackLink>
    </Wrapper>
  );
};

export default NotFound;
