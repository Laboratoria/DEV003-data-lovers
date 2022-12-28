import data from './data/pokemon/pokemon.js'; // importamos la data de la carpeta

export const getDataPokemon = () => { // exportamos funcion array 
  const pokemonList = data['pokemon'];
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || data === '') {
    throw new TypeError('data is not an object');
  }
  return pokemonList;
}

export const orderByOption = (valor) => { //exportamos funcion de ordenar por opcion
  const pokemonSortBy = data['pokemon'];
  if (valor === "1") {
    pokemonSortBy.sort((a, b) => a.num.localeCompare(b.num));
  }else if (valor === "2") {
    pokemonSortBy.sort((a, b) => b.num.localeCompare(a.num));
  }else if (valor === "3") {
    pokemonSortBy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (valor === "4") {
    pokemonSortBy.sort((a, b) => b.name.localeCompare(a.name));
  } 
  return pokemonSortBy;
};

//funcion de filtrar data  filterData(data, condition)
  //1 traer el valor de la lista de tipos
    //2 recorrer la data completa
    //3 comparar que items de la data cumplen con el select de la lista
    //4 crear array para devolver las cards
export const filterData = (filterBy, condition ) => {
  const pokemonArray = data['pokemon'];
  let result = [];
  if(filterBy === 'type'){
    result = pokemonArray.filter(pokemon => pokemon.type.includes(condition));
  }else if(filterBy === 'kanto') {
    result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
  }else if(filterBy === 'johto') {
    result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
  }if(filterBy === 'id') {
    result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
  }
 // console.log(result)
  return result;
};


