/*import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js'

const arrayPokemones = data.pokemon*/

export function filterByType(data, condition) {
  const pokemonesByType = []
  for (let i = 0; i <= data.length; i++) {
    if (data[i] && data[i].type.includes(condition)) {
      pokemonesByType.push(data[i])
    }
  }

  return pokemonesByType
}

/*export function filterByType(data, typeSelection) {
  for (let i = 0; i < arrayPokemones.length; i++) {
    const pokemonesByType = [''];
    if (data.type === typeSelection) {
      pokemonesByType += pokemonesByType;

    }
    console.log(pokemonesByType);
  }
}


export const anotherExample = () => {
  return 'OMG'
      const element = array[i];
}*/
