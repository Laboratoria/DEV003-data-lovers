import data from './data/harrypotter/data.js';



var personajes= data.characters.map(function(personaje){
    return {

        hola: personaje.name,
        especial: personaje.species,
        genero: personaje.gender,
        casa: personaje.house

  
    }
})

console.log(personajes);

var especies = personajes.map(function (especie) {
  return especie.species;
});


var nombres= data.characters.find(function(nombre){
    return nombre.name === "Hermione Granger"
})

console.log(nombres)

// let especiesU = especies.filter((item,index)=>{
//     return especies.indexOf(item) === index;
//   })
//   console.log(especiesU);

//   console.log(especiesU.length)
