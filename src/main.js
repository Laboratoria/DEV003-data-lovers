import { dataOrderAZ, filterByType, dataOrderZA  } from './data.js'
import data from './data/pokemon/pokemon.js'


const dataPokemones = data.pokemon
const selectUser = document.getElementById('filterByType')

selectUser.addEventListener('change', () => {
  const valueFilterByType = selectUser.value

  showListPokemonType(filterByType(dataPokemones, valueFilterByType))
})
function showListPokemonType(pokemonlist) {
  const contenedor = document.getElementById('contenedor')
  contenedor.innerHTML = ''
  pokemonlist.forEach((pokemon) => {
    contenedor.innerHTML += `<div class="tarjeta-pokemon"> 
    <h4>${pokemon.type}</h4> 
    <img class="imagenpokemon" src="${pokemon.img}">
    <p class="nombre pokemon">${pokemon.name}</p>
    </div>
    `
  })
}
//HISTORIA DE USUARIO 2

const selectUser2 = document.getElementById('ordenarPorNombre')
selectUser2.addEventListener('change', () => {
  const valueOrdenar = selectUser2.value
  if (valueOrdenar === 'ascendente') {
    showListPokemonOrder(dataOrderAZ(dataPokemones, valueOrdenar))
  } else {
    showListPokemonOrder(dataOrderZA(dataPokemones, valueOrdenar))
  }
})
function showListPokemonOrder(pokemonlist) {
  const contenedor = document.getElementById('contenedor')
  contenedor.innerHTML = ''
  pokemonlist.forEach((pokemon) => {
    contenedor.innerHTML += `<div class="tarjeta-pokemon"> 
        
        <img class="imagenpokemon" src="${pokemon.img}">
        <p class="nombre pokemon">${pokemon.name}</p>
        </div>`
  })
}

showListPokemonOrder(data.pokemon)

