import data from './data/pokemon/pokemon.js';

export const getDataPokemon = () => {
  const pokemonList = data['pokemon'];
  //alert("entro");
  

  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || data === '') {
    throw new TypeError('data is not an object');
  }

const pokeCard = document.getElementById("scShowAllPokemon");
 pokemonList.forEach((elem) => {
  //  console.log(elem); 
  pokeCard.innerHTML += `
 
 <div id="card">
      <label > Nombre: ${elem.name.toUpperCase()}</label>
      <label >  Numero: ${elem.num}</label>
      <img src="${elem.img}"></img>
</div>
    `;
});


 
    



 //document.body.innerHTML = markup;
  return showDataPokemon;
}


//comentario fer usar filterData(data, condition):   ,   sortData(data, sortBy, sortOrder):    ,   computeStats(data):
//arr.sort((a, b) => a - b);  // WILL SORT ASC 

//data.pokemon.sort((a, b) => a - .name);  // WILL SORT ASC 

//arr.sort((a, b) => b - a);  // WILL SORT DESC
//arr.sort()                  // WILL SORT STRINGS ASC 
