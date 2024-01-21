import React, { useState } from 'react';
import Logo from 'img/find.svg';
import {
  Button,
  Img,
  Input,
  SearchForm,
  SearchbarStyle,
  SpanLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <SearchbarStyle>
      <SearchForm onSubmit={handleSubmit} autoFocus>
        <Button type="submit">
          <SpanLabel>
            <Img src={Logo} alt="React Logo" />
          </SpanLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          onChange={handleChange}
          required
        />
      </SearchForm>
    </SearchbarStyle>
  );
};
export default Searchbar;
