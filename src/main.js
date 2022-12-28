//importamos funciones de la hoja de data.js
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
});

buttonPokedex.addEventListener("click", function () {

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scShowAllPokemon").style.innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";


  //aca deberia mandar el valor de opcion 1 para que cuando de click al pokedex ordene siempre ascendente
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
  labelTitle.textContent = "Type of Pokemon ";
  document.getElementById("filterContainer").appendChild(labelTitle);
  document.getElementById("filterContainer").appendChild(select);
  sortUnicos.forEach((val) => {
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

  //funcion que va a buscar el pokemon por nombre y lo va a filtrar para retornar lo que se va a mostrar
  const searchPokemon = (event) => {
    event.preventDefault();
    const { value } = event.target.filterPokemons;

    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";

    const writenPokemon = value.toLowerCase();
    const filterDataBy = filterPokemons(writenPokemon);
    //    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    //        .then(data => data.json())
    //        .then(response => renderPokemonData(response))
    //        .catch(err => renderNotFound())

  }


  //funcion que va a enviar los datos a filtrar y retorna lo que se va a mostrar
  const filterPokemons = (filterBy, condition) => {
    const allPokemons = filterData(filterBy, condition).sort();
    createCard(allPokemons);
  }

})//Fin boton Search

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
    newCard.id = item.num;

    const newCardBody = document.createElement("div");
    newCardBody.className = "card_body";
    newCardBody.id = item.num;

    const newH3 = document.createElement("h3");
    newH3.className = "card_title";
    newH3.innerText = item.num;
    newH3.id = item.num;

    const newImg = document.createElement("img");
    newImg.src = item.img;
    //newImg.textContent=item.num;
    newImg.id = item.num;

    const nextEspace = document.createElement("br");


    const newLabel = document.createElement("label");
    newLabel.innerText = item.name.toUpperCase();
    newLabel.className = "card_title";
    newLabel.id = item.num;

    cardBox.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newH3);
    newCardBody.appendChild(newImg);
    newCardBody.appendChild(nextEspace);
    newCardBody.appendChild(newLabel);

  });
}

//slecciona contenedor padre
const eventClick = document.getElementById("scShowAllPokemon");
//al enocntrar un evento click valida de que elemento fue
eventClick.addEventListener("click", (e) => {


  if (e.target.nodeName == 'DIV' || e.target.nodeName == 'IMG' || e.target.nodeName == 'H3' || e.target.nodeName == 'LABEL') {
    //console.log(e.target.nodeName);
    let idCardSelect = '';
    idCardSelect = e.target.id;
    //console.log(idCardSelect);

    showInfoPokemon(idCardSelect);
  }
  //console.log(e);  

})


