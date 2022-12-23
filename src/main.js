import {getDataPokemon, orderByOption, filterData} from './data.js';

const buttonHome = document.getElementById("btnHome");
const buttonPokedex = document.getElementById("btnPokedex");


buttonHome.addEventListener("click", function(){
    document.getElementById("scIntroduction").style.display = "block";
    document.getElementById("scPokedex").style.display = "none";
    document.getElementById("scShowAllPokemon").style.display = "none";
    document.getElementById("scSpawRate").style.display = "none";
    document.getElementById("scEvolution").style.display = "none";
    document.getElementById("scSearch").style.display = "none";
    //document.getElementById("myModal").style.display = "none";
  });

  buttonPokedex.addEventListener("click", function(){

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";

  const getCards = getDataPokemon();
  

 getCards.forEach((item)=>{

const cardBox=document.querySelector(".scCards");

const newCard = document.createElement("div");
newCard.className= "card";

const newCardBody=document.createElement("div");
newCardBody.className= "card_body";

const newH3= document.createElement("h3");
newH3.className= "card_title";
newH3.innerText= item.num;

const newImg=document.createElement("img");
newImg.src=item.img;

const nextEspace=document.createElement("br");


const newLabel=document.createElement("label");
newLabel.innerText=item.name.toUpperCase();
newLabel.className="card_title";

cardBox.appendChild(newCard);
newCard.appendChild(newCardBody);
newCardBody.appendChild(newH3);
newCardBody.appendChild(newImg);
newCardBody.appendChild(nextEspace);
newCardBody.appendChild(newLabel);

})
  //console.log(data);
  // Get the modal
/*
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
*/
})

 
const optionOrder = document.querySelectorAll('input[type=radio][name="rdOptionShow"]');

optionOrder.forEach(optionOrder => optionOrder.addEventListener('change', () => {

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById('scShowAllPokemon').innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";

  const getCardsOrderBy = orderByOption(optionOrder.value);
        
  getCardsOrderBy.forEach((item)=>{

    const cardBox=document.querySelector(".scCards");
    
    const newCard = document.createElement("div");
    newCard.className= "card";
    
    const newCardBody=document.createElement("div");
    newCardBody.className= "card_body";
    
    const newH3= document.createElement("h3");
    newH3.className= "card_title";
    newH3.innerText= item.num;
    
    const newImg=document.createElement("img");
    newImg.src=item.img;
    
    const nextEspace=document.createElement("br");
    
    
    const newLabel=document.createElement("label");
    newLabel.innerText=item.name.toUpperCase();
    newLabel.className="card_title";
    
    cardBox.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newH3);
    newCardBody.appendChild(newImg);
    newCardBody.appendChild(nextEspace);
    newCardBody.appendChild(newLabel);
    
    });
}
))

//funciones dentro de la pagina de Search
buttonSearch.addEventListener("click", function(){
  document.getElementById("scSearch").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("filterContainer").innerHTML='';
  //document.getElementById("myModal").style.display = "none";
  //cardBox.appendChild(searchBox);

  const newDataP = getDataPokemon();
//Array que contiene los  tipos de Pokemon
const newArray = newDataP.map(function(newData){
 return newData.type
})
//array donde guardamos solo los tipos de pokemon
   const item = [];
   for (let i=0 ; i< newArray.length ; i++){
    item.push(newArray[i])
   }
//convertimos a string para poder filtrar la data   
const str=item.toString();

// convertimos a array nuevamente y dividimos por comas para poder comparar
const strArray= str.split(',');
//console.log(strArray);

//recorremos nuestro array para eliminar los repetidos
const unicos = [];
for(var i = 0; i < strArray.length; i++) {
  const elemento = strArray[i];
 //obtenemos nuestros elementos a filtrar sin repeticiones
  if (!unicos.includes(strArray[i])) {
    unicos.push(elemento);
  }
}
//console.log(unicos);
  
//Crea el listbox y agrega los datos del array
   const select = document.createElement("select");
   select.name = "pokemontypes";

 // los organizamos por orden alfabetico  
 const sortUnicos= unicos.sort();
// creamos la lista con las opciones de filtrado
 const labelTitle=document.createElement("label");
 labelTitle.textContent="Type of Pokemon";
 document.getElementById("filterContainer").appendChild(labelTitle);
 document.getElementById("filterContainer").appendChild(select);
 sortUnicos.forEach((val)=>{

  //const searchContainer=document.querySelector(".scSearch");
  const searchListBox=document.createElement("option");
  // pone en mayuscula la primer letra
  searchListBox.text=val.charAt(0).toUpperCase() + val.slice(1);
  // regresamos a minusculas para poder comparar posteriormente
  searchListBox.value=val.toLowerCase();
  searchListBox.id = "listOptions";
  searchListBox.name = "listOptions";
  select.appendChild(searchListBox);
    });

// Traer funcion para mostrar la data
select.addEventListener('change', (e) => {

document.getElementById("scShowAllPokemon").style.display = "flex";

  const pokemonTypeList = document.getElementById('listOptions');
  const typeSelected = pokemonTypeList.select[pokemonTypeList.selectedIndex].value;
  const filterDataBy = filterPokemons('type',typeSelected);
});

 const filterPokemons = (filterBy, condition) => {
  const allPokemons = filterData(filterBy, condition);
  console.log("entro");
  // printData(allPokemons);
}



//const result = document.querySelector('.scCards');

//const filterDataBy = filterData(select.value);

//Array que contiene los  tipos de Pokemon
/*
filterDataBy.forEach((item)=>{

  const cardBox=document.querySelector(".scCards");
  
  const newCard = document.createElement("div");
  newCard.className= "card";
  
  const newCardBody=document.createElement("div");
  newCardBody.className= "card_body";
  
  const newH3= document.createElement("h3");
  newH3.className= "card_title";
  newH3.innerText= item.num;
  
  const newImg=document.createElement("img");
  newImg.src=item.img;
  
  const nextEspace=document.createElement("br");
  
  
  const newLabel=document.createElement("label");
  newLabel.innerText=item.name.toUpperCase();
  newLabel.className="card_title";
  
  cardBox.appendChild(newCard);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newH3);
  newCardBody.appendChild(newImg);
  newCardBody.appendChild(nextEspace);
  newCardBody.appendChild(newLabel);
  
  });*/
})



//})//Fin boton Pokedek




//funciones dentro de la pagina de Evolutions

buttonEvolution.addEventListener("click", function(){
  document.getElementById("scEvolution").style.display = "block";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("filterContainer").innerHTML='';
})


//funciones dentro de la pagina de SpawRate

buttonSpawRate.addEventListener("click", function(){
  document.getElementById("scSpawRate").style.display = "block";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("filterContainer").innerHTML='';
})


 /*
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
}*/


  //document.getElementById("myModal").innerHTML= allDataPokemon;
  
 // document.getElementById("scShowAllPokemon").innerHTML= allDataPokemon;
//TODO: hacer funcion que, dado un arreglo de objetos (pokemones) devuelva un arreglo de 'tarjetas'

//window.addEventListener('load', ()=>{

  //hacer el llenado inicial de las tarjetas
  
    //TODO limpiar el contenedor
    // appendChild de cada item al contenedor


/*const containerScShowAllPokemon = (num,name,img) =>{
  const containerId = document.getElementById("lblIdPokemon");
  const containerName = document.getElementById("lblNamePokemon");
  const containerImg = document.getElementById("imgImagenPokemon");
 // console.log(containerName);
  containerId.innerText= num;
  containerId.innerText= name;
}*/
