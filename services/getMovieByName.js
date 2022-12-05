/* eslint-disable prettier/prettier */
import { storeSetUp } from '../store/store'

// eslint-disable-next-line new-cap


/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/prefer-default-export
export async function getMovie(url, apiKey, searchInput) {
  // eslint-disable-next-line no-undef
  await axios
    .get(`${url}/?t=${searchInput}&apikey=${apiKey}`)
    .then((res) => {
      storeSetUp.retrieveMovieInfo(res.data);
      // storeSetUp.groupMovie(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
