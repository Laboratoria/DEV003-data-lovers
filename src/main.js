import data from './data/pokemon/pokemon.js';
import {ordenarAlfabeto} from './data.js'
import {filtroData} from './data.js'



const btnPokemon = document.querySelector("#btnPokemones")
const inicioNav =document.getElementById("inicioNav");
const pokemonNav =document.getElementById("pokemonsNav");
const filtroNav =document.getElementById("filtroNav");
const multiplicadorNav =document.getElementById("multiplicadorNav");

const sectionPage1 = document.querySelector("#page1");
const sectionPage2 = document.querySelector("#page2");
const sectionPage3 = document.querySelector("#page3");
const sectionPage4 = document.querySelector("#page4");

// funciones agregadas a los botones para navegar por el menu
btnPokemon.addEventListener("click", pokemonInf);
pokemonNav.addEventListener("click", pokemonInf);
function pokemonInf(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "block";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "none";
}
inicioNav.addEventListener("click", function(){
  sectionPage1.style.display= "block";
  sectionPage2.style.display= "none";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "none";
});
filtroNav.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "none";
  sectionPage3.style.display= "block";
  sectionPage4.style.display= "none";
});
multiplicadorNav.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "none";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "block";
});

// se trae la data y se especifica el elemento
const dataPokemons = data.pokemon;

//se declara una constante de la seccion de la pagina donde se visualizara el catalogo o biblioteca de pokemons
const catalogo =document.getElementById("page2");

// Se toma la constante de la data y la recorremos con el metodo .foreach que tiene la funcion de callback y el parametro es la data (archivo pokemon.js)
function mostrarData (data){ 
  // se crea un cuerpo html a la seccion declarada como catalogo y se traen los datos ya declarados con template strings

  catalogo.innerHTML += `
    <div class="TarjetasPokemon">
      <div class="tarjetas">
      <div class="cuerpoTarjetas">
      <img src="${data.img}"/>
      <h3 class="idPokemon">${data.num}</h3><h3 class="nombrePokemon">${data.name.toUpperCase()}</h3>
      <h4 class="peso">Peso: ${data.size.weight}</h4>
      <h4 class="altura">Altura: ${data.size.height}</h4>
      <h4 class="tipo">Tipo: ${data.type}</h4>
      <p class="about"> ${data.about}</p>
      <p class=""></p>
    </div>
    </div>
    </div>
    `;
}
dataPokemons.forEach(mostrarData);


// funcion ordenar
const selectorOrganizarAlfabeticamente = document.getElementById("ordenarAlfabeto");

selectorOrganizarAlfabeticamente.addEventListener("change",function(){
  const opcionSeleccionada = this.options[selectorOrganizarAlfabeticamente.selectedIndex];

  console.log(ordenarAlfabeto(dataPokemons, opcionSeleccionada.value))

});



// funcion filtrar
const SelectorElementoTipo = document.getElementById("filtroTipo");

SelectorElementoTipo.addEventListener("change", function(){
  const opcionSeleccionada = this.options[SelectorElementoTipo.selectedIndex];

  console.log(filtroData(dataPokemons, opcionSeleccionada.value))
  
});






//const catalogo3 =document.getElementById("page3");

//const mostrarPokemon2 = function (data){ 
// se crea un cuerpo html a la seccion declarada como catalogo y se traen los datos ya declarados con template strings
   
// catalogo3.innerHTML += `
//   <div class="TarjetasPokemon">
//   <div class="tarjetas">
// <div class="cuerpoTarjetas">
//<img src="${data.img}"/>
//<h3 class="idPokemon">${data.num}</h3><h3 class="nombrePokemon">${data.name.toUpperCase()}</h3>
// <h4 class="peso">Peso: ${data.size.weight}</h4>
//<h4 class="altura">Altura: ${data.size.height}</h4>
//<h4 class="tipo">Tipo: ${data.type}</h4>
//<p class="about"> ${data.about}</p>
//<p class=""></p>
//</div>
//</div>
//</div>
//`;
//};

//elementoTipo.addEventListener("change", function(){
// if(elementoTipo.value === "selecciona"){
//   mostrarPokemon2(dataPokemons);
// }
// else {
//   mostrarPokemon2(filtroData(dataPokemons,elementoTipo.value));
// }
//});



