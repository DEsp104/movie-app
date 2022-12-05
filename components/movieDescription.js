/* eslint-disable prettier/prettier */
/* eslint-disable new-cap */
/* eslint-disable prettier/prettier */
/* eslint-disable no-const-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
import { storeSetUp } from "../store/store.js"


const template = document.createElement('template');
template.innerHTML = `
<style>
  #movieDescription {
    margin-top: 30px;
  }

  #favoriteButton{
    width: 6rem;
    height: 2rem;
    background-color: #ff9800;
    border-radius: 15px;
    padding: 5px;
    font-size: 1rem;
    font-weight: bolder;
    color: #fff;
  }

  .disappear {
    display: none;
  }

  .appear {
    display: block;
  }

  #favoriteButton:hover {
    cursor: pointer;
    background-color: #b16b02;
  }

  p {
    text-align: center;
  }

  p img {
    width: 250px;
  }

  label,
textarea {
    font-size: .8rem;
    letter-spacing: 1px;
}
textarea {
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}

label {
    display: block;
    margin-bottom: 10px;
}

form button {
    width: 6rem;
    height: 2rem;
    background-color: #9c27b0;
    border-radius: 15px;
    padding: 5px;
    font-size: 1rem;
    font-weight: bolder;
    color: #fff;
}
</style>

<div id="movieDescription">
  <button id="favoriteButton">Favorite</button>
  <p><img  alt="" id="movie-image" /></p>
  <ul>
    <li>Year: <span id="movie-year"></span></li>
    <li>Released: <span id="movie-released"></span></li>
    <li>Runtime: <span id="runtime"></span></li>
    <li>Plot: <span id="plot"></span></li>
    <li>Genre: <span id="genre"></span></li>
    <li>imdbRating: <span id="imdb-rating"></span></li>
    <li>comment: <span id="commen-text"></span></li>
  </ul>

  <form>
    <label for="commentText">Tell us about the movie:</label>
    <textarea id="commentTex" name="commentText" rows="15" cols="66" placeholder="It was a dark and stormy night..."></textarea>
    <button id="postButton">Post</button>
  </form>
</div>
`;

class MovieDescription extends HTMLElement {
  constructor() { 
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(template.content.cloneNode(true));

    this.movieImage = this.shadowRoot.querySelector("#movie-image");
    this.movieYear = this.shadowRoot.querySelector("#movie-year");
    this.movieReleased = this.shadowRoot.querySelector("#movie-released");
    this.movieRuntime = this.shadowRoot.querySelector("#runtime");
    this.plot = this.shadowRoot.querySelector("#plot");
    this.movieGenre = this.shadowRoot.querySelector("#genre");
    this.imdbRating = this.shadowRoot.querySelector("#imdb-rating");
    this.comment = this.shadowRoot.querySelector("#commen-text");
    this.favoriteButton = this.shadowRoot.querySelector("#favoriteButton");
    this.postButton = this.shadowRoot.querySelector("#postButton");
    this.commentTextSection = this.shadowRoot.querySelector('#commentTex')
  }

  static get observedAttributes() { 
    // name of attribute in the state manager
    return ["image", "year", "realeased", "runtime", "plot", "genre", "rating", "comment"]
  }
  
  attributeChangedCallback(property, oldValue, newValue) { 
    // If nothing changes, stop execution
    if (oldValue === newValue) return;

    if (property === "image" && this.movieImage) {
      this.movieImage.setAttribute("src", newValue);
    } else if (property === "year" && this.movieYear) {
      this.movieYear.textContent = newValue;
    } else if (property === "realeased" && this.movieReleased) {
      this.movieReleased.textContent = newValue;
    } else if (property === "runtime" && this.movieRuntime) { 
      this.movieRuntime.textContent = newValue;
    } else if (property === "plot" && this.plot) {
      this.plot.textContent = newValue;
    } else if (property === "genre" && this.movieGenre) {
      this.movieGenre.textContent = newValue;
    } else if (property === "rating" && this.imdbRating) {
      this.imdbRating.textContent = newValue;
    } else if (property === "comment" && this.comment) {
      this.comment.textContent = newValue;
    }
    
  }

  connectedCallback() {
    storeSetUp.subscribe((state) => {
      console.log(state)

      this.setAttribute("image", state.image);
      this.setAttribute("year", state.year);
      this.setAttribute("realeased", state.realeased);
      this.setAttribute("runtime", state.runtime);
      this.setAttribute("plot", state.plot);
      this.setAttribute("genre", state.genre);
      this.setAttribute("rating", state.rating);
      this.setAttribute("comment", state.comment);
    });

    this.favoriteButton.addEventListener('click', () => { 
      storeSetUp.groupMovie()
      // eslint-disable-next-line no-restricted-globals
      // location.reload();
      // this.favoriteButton.setAttribute("class", "disappear");
    });

    this.postButton.addEventListener('click', (e) => { 
      storeSetUp.postComment(this.commentTextSection.value);

      e.preventDefault()
      console.log(this.commentTextSection.value);

    })
    
  }
}

window.customElements.define('movie-description', MovieDescription);