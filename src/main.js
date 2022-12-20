//import { example } from './data.js';
import { getName } from './data.js';

import data from './data/pokemon/pokemon.js';
//console.log(example, data);
//console.log(data);
//console.log(data.pokemon);
//console.log(data.pokemon[0].generation.name);
console.log(data.name);

const buttonHome = document.getElementById("btnHome")
const buttonPokedex = document.getElementById("btnPokedex")

buttonHome.addEventListener("click", function(){
    document.getElementById("scIntroduction").style.display = "block";
    document.getElementById("scPokedex").style.display = "none";
  });

  buttonPokedex.addEventListener("click", function(){
  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
});

