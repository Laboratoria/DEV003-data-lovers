import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

import { showAllCharacters, searchButton } from './data.js';

console.log(example, data);
showAllCharacters()
document.getElementById("searchBtn").onclick=searchButton; //Ejecuta mi función al escuchar click



//const characters=data.results;
// const filter=characters.filter((character) => {
    
//     return character.id===200
// })

// console.log(filter);
