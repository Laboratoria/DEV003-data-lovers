import { getDataPokemon, orderByOption, filterData } from './data.js';

const buttonHome = document.getElementById("btnHome");
const buttonPokedex = document.getElementById("btnPokedex");


buttonHome.addEventListener("click", function () {
  document.getElementById("scIntroduction").style.display = "block";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  //document.getElementById("scPopUP").style.display = "none";
});

buttonPokedex.addEventListener("click", function () {

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scShowAllPokemon").style.innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  //document.getElementById("scPopUP").style.display = "none";

//aca deberia mandar el valor de opcion 1 para que cuando de click al pokedex ordene siempre ascendente
//y deberia aparecer ese radio button marcado (POR HACER)
  const option1 = "1";
  const getCards = orderByOption(option1);

  createCard(getCards);

  //console.log(data);


})


const optionOrder = document.querySelectorAll('input[type=radio][name="rdOptionShow"]');

optionOrder.forEach(optionOrder => optionOrder.addEventListener('change', () => {

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById('scShowAllPokemon').innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";

 
  const getCardsOrderBy = orderByOption(optionOrder.value);

  createCard(getCardsOrderBy);

}
))

//funciones dentro de la pagina de Search
buttonSearch.addEventListener("click", function () {
  document.getElementById("scSearch").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("filterContainer").innerHTML = '';
  //document.getElementById("scPopUP").style.display = "none";
  //document.getElementById("myModal").style.display = "none";
  //cardBox.appendChild(searchBox);

  const newDataP = getDataPokemon();
  //Array que contiene los  tipos de Pokemon
  const newArray = newDataP.map(function (newData) {
    return newData.type
  })
  //array donde guardamos solo los tipos de pokemon
  const item = [];
  for (let i = 0; i < newArray.length; i++) {
    item.push(newArray[i])
  }
  //convertimos a string para poder filtrar la data   
  const str = item.toString();

  // convertimos a array nuevamente y dividimos por comas para poder comparar
  const strArray = str.split(',');
  //console.log(strArray);

  //recorremos nuestro array para eliminar los repetidos
  const unicos = [];
  for (var i = 0; i < strArray.length; i++) {
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
  const sortUnicos = unicos.sort();
  // creamos la lista con las opciones de filtrado
  const labelTitle = document.createElement("label");
  labelTitle.textContent = "Type of Pokemon";
  document.getElementById("filterContainer").appendChild(labelTitle);
  document.getElementById("filterContainer").appendChild(select);
  sortUnicos.forEach((val) => {

    //const searchContainer=document.querySelector(".scSearch");
    const searchListBox = document.createElement("option");
    // pone en mayuscula la primer letra
    searchListBox.text = val.charAt(0).toUpperCase() + val.slice(1);
    // regresamos a minusculas para poder comparar posteriormente
    searchListBox.value = val.toLowerCase();
    searchListBox.id = "listOptions";
    searchListBox.name = "listOptions";
    select.appendChild(searchListBox);


  
  });

  
  // funcion para mostrar la data del filtro por type
  select.addEventListener('change', (e) => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //document.getElementById("scPopUP").style.display = "none";


    //document.getElementById("searchListBoxW").style.display = "block";


    //const indiceSelect = select.selectedIndex;
    //traemos el contenido de la lista (text)
    const typeSelect = select.options[select.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelected = typeSelect.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    const filterDataBy = filterPokemons('type', typeSelected);
    //alert (filterDataBy);


    
    
  })


  

  // Traer funcion para mostrar la data del filtro por type
  regionPokemon.addEventListener('change', (e) => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //document.getElementById("scPopUP").style.display = "none";

    //const indiceSelect = select.selectedIndex;
    //traemos el contenido de la lista (text)
    const typeSelect = regionPokemon.options[regionPokemon.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelected = typeSelect.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    const filterDataBy = filterPokemons(typeSelected, typeSelected);
    //alert (filterDataBy);

  })

  

  //funcion que a enviar los datos a filtrar y retorna lo que se va a mostrar
  const filterPokemons = (filterBy, condition) => {
    const allPokemons = filterData(filterBy, condition).sort();
    
    //console.log("entro");
    createCard(allPokemons);

  }
})//Fin boton Pokedek

//funciones dentro de la pagina de Evolutions

buttonEvolution.addEventListener("click", function () {
  document.getElementById("scEvolution").style.display = "block";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("filterContainer").innerHTML = '';
  //document.getElementById("scPopUP").style.display = "none";
})


//funciones dentro de la pagina de SpawRate

buttonSpawRate.addEventListener("click", function () {
  document.getElementById("scSpawRate").style.display = "block";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("filterContainer").innerHTML = '';
  //document.getElementById("scPopUP").style.display = "none";
})





//window.addEventListener('load', ()=>{

//cuando de click al card para mostrar data completa
//1 debe tomar el card.id
//2 ir a buscar el data por ese id y traer la info
//3 mostrar card de ese pokemon con su info completa


//Funcion que recibe la data a mostrar en las tarjetas (cards)
const createCard = (element) => {

  element.forEach((item) => {

    const cardBox = document.querySelector(".scCards");

    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id=item.num;
    
    const newCardBody = document.createElement("div");
    newCardBody.className = "card_body";
    newCardBody.id=item.num;

    const newH3 = document.createElement("h3");
    newH3.className = "card_title";
    newH3.innerText = item.num;
    newH3.id=item.num;

    const newImg = document.createElement("img");
    newImg.src = item.img;
    //newImg.textContent=item.num;
    newImg.id=item.num;

    const nextEspace = document.createElement("br");


    const newLabel = document.createElement("label");
    newLabel.innerText = item.name.toUpperCase();
    newLabel.className = "card_title";
    newLabel.id=item.num;

    cardBox.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newH3);
    newCardBody.appendChild(newImg);
    newCardBody.appendChild(nextEspace);
    newCardBody.appendChild(newLabel);

  });
}

