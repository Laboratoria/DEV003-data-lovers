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
 
 
 
 <div class="card">
 <div class="card_body">
 
      <h3 class="card_title"> ${elem.num}</h3>
      <img src="${elem.img}"></img><br>
      <label > ${elem.name.toUpperCase()}</label> 
    
</div>      
</div>   
<br>   

    `;
});


 //document.body.innerHTML = markup;
  return allDataPokemon;
}


//comentario fer usar filterData(data, condition):   ,   sortData(data, sortBy, sortOrder):    ,   computeStats(data):
//arr.sort((a, b) => a - b);  // WILL SORT ASC 

//data.pokemon.sort((a, b) => a - .name);  // WILL SORT ASC 

//arr.sort((a, b) => b - a);  // WILL SORT DESC
//arr.sort()                  // WILL SORT STRINGS ASC 
