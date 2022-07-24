/* eslint-disable prettier/prettier */
import { printMovie } from '../components/printMovieDescription';
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/prefer-default-export
export async function getMovie(url, apiKey, searchInput) {
  // eslint-disable-next-line no-undef
  await axios
    .get(`${url}/?t=${searchInput}&apikey=${apiKey}`)
    .then((res) =>  {
      // console.log(res.data);
      // eslint-disable-next-line no-undef
      localStorage.removeItem('testObject')
      // eslint-disable-next-line no-undef
      localStorage.setItem('testObject', JSON.stringify(res.data));
      // eslint-disable-next-line no-undef
      const movieDescriptionObject = JSON.parse(localStorage.getItem('testObject'));

      printMovie(movieDescriptionObject);

      // eslint-disable-next-line no-restricted-globals, no-undef
      // location.reload();
      // console.log(localStorage)
    })
    .catch((err) => {
      console.log(err);
    });
};
