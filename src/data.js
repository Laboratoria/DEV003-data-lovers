import data from './data/pokemon/pokemon.js'; // importamos la data de la carpeta

export const getDataPokemon = () => { // exportamos funcion array con toda la data
  const pokemonList = data['pokemon'];
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || data === '') {
    throw new TypeError('data is not an object');
  }
  return pokemonList;
};

export const orderByOption = (valor) => { //exportamos funcion de ordenar por opcion
  let pokemonSortBy = data['pokemon'];
 
  let range='';
  if (valor === "1") {
    pokemonSortBy.sort((a, b) => a.num.localeCompare(b.num)); //ordena ascendente
  } else if (valor === "2") {
    pokemonSortBy.sort((a, b) => b.num.localeCompare(a.num)); //ordena descendente
  } else if (valor === "3") {
    pokemonSortBy.sort((a, b) => a.name.localeCompare(b.name)); //ordena A-Z
  } else if (valor === "4") {
    pokemonSortBy.sort((a, b) => b.name.localeCompare(a.name)); // ordena Z-A
  }else if (valor === "5") {  
    pokemonSortBy.sort((a, b) => b.encounter["base-capture-rate"].localeCompare(a.encounter["base-capture-rate"])); 
    range = pokemonSortBy.filter(pasarDataP => pasarDataP.encounter["base-capture-rate"]!=='not in capture');
  

  pokemonSortBy = range.slice(0,10);
    
     
}
 // console.log(pokemonSortBy);
  return pokemonSortBy;
  
};

export const evolutions = (filterBy, condition ) => {
  // filtra lso datos por el name que llega del listbox
  // valida si existe prev evolutino o next evolution
  //y retona ese array
  const pokemonArray = data['pokemon'];
  console.log(pokemonArray);
  console.log(filterBy);
  let result = [];
  let numEvolution='';
  if(filterBy === 'name'){
    result = pokemonArray.filter(pokemon => pokemon.name.includes(condition));
        if (pokemonArray.evolution['prev-evolution'].num!=='' || pokemonArray.evolution['prev-evolution'].num!==null || pokemonArray.evolution['prev-evolution'].num!=='undefined'){
          numEvolution = pokemonArray.evolution['prev-evolution'].num;
          result = pokemonArray.filter(pokemon => pokemon.num.includes(numEvolution));
        }else if (pokemonArray.evolution['next-evolution']!=='' || pokemonArray.evolution['next-evolution'].num!==null || pokemonArray.evolution['next-evolution'].num!=='undefined'){
          numEvolution = pokemonArray.evolution['next-evolution'].num;
          result = pokemonArray.filter(pokemon => pokemon.num.includes(numEvolution));
        }else{
          numEvolution = pokemonArray.num;
          result = pokemonArray.filter(pokemon => pokemon.num.includes(numEvolution));
        }
}
    // console.log(result);
     return result;
};


//funcion de filtrar data  filterData(dato a comparar, condition)
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
      }else if(filterBy === 'name') {
        result = pokemonArray.filter(pokemon => pokemon.name.includes(condition));
      }if(filterBy === 'id') {
        result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
      }else if(filterBy === 'num') {
        result = pokemonArray.filter(pokemon => pokemon.num.includes(condition));
      }
     //console.log(result);
      return result;
    };

    



