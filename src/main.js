import { filterByType } from'./data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';



const dataPokemones=data.pokemon



function showListPokemons(pokemonlist) {
  const contenedor=document.getElementById("contenedor")
  console.log(contenedor);
  contenedor.innerHTML = ""
  pokemonlist.forEach ( (pokemon) => {
    contenedor.innerHTML += `<div class="tarjeta-pokemon"> 
    <h4>${pokemon.type}</h4> 
    <img class="imagenpokemon" src="${pokemon.img}">
    <p class="nombre pokemon">${pokemon.name}</p>
    </div>
    `
  } )
  
  }
  showListPokemons(dataPokemones)

  const selectUser=document.getElementById("filterByType");
//console.log("linea8",clickValidation);
selectUser.addEventListener("change", () => {
    const valueFilterByType=selectUser.value;  
  //console.log(valueFilterByType);
  //console.log(filterByType(dataPokemones,valueFilterByType));
  //showListPokemons(filterByType(dataPokemones,valueFilterByType));

}
)


 

 
 