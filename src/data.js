import data from './data/pokemon/pokemon.js'; // importamos la data de la carpeta
// hacker edition
/*
let data = [];
//async function getData () {
const getPokemonData = await fetch("../src/data/pokemon/pokemon.json");
const pokemonData = await getPokemonData.json();
//data. pokemonData.pokemon;
data = pokemonData;
//}getData();
*/
//const allDataPokemon=data.pokemon;
//por que no carga el llamar imagen aleatoria en el window load con el json

const allDataPokemon = data['pokemon'];

export const getDataPokemon = () => { // exportamos funcion array con toda la data
  //const pokemonList = data['pokemon'];
  const pokemonList =allDataPokemon;   //
 
  if (data === undefined || typeof data !== 'object'  || data === null || data.length === 0 || data === '') {
    throw new TypeError('data is not an object');
  }
  return pokemonList;
}


export let orderByOption = (valor) => { //exportamos funcion de ordenar por opcion
  //let pokemonSortBy = data['pokemon'];
  let pokemonSortBy =allDataPokemon; // data['pokemon'];
 
  let range='';
  if (valor === "1") {
    pokemonSortBy.sort((a, b) => a.num.localeCompare(b.num)); //ordena ascendente
  } else if (valor === "2") {
    pokemonSortBy.sort((a, b) => b.num.localeCompare(a.num)); //ordena descendente
  } else if (valor === "3") {
    pokemonSortBy.sort((a, b) => a.name.localeCompare(b.name)); //ordena A-Z
  } else if (valor === "4") {
    pokemonSortBy.sort((a, b) => b.name.localeCompare(a.name)); // ordena Z-A
  }else if (valor === "5") {  //top10
    pokemonSortBy.sort((a, b) => b.encounter["base-capture-rate"].localeCompare(a.encounter["base-capture-rate"])); 
    range = pokemonSortBy.filter(pasarDataP => pasarDataP.encounter["base-capture-rate"]!=='not in capture');
    pokemonSortBy = range.slice(0,10); 
     
}
 // console.log(pokemonSortBy);
  return pokemonSortBy;
  
};

export const evolutions = (filterBy, condition ) => {
  // filtra los datos por el name que llega del listbox
  // valida si existe prev evolutino o next evolution
  //y retona ese array
  const pokemonArray = allDataPokemon;   // data['pokemon'];
  let result = [];
  let resultPrev = [];
  let resultPrev2 = [];
  let resultNext =[];
  let resultNext2 =[];
  let resultEvolutions =[];

  if(filterBy === 'name'){
    //console.log(data.pokemon[13]['evolution']['next-evolution'][0].name); 
    result = pokemonArray.filter(pokemon => pokemon.name.includes(condition));
    // console.log(result[0]['evolution']['prev-evolution'][0]['prev-evolution'][0].num)
    //console.log(result);
    if (!result[0]){ 
      return resultEvolutions='';
    }
    
      if (result[0]['evolution']['prev-evolution']){
        if (result[0]['evolution']['prev-evolution'][0]['prev-evolution']){
          const pre = result[0]['evolution']['prev-evolution'][0].num;
          resultPrev = pokemonArray.filter(pokemon => pokemon.num.includes(pre));
          const pre2 = result[0]['evolution']['prev-evolution'][0]['prev-evolution'][0].num;
          resultPrev2 = pokemonArray.filter(pokemon => pokemon.num.includes(pre2));     
        }else{
          const pre = result[0]['evolution']['prev-evolution'][0].num;
          resultPrev = pokemonArray.filter(pokemon => pokemon.num.includes(pre)); 
        }
      }

      if (result[0]['evolution']['next-evolution']){
        if (result[0]['evolution']['next-evolution'][0]['next-evolution']){
          const next = result[0]['evolution']['next-evolution'][0].num;
          resultNext = pokemonArray.filter(pokemon => pokemon.num.includes(next));
          const next2 = result[0]['evolution']['next-evolution'][0]['next-evolution'][0].num;
          resultNext2 = pokemonArray.filter(pokemon => pokemon.num.includes(next2));
        }else{
          const next = result[0]['evolution']['next-evolution'][0].num;
          resultNext =  pokemonArray.filter(pokemon => pokemon.num.includes(next));
        }
      }

      // console.log(resultPrev);

      resultEvolutions =[].concat(resultPrev2,resultPrev, result,resultNext, resultNext2); 
    }
  
  return resultEvolutions;
};


//funcion de filtrar data  filterData(dato a comparar, condition)
//1 traer el valor de la lista de tipos
//2 recorrer la data completa
//3 comparar que items de la data cumplen con el select de la lista
//4 crear array para devolver las cards
export const filterData = (filterBy, condition ) => {
  const pokemonArray = allDataPokemon  // data['pokemon'];
  let result = [];
  if(filterBy === 'type'){
    result = pokemonArray.filter(pokemon => pokemon.type.includes(condition));
  }else if(filterBy === 'kanto') {
    result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
  }else if(filterBy === 'johto') {
    result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
  }else if(filterBy === 'name') {
    result = pokemonArray.filter(pokemon => pokemon.name.includes(condition));
  }/*if(filterBy === 'id') {
    result = pokemonArray.filter(pokemon => pokemon.generation.name.includes(condition));
  }else*/ if(filterBy === 'num') {
    result = pokemonArray.filter(pokemon => pokemon.num.includes(condition));
  }else if(filterBy === 'weaknesses') {
    result = pokemonArray.filter(pokemon => pokemon.weaknesses.includes(condition));
  }
  //console.log(result);
  return result;
};

    



