/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
const formContainer = document.getElementById('app');
// eslint-disable-next-line no-undef
const movieHeader = document.createElement('h1');
// eslint-disable-next-line no-undef
const headerText = document.createTextNode('Movie Search');
// eslint-disable-next-line no-undef
const form = document.createElement('form');
// eslint-disable-next-line no-undef
const input = document.createElement('input');
input.setAttribute("type", "search");
input.setAttribute("id", "movie-search");
input.setAttribute("placeholder", 'Movie title:');
// eslint-disable-next-line no-undef
const button = document.createElement('button');
// eslint-disable-next-line no-undef
const buttonText = document.createTextNode('Search');
button.setAttribute("id", "movie-button");

formContainer.appendChild(movieHeader);

movieHeader.appendChild(headerText);

formContainer.appendChild(form);

form.appendChild(input);

form.appendChild(button);

button.appendChild(buttonText);