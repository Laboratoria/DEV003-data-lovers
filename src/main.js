import { getBooks } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/harrypotter/data.js";

//console.log(example, data);
const books = getBooks(data)
console.log(data);
console.log(books);
