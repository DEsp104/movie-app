/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { storeSetUp } from "../store/store.js"


const template = document.createElement('template');
template.innerHTML = `

<link rel="stylesheet" href="/shadoDomStyle/style.css">

<div id='favorites'>
  <h2>Favorite Movies</h2>
  <ul id="favorite-list"></ul>
</div>

`;


class Favorite extends HTMLElement {
  constructor() {
    super();
    
    // Set up ShadowDOM and the template
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    // Set up our counter
    this.list = this.shadowRoot.querySelector("#favorite-list");
    this.favoriteContainer = this.shadowRoot.querySelector('#favorites');
  }

  // Observe list attribute for changes
  static get observedAttributes() {
    return ["list", "favorite"];
  }

  // Change counter when list attribute changes
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (property === "list" && this.list) {
      // this.list.textContent = newValue;

      const favoriteMovies = JSON.parse(newValue);

      console.log(favoriteMovies)

      for (let i = 0; i < favoriteMovies.length; i++) {
        const list = document.createElement("li");
        const img = document.createElement("img");
        const pOne = document.createElement("p");
        const pTwo = document.createElement("p");
        const pThree = document.createElement("p");
        const pFour = document.createElement("p");
        const pFive = document.createElement("p");
        const pSix = document.createElement("p");
        const pSeven = document.createElement("p");
        const pEight = document.createElement('p');

        list.appendChild(pOne);
        pOne.appendChild(img);
        list.appendChild(pTwo);
        list.appendChild(pThree);
        list.appendChild(pFour);
        list.appendChild(pFive);
        list.appendChild(pSix);
        list.appendChild(pSeven);
        list.appendChild(pEight);
        
        img.setAttribute("src", `${favoriteMovies[i].movie}`);

        pTwo.textContent = `Year: ${favoriteMovies[i].year}`;
        pThree.textContent = `Released: ${favoriteMovies[i].released}`;
        pFour.textContent = `Runtime: ${favoriteMovies[i].runtime}`;
        pFive.textContent = `Plot: ${favoriteMovies[i].plot}`;
        pSix.textContent = `Genre: ${favoriteMovies[i].genre}`;
        pSeven.textContent = `imdbRating: ${favoriteMovies[i].rating}`;
        pEight.textContent = `Comment: ${favoriteMovies[i].comment}`

        this.list.appendChild(list);
       
      }
    }
  }

  // STATE STUFF!
  // Set up our component to listen for store changes, and update it's list attribute when the store changes
  // We do this in connectedCallback so we can make changes to the actual on-page element, which we can't do before this.
  connectedCallback() {
    // Subscribe to changes in the store
    storeSetUp.subscribe((state) => {
      // Update the list attribute of the element
      // This will trigger the attributeChangedCallback function, which will update the counter, letting the same mechanism for updating the counter work both from "outside" the component, and from within the component on state changes.
      
      this.setAttribute("list", JSON.stringify(state.list));
    });
  } 

}

window.customElements.define('favorite-movie', Favorite);