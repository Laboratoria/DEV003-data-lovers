//import  {pokemon}  from "./data.js";

import data from './data/pokemon/pokemon.js';

//console.log(example, data);
//const paginaPrincipal = document.getElementById("scIntroduction");
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


