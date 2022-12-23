import {getDataPokemon, orderByOpcion, filterData} from './data.js';

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

  const getCardsOrderBy = orderByOpcion(optionOrder.value);
        
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
//Array qu contiene los  tipos de Pokemon
const newArray = newDataP.map(function(newData){
 return newData.type
})

   const item = [];
   for (let i=0 ; i< newArray.length ; i++){
    item.push(newArray[i])
   }
const str=item.toString();
//console.log(str);

const strArray= str.split(',');
//console.log(strArray);

const unicos = [];
for(var i = 0; i < strArray.length; i++) {
  const elemento = strArray[i];
 
  if (!unicos.includes(strArray[i])) {
    unicos.push(elemento);
  }
}

//console.log(unicos);
  
//Crea el listbox y agrega los datos del array
   const select = document.createElement("select");
   select.name = "pokemontypes";
   
/*
   const result = unicos.reduce((acc,item2)=>{
   if(!acc.includes(item2)){
     acc.push(item2);
   }
   return acc;
 },[])
 */
 //console.log(result);
 const sortUnicos= unicos.sort();

 const labelTitle=document.createElement("label");
 labelTitle.textContent="Type of Pokemon";
 document.getElementById("filterContainer").appendChild(labelTitle);
 document.getElementById("filterContainer").appendChild(select);
 sortUnicos.forEach((val)=>{

  const searchContainer=document.querySelector(".scSearch");

  const searchListBox=document.createElement("option");
  searchListBox.text=val.charAt(0).toUpperCase() + val.slice(1);
  searchListBox.value=val.toLowerCase;
//str.charAt(0).toUpperCase() + str.slice(1);
  

  select.appendChild(searchListBox);
  
    
    });

   
})//Fin boton Pokedek


//generateOptions.addEventListener("click", function(){
  
//alert("hola");
const optionFilter = document.querySelector('input[type=select][name="pokemontypes"]');


optionFilter.forEach(optionFilter => optionFilter.addEventListener('change', () => {
document.getElementById("scShowAllPokemon").style.display = "flex";

const resultado = document.querySelector('.scCards');
resultado.textContent = `Te gusta el sabor ${event.target.value}`;

console.log(optionFilter.value);
const filterDataBy = filterData(optionFilter.value);

//Array qu contiene los  tipos de Pokemon
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
  
  });
}))


//funciones dentro de la pagina de Evolutions
buttonEvolution.addEventListener("click", function(){
  document.getElementById("scEvolution").style.display = "block";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
})


//funciones dentro de la pagina de SpawRate
buttonSpawRate.addEventListener("click", function(){
  document.getElementById("scSpawRate").style.display = "block";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
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
