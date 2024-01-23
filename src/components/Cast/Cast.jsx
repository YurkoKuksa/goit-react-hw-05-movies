import { Title } from 'pages/Home.styled';
import { Character, Photo } from './Cast.styled';
import { useEffect, useState } from 'react';

import { getMovieCast } from 'api/apiMovies';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  // const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(cast).then(castData => {
      console.log(castData);
      setCast(castData);
    });
  }, [cast]);

  return (
    <div>
      jhdfjhjshfjshfhsdkfs
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <Photo scr="{#}" alt="{#}" />
            <Title>name_jkjhjkhjjh</Title>
            <Character>
              Character: <span>jhjhkjhkjhkj</span>
            </Character>
          </li>
        ))}
      </ul>
    </div>
  );
};
