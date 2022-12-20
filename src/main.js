import {getDataPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(data); //todo el objeto
//console.log(data.pokemon[0]); //el pokemon con indice 0
//console.log(data.pokemon[0].name); //el nombre del pokemon con indice 0
//console.log(data.pokemon[0].generation.name); //el nombre de la generacion del pokemon con indice 0
//console.log(data.pokemon[0].evolution.candy); //el nombre del caramelo de la evolucion del pokemon con indice 0
//console.log(data.pokemon[0]['evolution']['next-evolution'][0].name); // el nombre de la evolucion del indice 0 del pokemon con indice 0
//console.log(data.pokemon[0].evolution['next-evolution'][0].name); // lo mismo que la linea anterior


/*import {
  filterByGeneration,
  filterByType,
  orderByName,
  filterByResistant,
  orderByNum,
} from "./data.js";*/



const buttonHome = document.getElementById("btnHome")
const buttonPokedex = document.getElementById("btnPokedex")
//const divCards = document.getElementById("list-cards");

buttonHome.addEventListener("click", function(){
    document.getElementById("scIntroduction").style.display = "block";
    document.getElementById("scPokedex").style.display = "none";
    document.getElementById("myModal").style.display = "none";
  });

  buttonPokedex.addEventListener("click", function(){
  document.getElementById("scPokedex").style.display = "block";
  //document.getElementById("scShowAllPokemon").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
  const allDataPokemon = getDataPokemon(data);
  document.getElementById("myModal").innerHTML= allDataPokemon;
  
  //document.getElementById("scShowAllPokemon").innerHTML= allDataPokemon;
  //console.log(data);
  // Get the modal

  const modal = document.getElementById("myModal");
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal



});

const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

const modal = document.getElementById("myModal");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*const containerScShowAllPokemon = (num,name,img) =>{
  const containerId = document.getElementById("lblIdPokemon");
  const containerName = document.getElementById("lblNamePokemon");
  const containerImg = document.getElementById("imgImagenPokemon");
 // console.log(containerName);
  containerId.innerText= num;
  containerId.innerText= name;

}*/








