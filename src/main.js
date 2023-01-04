<<<<<<< HEAD
import data from './data/harrypotter/data.js';
=======
// import { characters } from './data.js';
//import harrypotter from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from "./data/harrypotter/data.js";
// import data from './data/rickandmorty/rickandmorty.js';
//import data from ';
//console.log(example, pokemon);
>>>>>>> ae71832b245ea68f7bbb29bf5e3dbd319535069d



<<<<<<< HEAD
var personajes= data.characters.map(function(personaje){
    return {

        hola: personaje.name,
        especial: personaje.species,
        genero: personaje.gender,
        casa: personaje.house

  
    }
})
=======
const personajes = data.characters.filter(function (personaje) {
  return personaje.species;
});
>>>>>>> ae71832b245ea68f7bbb29bf5e3dbd319535069d

console.log(personajes);

var especies = personajes.map(function (especie) {
  return especie.species;
});

<<<<<<< HEAD

var nombres= data.characters.find(function(nombre){
    return nombre.name === "Hermione Granger"
})

console.log(nombres)

// let especiesU = especies.filter((item,index)=>{
//     return especies.indexOf(item) === index;
//   })
//   console.log(especiesU);

//   console.log(especiesU.length)
=======
console.log(especies);

let especiesU = especies.filter((item, index) => {
  return especies.indexOf(item) === index;
});
console.log(especiesU);

console.log(especiesU.length);
>>>>>>> ae71832b245ea68f7bbb29bf5e3dbd319535069d
