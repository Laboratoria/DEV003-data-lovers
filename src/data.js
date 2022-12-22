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
const pokemonSortBy = data['pokemon'];
//comentario  filterData(data, condition)
  if (valor === "3") {
    pokemonSortBy.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (valor === "4") {
    pokemonSortBy.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if (valor === "2"){
    pokemonSortBy.sort((a, b) => b.num.localeCompare(a.num));
  }
  else if (valor === "1"){
    pokemonSortBy.sort((a, b) => a.num.localeCompare(b.num));
  }
  return pokemonSortBy;
};


