import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '2152d3494b622b3a7adc71c577ef6f6f',
  },
});

export const getMovie = async () => {
  try {
    const { data } = await instance.get('/trending/movie/day');
    return data.results;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

export const getSearch = async query => {
  try {
    const { data } = await instance.get(`/search/movie?query=${query}`);

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

export const getMovieDetails = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}`);

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

export const getMovieCast = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}/credits`);

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

export const getMovieReview = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}/reviews`);

    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};
