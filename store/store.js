/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/prefer-default-export
import { database } from "../database/database";

export class Store {
  constructor(init = {}) {
    const self = this;

    this.subscribers = [];

    //  wait for database to be open
    database.then(async (db) => {
      // make the database reusable from with in the store by using the store db property (this.db)
      this.db = db;

      // get the state key from the movieData table in the database
      const previous = await db.get('movieData', 'state');

      // if database exist with table, loop over the entries in side the database 
      if (previous) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, val] of Object.entries(previous)) {
          // set the key values in the state manager
          this.set(key, val);
        } 
      }
    })
    

    this.state = new Proxy(init, {

      async set(state, key, value) {
        
        // eslint-disable-next-line no-param-reassign
        state[key] = value;

        

        // whenever the store gets updated, save the changes to the indexedb. This helps for later recovery of data
        //  check to see if database is open
        if (self.db) {
          // grab the movieData database add or put in the state inside the database and assign the key name of 'state'. ex: state: "value" 
          await self.db.put('movieData', state, 'state')
        }

        self.subscribers.forEach((subscriber) => subscriber(state));

        return true;
      }
    });
  }

  subscribe(cb) { 
    if (typeof cb !== 'function') {
      throw new Error('You must subscribe with a function');
    }

    this.subscribers.push(cb);

    cb(this.state);
  }

  set(key, value) { 
    this.state[key] = value;
  }

  get(key) {
    return this.state[key];
  }

  

  retrieveMovieInfo(data) { 
    const moveResult = data;
    this.set("image", moveResult.Poster);
    this.set("year", moveResult.Year);
    this.set("realeased", moveResult.Released);
    this.set("plot", moveResult.Plot);
    this.set("runtime", moveResult.Runtime);
    this.set("genre", moveResult.Genre);
    this.set("rating", moveResult.imdbRating)

  }

  groupMovie() {
    // this cause list to delete from the database on reload
    this.set('list', [])

     const moveInfo= { 
            "movie": this.get("image"),
            "genre": this.get("genre"),
            "plot": this.get("plot"),
            "rating": this.get("rating"),
            "released": this.get("realeased"),
            "runtime":this.get("runtime"),
            "total": this.get("total"),
            "year": this.get("year"),
            "comment": this.get("comment"),
          }  
          
    const listItem = this.get('list');
    listItem.push(moveInfo);
    this.set('list', listItem)
  }

  postComment(comm) {
    this.set('comment', comm)
  }

  
}

export const storeSetUp = new Store({ image: "https://static1.pointsinfocus.com/2009/08/31/popcorn-poster-shooting-the-image/20090830-0014.jpg", year: "-", realeased: "-", runtime: "-", plot: "-", genre: "-", rating: "-", list: [], comment: [] });