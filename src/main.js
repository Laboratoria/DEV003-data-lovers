import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const pasarPokemon = document.querySelector("#btnPokemones")
const sectionPage1 = document.querySelector("#page1");
const sectionPage2 = document.querySelector("#page2");

pasarPokemon.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "block";
})