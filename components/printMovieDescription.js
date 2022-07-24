/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/prefer-default-export
export function printMovie(movieDescription) {
  // eslint-disable-next-line prettier/prettier
  const movie = movieDescription;

  // eslint-disable-next-line no-undef
  const movieHeader = document.getElementById('movieHeader');

  movieHeader.innerText = movie.Title;
  console.log(movie);

};
