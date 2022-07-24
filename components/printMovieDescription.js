/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/prefer-default-export
export function printMovie(movieDescription) {
  // eslint-disable-next-line prettier/prettier
  const movie = movieDescription;

  // eslint-disable-next-line no-undef
  const movieHeader = document.getElementById('movie-header');
  // eslint-disable-next-line no-undef
  const movieImage = document.getElementById('poster-image');
  // eslint-disable-next-line no-undef
  const pElements = document.getElementsByTagName('p');

  movieHeader.innerText = `Title: ${movie.Title}`;
  
  movieImage.setAttribute('src', `${movie.Poster}`);

  pElements[0].innerText = `Year: ${movie.Year}:`;

  pElements[1].innerText = `Released: ${movie.Released}:`;

  pElements[2].innerText = `Runtime: ${movie.Runtime}:`;

  pElements[3].innerText = `Plot: ${movie.Plot}:`;

  pElements[4].innerText = `Genre: ${movie.Genre}`;

  pElements[5].innerText = `imdbRating: ${movie.imdbRating}`;
};
