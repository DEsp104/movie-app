/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
const formContainer = document.getElementById('app');

// eslint-disable-next-line no-undef
const movieHeader = document.createElement('h2');
// eslint-disable-next-line no-undef
const movieImage = document.createElement('img');
// eslint-disable-next-line no-undef
const movieContainer = document.createElement('div');
// eslint-disable-next-line no-undef
const imgContainer = document.createElement('div');
// eslint-disable-next-line no-undef
const descriptionContainer = document.createElement('div');
// eslint-disable-next-line no-undef
const year = document.createElement('p');
// eslint-disable-next-line no-undef
const realeased = document.createElement('p');
// eslint-disable-next-line no-undef
const runTime = document.createElement('p');
// eslint-disable-next-line no-undef
const plot = document.createElement('p');
// eslint-disable-next-line no-undef
const imbdRating = document.createElement('p');
// eslint-disable-next-line no-undef
const genre = document.createElement('p');


movieHeader.setAttribute('id', 'movie-header');
imgContainer.setAttribute('id', 'image-container');
movieContainer.setAttribute('id', 'movie-container');
descriptionContainer.setAttribute('id', 'descrip-container');
movieImage.setAttribute('id', 'poster-image');

formContainer.appendChild(movieContainer);
movieContainer.appendChild(movieHeader);
movieContainer.appendChild(imgContainer);
imgContainer.appendChild(movieImage);
imgContainer.appendChild(descriptionContainer);
descriptionContainer.appendChild(year);
descriptionContainer.appendChild(realeased);
descriptionContainer.appendChild(runTime);
descriptionContainer.appendChild(plot);
descriptionContainer.appendChild(genre);
descriptionContainer.appendChild(imbdRating);