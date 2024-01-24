import React from 'react';
import { LoaderBox } from './Loader.styled';
import { SpinnerCircularFixed } from 'spinners-react';

export const Loader = () => {
  return (
    <LoaderBox>
      Loding
      <SpinnerCircularFixed
        size={50}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
      ;
    </LoaderBox>
  );
};

export default Loader;
