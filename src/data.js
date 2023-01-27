import data from './data/pokemon/pokemon.js'

export function filterByType(data, condition) {
  const pokemonesByType = []
  for (let i = 0; i <= data.length; i++) {
    if (data[i] && data[i].type.includes(condition)) {
      pokemonesByType.push(data[i])
    }
  }
  return pokemonesByType
}
const listadopokemon = data.pokemon

export function dataOrder(data, ascendente) {
  return listadopokemon.sort((p1, p2) => {
    if (p1.name < p2.name) {
      return -1
    } else if (p1.name > p2.name) {
      return 1
    } else {
      return 0
    }
  })
}
console.log(listadopokemon)

// Descendente
const listadopokemon2 = data.pokemon
export function dataOrder2(data, descendente) {
  return listadopokemon2.sort((p1, p2) => {
    if (p1.name > p2.name) {
      return -1
    } else if (p1.name < p2.name) {
      return 1
    } else {
      return 0
    }
  })
}
console.log(listadopokemon2)
