//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//Aquí se manipula el DOM y se le agregan eventos
import data from './data/rickandmorty/rickandmorty.js';

import { showAllCharacters, searchButton, filterData } from './data.js';

//console.log(example, data);
showAllCharacters()
document.getElementById("searchBtn").onclick=searchButton; //Ejecuta mi función al escuchar click




