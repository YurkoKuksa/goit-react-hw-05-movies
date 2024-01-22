import { Button, Img, Input, SearchForm, SpanLabel } from './Movies.styled';
import Logo from 'img/find.svg';

export const Movies = () => {
  return (
    <>
      <SearchForm /* onSubmit={handleSubmit} */ autoFocus>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          // onChange={handleChange}
          required
        />
        <Button type="submit">
          <SpanLabel>
            <Img src={Logo} alt="React Logo" />
          </SpanLabel>
        </Button>
      </SearchForm>
    </>
  );
};
