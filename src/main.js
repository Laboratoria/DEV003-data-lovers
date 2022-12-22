import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

const btnPokemon = document.querySelector("#btnPokemones")
const sectionPage1 = document.querySelector("#page1");
const sectionPage2 = document.querySelector("#page2");
const sectionPage3 = document.querySelector("#page3");
const sectionPage4 = document.querySelector("#page4");

btnPokemon.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "block";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "none";

});

// se trae la data y se especifica el elemento
const dataPokemons = data.pokemon;

//se declara una constante de la seccion de la pagina donde se visualizara el catalogo o biblioteca de pokemons
const catalogo =document.getElementById("page2");

// Se toma la constante de la data y la recorremos con el metodo .foreach que tiene la funcion de callback y el parametro es la data (archivo pokemon.js)
dataPokemons.forEach(function(data){ 
// se crea un cuerpo html a la seccion declarada como catalogo y se traen los datos ya declarados con template strings
  catalogo.innerHTML += `
  <div class="TarjetasPokemon">
    <div class="tarjetas">
    <div class="cuerpoTarjetas">
    <h3 class="nombrePokemon"> ${data.name}</h3>
    <img src="${data.img}"/>
    <p class="about"> ${data.about}</p>
    <p class=""></p>
  </div>
  </div>
  </div>
  `;
});