const showInfoPokemon = (idPokemon) => {
 // console.log(idPokemon);
const filterByP='num';

//console.log(filterByP);

const infoPokemonAll = filterData(filterByP, idPokemon).sort();
const infoPokemon=infoPokemonAll[0];

  //console.log("entro");



  console.log(infoPokemon);
  //  createCard(allPokemons);

  const containerFirts = document.getElementById("scPopUp");
  
  //resultado = node.hasChildNodes();

  if (document.getElementById('divPopUp') !== null) {
    containerFirts.removeChild(document.getElementById('divPopUp'));

  }


  let container="";
  container = document.getElementById("scPopUp");
  container.style.display = "block";
  const popUp = document.createElement("div");
  popUp.id = "divPopUp";








  //Creando la Card con toda la info del pokemon seleccionado
//creando tabla
  const tableInfo = document.createElement("table");
  tableInfo.id="tableInfoPokemon";
//header de la tabla
  const tableHeader = document.createElement("theader");
  const headerTr = document.createElement("tr");
  const headerTh1 = document.createElement("th");
  headerTh1.innerText = infoPokemon['pokemon-rarity'].toUpperCase();
  //trHeader1.innerText = infoPokemon.name + " " + infoPokemon.num;
  const headerTh2 = document.createElement("th");
  headerTh2.innerText = infoPokemon.name.toUpperCase() + " " + "#" + infoPokemon.num;
  const headerTh3 = document.createElement("th");
  headerTh3.innerText = "HP " +infoPokemon.stats['max-hp'];

  const btnClosePopUp = document.createElement("button");
  btnClosePopUp.className = "close";
  btnClosePopUp.id = "btnClose";
  btnClosePopUp.textContent = "Cerrar";
  btnClosePopUp.textContent = "X";

  container.appendChild(popUp);
  popUp.appendChild(btnClosePopUp);

const headerTh4 = document.createElement("th");
headerTh4.contains = btnClosePopUp;

// cuerpo de la tabla tbody
const tbodyTable= document.createElement("tbody");
const bodytrdetail1 = document.createElement("tr");
const bodytd1 = document.createElement("td");

//  console.log(popUp.id);
  const imagenP = document.createElement("img");
  imagenP.src = infoPokemon.img;
  imagenP.id="imgPokemon";

  const nextEspace1 = document.createElement("br");

  // const allPokemons = filterData('id', idPokemon).sort();
  const labelType = document.createElement("label");
  labelType.innerText = "Type: " +infoPokemon.type[0];
  if(infoPokemon.type[1] !== undefined && infoPokemon.type[1] !== null){
    labelType.innerText += " - " + infoPokemon.type[1] ;
  }

  labelType.id="lblTypePokemon";

  const bodytd2 = document.createElement("td");
  bodytd2.innerText = infoPokemon.about;
  const nextEspace2 = document.createElement("br");
  const labelGeneration = document.createElement("label");
  labelGeneration.innerText =  "Generation: " +infoPokemon.generation.num +" Region " +infoPokemon.generation.name;

  const nextEspace3 = document.createElement("br");
  const labelHeight =document.createElement("label");
  labelHeight.innerText = "Height : " +infoPokemon.size.height;
  const nextEspace4 = document.createElement("br");
  const labelWeight =document.createElement("label");
  labelWeight.innerText = "Weight : " + infoPokemon.size.weight;

  const bodytrdetail2 = document.createElement("tr");
  const bodytd3 = document.createElement("td");

  //console.log("entro");
  //  createCard(allPokemons);



  container.appendChild(popUp);
  popUp.appendChild(tableInfo);
 tableInfo.appendChild(tableHeader);
 tableInfo.appendChild(headerTr);
 headerTr.appendChild(headerTh1);
 headerTr.appendChild(headerTh2);
 headerTr.appendChild(headerTh3);
 headerTr.appendChild(headerTh4);
 headerTh4.appendChild(btnClosePopUp);
 tableInfo.appendChild(tbodyTable);
 tbodyTable.appendChild(bodytrdetail1);
 bodytrdetail1.appendChild(bodytd1);
 bodytd1.appendChild(imagenP);
 bodytd1.appendChild(nextEspace1);
 bodytd1.appendChild(labelType);
 bodytrdetail1.appendChild(bodytd2);
 bodytd2.appendChild(nextEspace2);
 bodytd2.appendChild(labelGeneration);
 bodytd2.appendChild(nextEspace3);
 bodytd2.appendChild(labelHeight);
 bodytd2.appendChild(nextEspace4);
 bodytd2.appendChild(labelWeight);

 tbodyTable.appendChild(bodytrdetail2);
 bodytrdetail2.appendChild(bodytd3);

 // popUp.appendChild(newImg);
 // popUp.appendChild(newLblType);



//  console.log(popUp.id);


  // const allPokemons = filterData('id', idPokemon).sort();

  //console.log("entro");
  //  createCard(allPokemons);

  //console.log("entro");
  //console.log(idPokemon);

}


// When the user clicks on  (x), close 

//slecciona contenedor paddre
const popUpClick = document.querySelector(".cPopUp");
//console.log(popUpClick);
//al enocntrar un evento click valida de que elemento fue
popUpClick.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName == 'BUTTON') {
    const containerClose = document.querySelector('.cPopUp');
    containerClose.removeChild(document.getElementById('divPopUp'));
    containerClose.style.display = "none";
  }
  //const container = document.querySelector(".popUpInfo");
})



