/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import { openDB } from 'idb';

//  movieData is the name of the document
export const database = openDB('movieResult', 1, {
  upgrade(db) {
    // object store is the name of each sheets. Ex: excel doc has several sheets
    db.createObjectStore('movieData');
    
  }
});