// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

export const getDataPokemon=(data)=>{

if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || data ===''){ 
  throw new TypeError('data is not an object');
}

//Variable que guarda la data Pokémon
const pokemonList = data.pokemon;
const allDataPokemon = (pokemonList) => {
const pokeCard = document.getElementById("myModal");
//ForEach recorre cada elemento del array.
// Función para mostrar todos los pokémon, se utiliza innerHTML para mostrar la información en pantalla.
pokemonList.forEach((elem) => {
 
     //  console.log(elem); <img class="picture" src="${elem.img}"></img>
     pokeCard.innerHTML+= `
    
     <div>
     <div id="card">
       <div id="front" > 
          <div > ${elem.name.toUpperCase()}</div>
          <div >#${elem.num}</div>
          
       </div>
 `;

  
});
};
  
return allDataPokemon;

    
}


//comentario fer usar filterData(data, condition):   ,   sortData(data, sortBy, sortOrder):    ,   computeStats(data):
//arr.sort((a, b) => a - b);  // WILL SORT ASC 

//data.pokemon.sort((a, b) => a - .name);  // WILL SORT ASC 

//arr.sort((a, b) => b - a);  // WILL SORT DESC
//arr.sort()                  // WILL SORT STRINGS ASC 
