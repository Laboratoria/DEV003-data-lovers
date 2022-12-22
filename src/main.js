<<<<<<< HEAD
// import { characters } from './data.js';
//import harrypotter from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
//import data from ';
//console.log(example, pokemon);

// console.log(data)

//const filtros=data.funFacts
//console.log(filtros)

const personajes=data.characters.filter(function(personaje){
    return personaje.species 
})

console.log(personajes)


var especies=personajes.map(function(especie){
    return especie.species
})

console.log(especies)

let especiesU = especies.filter((item,index)=>{
    return especies.indexOf(item) === index;
  })
  console.log(especiesU);

  console.log(especiesU.length)
=======
import { example } from "./data.js";

//document.querySelector("#root").innerHTML = example(89);
//document.querySelector("#root").innerHTML =
//  "<ol><li>Hola</li><li>Adios</li></ol>";
>>>>>>> cecbeb2685bc77063fd7a6722fd7fde99a2367d9
