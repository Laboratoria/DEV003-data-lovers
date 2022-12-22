import data from './data/pokemon/pokemon.js';

export const getDataPokemon = () => {
  const pokemonList = data['pokemon'];
  //alert("entro");
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || data === '') {
    throw new TypeError('data is not an object');
  }
  return pokemonList;
}

export const orderByOpcion = (valor) => {
const pokemonOrderBy = data['pokemon'];

  if (valor === "3") {
    pokemonOrderBy.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (valor === "4") {
    pokemonOrderBy.sort((a, b) => b.name.localeCompare(a.name));
  }
};

//comentario fer usar filterData(data, condition):   ,   sortData(data, sortBy, sortOrder):    ,   computeStats(data):
//arr.sort((a, b) => a - b);  // WILL SORT ASC 

//data.pokemon.sort((a, b) => a - .name);  // WILL SORT ASC 

//arr.sort((a, b) => b - a);  // WILL SORT DESC
//arr.sort()                  // WILL SORT STRINGS ASC 