//slecciona contenedor paddre
const eventClick= document.getElementById("scShowAllPokemon");
//al enocntrar un evento click valida de que elemento fue
eventClick.addEventListener("click", (e)=>{


if (e.target.nodeName == 'DIV' || e.target.nodeName == 'IMG' || e.target.nodeName == 'H3' || e.target.nodeName == 'LABEL'){
//console.log(e.target.nodeName);
let idCardSelect= '';
idCardSelect= e.target.id;
//console.log(idCardSelect);

showInfoPokemon(idCardSelect);
}
//console.log(e);  

})


const showInfoPokemon=(idPokemon)=>{
  //document.getElementById("scPopUP").style.display = "block";
  console.log(idPokemon);

  //const cardBox = document.querySelector(".scCards");
  const container = document.querySelector(".cPopUp");

  //resultado = node.hasChildNodes();
  
  if (document.getElementById('divPopUp') !== null) {
    //const container = document.querySelector('.popUpInfo');
    container.removeChild(document.getElementById('divPopUp'));
    

}

container.style.display="block"
  const popUp= document.createElement("div");
  //popUp.className = "scPopUp";
  popUp.id="divPopUp";
  
  const newLabel = document.createElement("label");
  newLabel.innerText ="hola"
  
  const btnClosePopUp = document.createElement("button");
  btnClosePopUp.className = "close";
  btnClosePopUp.id="btnClose";
  btnClosePopUp.textContent="X"
  

  
  container.appendChild(popUp);
  popUp.appendChild(btnClosePopUp);
  popUp.appendChild(newLabel);

  
  console.log(popUp.id);


 // const allPokemons = filterData('id', idPokemon).sort();
    
  //console.log("entro");
//  createCard(allPokemons);

     //console.log("entro");
     //console.log(idPokemon);

}


// When the user clicks on  (x), close 

//slecciona contenedor paddre
const popUpClick= document.querySelector(".cPopUp");
//al enocntrar un evento click valida de que elemento fue
popUpClick.addEventListener("click", (e)=>{

  if ( e.target.nodeName == 'BUTTON' ) {
    const container = document.querySelector('.cPopUp');
    container.removeChild(document.getElementById('divPopUp'));
    container.style.display="none";
}
  //const container = document.querySelector(".popUpInfo");
  
})



/***************************************************** 


const newDataW = getDataPokemon();
  //Array que contiene los  tipos de Pokemon
  const newArrayW = newDataW.map(function (newDataW) {
    return newDataW.weaknesses
    console.log(newDataW.weaknesses);
  })
  //array donde guardamos solo los tipos de pokemon
  const itemW = [];
  for (let i = 0; i < newArrayW.length; i++) {
    itemW.push(newArrayW[i])
  }
  //convertimos a string para poder filtrar la data   
  const strW = itemW.toString();

  // convertimos a array nuevamente y dividimos por comas para poder comparar
  const strArrayW = strW.split(',');
  //console.log(strArray);

  //recorremos nuestro array para eliminar los repetidos
  const unicosW = [];
  for (var i = 0; i < strArrayW.length; i++) {
    const elementoW = strArrayW[i];
    //obtenemos nuestros elementos a filtrar sin repeticiones
    if (!unicosW.includes(strArrayW[i])) {
      unicosW.push(elementoW);
    }
  }
  //console.log(unicos);

  //Crea el listbox y agrega los datos del array
  
  const selectW = document.createElement("select");
  selectW.name = "weaknessesW";

  // los organizamos por orden alfabetico  
  const sortUnicosW = unicosW.sort();
  // creamos la lista con las opciones de filtrado
  const labelTitleW = document.createElement("label");
  labelTitleW.textContent = "Weaknesses of Pokemon";
  document.getElementById("filterContainer").appendChild(labelTitleW);
  document.getElementById("filterContainer").appendChild(selectW);
  sortUnicosW.forEach((valW) => {

    

    const searchListBoxW = document.createElement("option");
    // pone en mayuscula la primer letra
    searchListBoxW.text = valW.charAt(0).toUpperCase() + valW.slice(1);
    // regresamos a minusculas para poder comparar posteriormente
    searchListBoxW.value = valW.toLowerCase();
    searchListBoxW.id = "listW";
    searchListBoxW.name = "listW";
   
    const espaceW = document.createElement("br");
    selectW.appendChild(searchListBoxW);
    document.getElementById("searchListBoxW").style.display = "none";
  });
  ************************************ */