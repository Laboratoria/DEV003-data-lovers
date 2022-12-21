import {getDataPokemon, orderByName} from './data.js';
/*import {
  filterByGeneration,
  filterByType,
  orderByName,
  filterByResistant,
  orderByNum,
} from "./data.js";*/

const optionOrder = document.getElementsByName("rdOptionShow",function(){
  if (optionOrder.checked){
    const showAscennding = orderByName();
  }
});

//console.log();
const showPokemons = (pokemonList) => {
  const allPokemons = showData(pokemonList);
  printData(allPokemons);
};

const buttonHome = document.getElementById("btnHome");
const buttonPokedex = document.getElementById("btnPokedex");
//const divCards = document.getElementById("list-cards");

buttonHome.addEventListener("click", function(){
    document.getElementById("scIntroduction").style.display = "block";
    document.getElementById("scPokedex").style.display = "none";
    document.getElementById("scShowAllPokemon").style.display = "none";
    //document.getElementById("myModal").style.display = "none";
  });

  buttonPokedex.addEventListener("click", function(){
  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scShowAllPokemon").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
  const allDataPokemon = getDataPokemon();
  //document.getElementById("myModal").innerHTML= allDataPokemon;
  
  document.getElementById("scShowAllPokemon").innerHTML= allDataPokemon;
  //console.log(data);
  // Get the modal

  const modal = document.getElementById("myModal");
  modal.style.display = "block";

});

// When the user clicks on <span> (x), close the modal
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

//TODO: hacer funcion que, dado un arreglo de objetos (pokemones) devuelva un arreglo de 'tarjetas'

window.addEventListener('load', ()=>{

  //hacer el llenado inicial de las tarjetas
  getCards(getDataPokemon()).forEach((item)=>{
    //TODO limpiar el contenedor
    // appendChild de cada item al contenedor
  })

})


/*const containerScShowAllPokemon = (num,name,img) =>{
  const containerId = document.getElementById("lblIdPokemon");
  const containerName = document.getElementById("lblNamePokemon");
  const containerImg = document.getElementById("imgImagenPokemon");
 // console.log(containerName);
  containerId.innerText= num;
  containerId.innerText= name;

}*/








