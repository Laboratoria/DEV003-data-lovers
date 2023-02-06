import { filterByType } from './data.js'
import pokemon from './data/pokemon/pokemon.js'
import data from './data/pokemon/pokemon.js'

function showListPokemons(pokemonlist) {
  const contenedor = document.getElementById('contenedor')
  contenedor.innerHTML = ''
  pokemonlist.forEach((pokemon) => {
    contenedor.innerHTML += `<div class="monos"> ${pokemon.type}</div>`
  })

  //console.log(filterByType);
  import { filterByType } from './data.js'
  // import data from './data/lol/lol.js';
  import data from './data/pokemon/pokemon.js'
  // import data from './data/rickandmorty/rickandmorty.js';

  const selectype = document.getElementById('filterByType')
  //console.log("linea8",clickValidation);
  selectype.addEventListener('change', () => {
    const valueFilterByType = document.getElementById('filterByType').value
    //console.log(valueFilterByType);
    console.log(filterByType(Pokemones, valueFilterByType))
  })
}
showListPokemons(data.pokemon)
console.log(filterByType, data)
