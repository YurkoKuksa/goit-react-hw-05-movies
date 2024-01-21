import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/11',
  params: {
    key: '2152d3494b622b3a7adc71c577ef6f6f',
  },
});

export const getPhotos = async (query, page) => {
  const params = {
    q: query,
    page,
    per_page: 12,
  };

  try {
    const { data } = await instance.get('/', { params });
    return data;
  } catch (error) {
    console.error('Error fetching Pixabay API:', error);
    throw error;
  }
};
