import { pokemon } from './data.js';
// import data from './data/lol/lol.js'; No estamos usando esta data
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js'; No estamos usando esta data
console.log(example, data);
const paginaPrincipal = document.getElementById("introduction");
const buttonHome = document.getElementById("btnHome")

buttonHome.addEventListener("click", function(){
    document.getElementById("introduction").style.display = "block";
  });
