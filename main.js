/* eslint-disable no-undef */
import './style.css';
import { getMovie } from './services/getMovieByName';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
const { URL_ADDRESS, API_KEY } = config;

// eslint-disable-next-line no-undef
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'movie-button') {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-undef
    const inputText = document.getElementById('movie-search').value;
    getMovie(URL_ADDRESS, API_KEY, inputText);
  }
});
