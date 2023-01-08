//importamos funciones de la hoja de data.js
import { getDataPokemon, orderByOption, filterData, evolutions } from './data.js';



const buttonHome = document.getElementById('buttonHome')
buttonHome.addEventListener("click", function () {
  document.getElementById("scIntroduction").style.display = "block";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scShowAllPokemon").innerHTML = '';
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scSpawRate").innerHTML = '';
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
 // document.getElementById("figure").contains = '';
 // document.getElementById("figure").removeChild(newImg);
 //llama a funcion imagen aleatoria: en proceso
  imgRandom();

});

const buttonPokedex = document.getElementById('buttonPokedex')
buttonPokedex.addEventListener("click", function () {
  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scShowAllPokemon").innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scSpawRate").innerHTML = '';
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  //al dar clikc en pokedex siempre va ordenar ascendente y va a marcar esa opcion
  const option1 = "1";
  const getCards = orderByOption(option1);
  document.querySelector('[value="1"]').checked = true;
  createCardX(getCards,'1')
 // createCard(getCards);
  //console.log(data);
})
const optionOrder = document.querySelectorAll('input[type=radio][name="rdOptionShow"]');
optionOrder.forEach(optionOrder => optionOrder.addEventListener('change', () => {
  document.getElementById("scPokedex").style.display = "block";
  document.getElementById('scShowAllPokemon').innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scSpawRate").innerHTML = '';
  const getCardsOrderBy = orderByOption(optionOrder.value);
 // createCard(getCardsOrderBy);
 createCardX(getCardsOrderBy,'1')
}
))
//funciones dentro de la pagina de Search
const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener("click", () => {
  document.getElementById("scSearch").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("filterContainer").innerHTML = '';
  document.getElementById("scSpawRate").innerHTML = '';
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
  //recorremos nuestro array para eliminar los repetidos
  const unicos = [];
  for (let i = 0; i < strArray.length; i++) {
    const elemento = strArray[i];
    //obtenemos nuestros elementos a filtrar sin repeticiones
    if (!unicos.includes(strArray[i])) {
      unicos.push(elemento);
    }
  }
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
    // sacamos la primera letra y la pone en mayuscula la primer letra
    searchListBox.text = val.charAt(0).toUpperCase() + val.slice(1);
    // regresamos a minusculas para poder comparar posteriormente
    searchListBox.value = val.toLowerCase();
    searchListBox.id = "listOptions";
    searchListBox.name = "listOptions";
    select.appendChild(searchListBox);
  });
  // funcion para mostrar la data del filtro por type
  select.addEventListener('change', () => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //traemos el contenido de la lista (text)
    const typeSelect = select.options[select.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelected = typeSelect.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    filterPokemons('type', typeSelected);
  });       
  
  //array donde guardamos solo las debilidaes del pokemon
  const arrayWeak = newDataP.map(function (newData) {
    return newData.weaknesses;
  })
  const item1 = [];
  for (let i = 0; i < arrayWeak.length; i++) {
    item1.push(arrayWeak[i])
  }
  //convertimos a string para poder filtrar la data   
  const str1 = item1.toString();
  // convertimos a array nuevamente y dividimos por comas para poder comparar
  const strArray1 = str1.split(',');
  //recorremos nuestro array para eliminar los repetidos
  const unicos1 = [];
  for (let i = 0; i < strArray1.length; i++) {
    const elemento1 = strArray1[i];
    //obtenemos nuestros elementos a filtrar sin repeticiones
    if (!unicos1.includes(strArray1[i])) {
      unicos1.push(elemento1);
    }
  }
  //Crea el listbox y agrega los datos del array
  const selectW = document.createElement("select");
  selectW.name = "pokemonWeak";
  // los organizamos por orden alfabetico  
  const sortUnicos1 = unicos1.sort();
  // creamos la lista con las opciones de filtrado
  const spaceW = document.createElement("br");
  const labelTitleW = document.createElement("label");
  labelTitleW.textContent = "Weaknesses of Pokemon ";
  document.getElementById("filterContainer").appendChild(spaceW);
  document.getElementById("filterContainer").appendChild(labelTitleW);
  document.getElementById("filterContainer").appendChild(selectW);
  sortUnicos1.forEach((val) => {
    const searchListBox1 = document.createElement("option");
    // sacamos la primera letra y la pone en mayuscula la primer letra
    searchListBox1.text = val.charAt(0).toUpperCase() + val.slice(1);
    // regresamos a minusculas para poder comparar posteriormente
    searchListBox1.value = val.toLowerCase();
    searchListBox1.id = "listOptionsW";
    searchListBox1.name = "listOptionsW";
    selectW.appendChild(searchListBox1);
  });
  // funcion para mostrar la data del filtro por weaknesses
  selectW.addEventListener('change', () => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //traemos el contenido de la lista (text)
    const typeSelectW = selectW.options[selectW.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelectedW = typeSelectW.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    filterPokemons('weaknesses', typeSelectedW);
  }); 


  // Traer funcion para mostrar la data del filtro por region
  const regionP = document.getElementById('regionPokemon')
  regionP.addEventListener('change', () => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //traemos el contenido de la lista (text)
    const typeSelect = regionP.options[regionP.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelected = typeSelect.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    filterPokemons(typeSelected, typeSelected);
    //alert (filterDataBy);
  })
})//Fin boton Search

// Inicio funcion searchPokemon donde busca el nombre y lo filtra para mostrarlo
const searchPokemon = document.getElementById("txtSearch");
const functionSearch = ()=>{
    
  if(searchPokemon.value!==''){
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    const value = document.getElementById("txtSearch").value.toLowerCase();
    const dataname = "name";
    filterPokemons(dataname, value);
    //borrar letras de la busqueda
    document.getElementById("txtSearch").value = '';
  }else{
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "none";
    document.getElementById("txtSearch").value = '';
    document.getElementById("txtSearch").focus;
    alert('Enter the name of the pokemon you want to see');
  }
}

//funcion con enter que llama a funcion search pokemon
searchPokemon.addEventListener("keyup",function(e){
  const keycode = (e.key);
  if(keycode ==='13' || keycode ==='Enter'){
    functionSearch();
  }
})
// funcion con boton que llama a funcion search pokemon
const btnSearchPokemon = document.getElementById('btnSearchPokemon');
btnSearchPokemon.addEventListener('click', functionSearch);

//funcion que va a enviar los datos a filtrar y retorna lo que se va a mostrar
const filterPokemons = (filterBy, condition) => {
  const allPokemons = filterData(filterBy, condition).sort();
  if (allPokemons !== null) {
   // createCard(allPokemons);
    createCardX(allPokemons,'1');
  }
}

const filterPokemons2 = (filterBy, condition) => {
  const allPokemons = filterData(filterBy, condition).sort();
  if (allPokemons !== null) {
    createCard4(allPokemons);
    
  }
}

//funciones dentro de la pagina de Evolutions
const buttonEvolution = document.getElementById('buttonEvolution');
buttonEvolution.addEventListener("click", function () {
  document.getElementById("scEvolution").style.display = "block";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").style.display = "none";
  document.getElementById("scSpawRate").innerHTML = '';
  document.getElementById("filterContainer").innerHTML = '';
})

//funcion con Enter que va a mostrar las evoluciones del pokemon  
const evolutionTextBox = document.getElementById("evolutionP");
const functionEvolution = ()=>{
  if(evolutionTextBox.value!==''){
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    const value = evolutionTextBox.value.toLowerCase();
    const dataname = "name";
    const filterNameEvolution = evolutions(dataname, value);

   if (filterNameEvolution) {  
  // createCard3(filterNameEvolution);
createCardX(filterNameEvolution,'3');
      document.getElementById("evolutionP").value = '';
      document.getElementById("evolutionP").focus;
    }else{
      document.getElementById("evolutionP").value = '';
      document.getElementById("evolutionP").focus;
    }
  }else{
    document.getElementById("evolutionP").value = '';
    alert('Enter the name of the pokemon you want to see the evolutions');
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "none";
    document.getElementById("evolutionP").value = '';
    document.getElementById("evolutionP").focus;
  }
}
//funcion con enter que llama a functionevolution
evolutionTextBox.addEventListener("keyup",function(e){
  const keycode = (e.key);
  if(keycode ==='13' || keycode ==='Enter'){
    functionEvolution();
  }
})
//funcion con boton que llama a functionevolution
const evolutionButton = document.getElementById('evolutionButton');
evolutionButton.addEventListener('click', functionEvolution);


//funciones dentro de la pagina de SpawRate
const buttonSpawRate = document.getElementById('buttonSpawRate')
buttonSpawRate.addEventListener("click", function () {
  document.getElementById("scSpawRate").style.display = "block";
  document.getElementById("scEvolution").style.display = "none";
  document.getElementById("scSearch").style.display = "none";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  document.getElementById("scSpawRate").innerHTML = '';

  const NameP = getDataPokemon();
  //Array que contiene los  tipos de Pokemon
  const arrayName = NameP.map(function (NameP) {
    return NameP.name
  })
  //array donde guardamos solo los nombres de los pokemon
  const itemName = [];
  for (let i = 0; i < arrayName.length; i++) {
    itemName.push(arrayName[i])
  }

  //console.log(itemName);
  // Cargar los nombres de los Pokemons en la lista desplegable
  const spaceEnter = document.createElement("br");
  document.getElementById("scSpawRate").appendChild(spaceEnter);
  const selectNamePokemon = document.createElement("select");
  selectNamePokemon.id = "pokemonNameList";
  const namePokemonSort = itemName.sort();
  // creamos la lista con las opciones de filtrado
  const labelNameP = document.createElement("label");
  labelNameP.textContent = "Select a Pokemon ";
  document.getElementById("scSpawRate").appendChild(labelNameP);
  document.getElementById("scSpawRate").appendChild(selectNamePokemon);
  namePokemonSort.forEach((val) => {
    const searchListName = document.createElement("option");
    // sacamos la primera letra y la pone en mayuscula la primer letra
    searchListName.text = val.charAt(0).toUpperCase() + val.slice(1);
    // regresamos a minusculas para poder comparar posteriormente
    searchListName.value = val.toLowerCase();
    searchListName.id = "listOptions";
    searchListName.name = "listOptions";
    selectNamePokemon.appendChild(searchListName);

  });

  //const space = document.createElement("&nbsp;"); 
  //document.getElementById("scSpawRate").appendChild(space);
  const buttonTop = document.createElement("button");
  buttonTop.id = "btntop";
  buttonTop.innerText = "Top 10";
  document.getElementById("scSpawRate").appendChild(buttonTop);

  
  buttonTop.addEventListener('click', () => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    const option5 = "5";
    //console.log(option5);
    let orderByCapture = orderByOption(option5);
    
   // createCard2(orderByCapture);
createCardX(orderByCapture,'2');
  })

  selectNamePokemon.addEventListener('change', () => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //traemos el contenido de la lista (text)
    const typeSelectName = selectNamePokemon.options[selectNamePokemon.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelectedName = typeSelectName.toLowerCase();
    // console.log (typeSelectedName);
    const byName = "name";
    const filternameP = filterData(byName, typeSelectedName);
    // console.log(filternameP);
   // createCard2(filternameP);
   createCardX(filternameP,'2');
  })

})

//cuando de click al card para mostrar data completa
//1 debe tomar el card.id
//2 ir a buscar el data por ese id y traer la info
//3 mostrar card de ese pokemon con su info completa
//Funcion que recibe la data a mostrar en las tarjetas (cards)


const createCard4 = (element) => {
  element.forEach((item) => {
     // contenedor padre de todas las cards en seccion html que busca por clase
     const cardBox = document.querySelector("figure");
     const newCard = document.createElement("div");
     newCard.className = "card";
     //mismo id tem.num para cuando des click responda toda la card
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
  if (e.target.nodeName === 'DIV' || e.target.nodeName === 'IMG' || e.target.nodeName === 'H3' || e.target.nodeName === 'LABEL') {
    //console.log(e.target.nodeName);
    let idCardSelect = '';
    idCardSelect = e.target.id;
    showInfoPokemon(idCardSelect);
  }
})



const showInfoPokemon = (idPokemon) => {
  // console.log(idPokemon);
  const filterByP = 'num';
  //console.log(filterByP);
  const infoPokemonAll = filterData(filterByP, idPokemon);
  const infoPokemon = infoPokemonAll[0];
  //console.log(infoPokemon);

  let container = "";
  container = document.getElementById("scPopUp");
  // limpiar el popup card cada que le demos click en un pokemon
  document.getElementById("scPopUp").innerHTML = '';
  container.style.display = "block";
  const popUp = document.createElement("div");
  popUp.id = "divPopUp";



  //Creando la Card con toda la info del pokemon seleccionado
  //creando tabla
  const tableInfo = document.createElement("table");
  tableInfo.id = "tableInfoPokemon";
  //header de la tabla
  const tableHeader = document.createElement("theader");
  const headerTr = document.createElement("tr");
  const headerTh1 = document.createElement("th");
  headerTh1.innerText = infoPokemon['pokemon-rarity'].toUpperCase();
  //trHeader1.innerText = infoPokemon.name + " " + infoPokemon.num;
  const headerTh2 = document.createElement("th");
  headerTh2.innerText = infoPokemon.name.toUpperCase() + " " + "#" + infoPokemon.num;
  const headerTh3 = document.createElement("th");
  headerTh3.innerText = "HP " + infoPokemon.stats['max-hp'];
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
  const tbodyTable = document.createElement("tbody");
  const bodytrdetail1 = document.createElement("tr");
  const bodytd1 = document.createElement("td");
  //  console.log(popUp.id);
  const imagenP = document.createElement("img");
  imagenP.src = infoPokemon.img;
  imagenP.id = "imgPokemon";
  const nextEspace1 = document.createElement("br");

  const labelType = document.createElement("label");
  labelType.innerText = "Type: " + infoPokemon.type[0];
  if (infoPokemon.type[1] !== undefined && infoPokemon.type[1] !== null) {
    labelType.innerText += " - " + infoPokemon.type[1];
  }

  labelType.id = "lblTypePokemon";
  const nextEspace3 = document.createElement("br");
  const labelHeight = document.createElement("label");
  labelHeight.innerText = "Height : " + infoPokemon.size.height;
  const nextEspace4 = document.createElement("br");
  const labelWeight = document.createElement("label");
  labelWeight.innerText = "Weight : " + infoPokemon.size.weight;
  const bodytd2 = document.createElement("td");
  const labelAbout = document.createElement("label");
  labelAbout.className = "aboutStyle";
  labelAbout.innerText = infoPokemon.about;
  bodytd2.colSpan = "3";
  const nextEspace2 = document.createElement("br");
  const nextEspace10 = document.createElement("br");
  const labelGeneration = document.createElement("label");
  labelGeneration.className = "generationStyle";
  labelGeneration.innerText = " Generation:  " + infoPokemon.generation.num
  const nextEspace9 = document.createElement("br");
  const labelRegion = document.createElement("label");
  labelRegion.innerText = " Region:   " + infoPokemon.generation.name;

  const bodytrdetail2 = document.createElement("tr");
  const bodytd3 = document.createElement("td");
  const labelWeaknessesTitle = document.createElement("label");
  labelWeaknessesTitle.innerText = "Weaknesses";
  const nextEspace5 = document.createElement("br");

  const labelweaknesses = document.createElement("label");
  labelweaknesses.innerText = "";

  infoPokemon.weaknesses.forEach((item) => {
    labelweaknesses.innerText += "  " + item;

    //console.log(item);
  })
  const bodytd4 = document.createElement("td");
  bodytd4.colSpan = "2";
  // bodytd4.rowSpan="2";
  const labelResistantTitle = document.createElement("label");
  labelResistantTitle.innerText = "Resistant to:";
  const nextEspace6 = document.createElement("br");

  const labelResistant = document.createElement("label");
  labelResistant.innerText = "";

  infoPokemon.resistant.forEach((item) => {
    labelResistant.innerText += "  " + item;
    //console.log(item);
  })
  /*   "egg": "2 km",
    "buddy-distance-km": "3",*/
  const bodytrdetail3 = document.createElement("tr");
  const bodytd5 = document.createElement("td");
  bodytd5.colSpan = "4";
  const labelExtra = document.createElement("label");
  labelExtra.innerText = "Extra Information:";
  const nextEspace7 = document.createElement("br");

  const labelEggs = document.createElement("label");
  labelEggs.innerText = "Eggs   " + infoPokemon.egg;
  const nextEspace8 = document.createElement("br");
  const labelCandy = document.createElement("label");
  labelCandy.innerText = "Candy distance in km   " + infoPokemon['buddy-distance-km'];
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
  bodytd2.appendChild(labelAbout);
  bodytd2.appendChild(nextEspace2);
  bodytd2.appendChild(nextEspace10);
  bodytd2.appendChild(labelGeneration);
  bodytd2.appendChild(nextEspace9);
  bodytd2.appendChild(labelRegion);
  bodytd1.appendChild(nextEspace3);
  bodytd1.appendChild(labelHeight);
  bodytd1.appendChild(nextEspace4);
  bodytd1.appendChild(labelWeight);
  tbodyTable.appendChild(bodytrdetail2);
  bodytrdetail2.appendChild(bodytd3);
  bodytd3.appendChild(labelWeaknessesTitle);
  bodytd3.appendChild(nextEspace5);
  bodytd3.appendChild(labelweaknesses);
  bodytrdetail2.appendChild(bodytd4);
  bodytd4.appendChild(labelResistantTitle);
  bodytd4.appendChild(nextEspace6);
  bodytd4.appendChild(labelResistant);
  tbodyTable.appendChild(bodytrdetail3);
  bodytrdetail3.appendChild(bodytd5);
  bodytd5.appendChild(labelExtra);
  bodytd5.appendChild(nextEspace7);
  bodytd5.appendChild(labelEggs);
  bodytd5.appendChild(nextEspace8);
  bodytd5.appendChild(labelCandy);
}

// When the user clicks on  (x), close 
//slecciona contenedor paddre
const popUpClick = document.querySelector(".cPopUp");
//console.log(popUpClick);
//al enocntrar un evento click valida de que elemento fue
popUpClick.addEventListener("click", (e) => {
  //console.log(e);
  // quiero bloquear la pantalla de atras
  //document.body.classList.toggle('modal-open');
  if (e.target.nodeName === 'BUTTON') {
    const containerClose = document.querySelector('.cPopUp');
    containerClose.removeChild(document.getElementById('divPopUp'));
    containerClose.style.display = "none";
  }
 
})


//onclick="topFunction()"
const buttonUp = document.getElementById("btnUp");
buttonUp.addEventListener('click',()=>{
  // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0; // Para safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
})

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnUp").style.display = "block";
  } else {
    document.getElementById("btnUp").style.display = "none";
  }
}



const imgRandom = () => {
  const images = orderByOption('1');
  let bufferImagenes = [];

  for (const e of images) {
      let imagen = new Image();
      imagen.num = e.num;
      imagen.name = e.name;
      imagen.img = e.img;

      bufferImagenes.push(imagen);
  }
 // console.log(bufferImagenes);
  let indexRandon = generarEnteroAleatorio(bufferImagenes.length);
  let imagenAleatoria = bufferImagenes[indexRandon].num;
  const contFigure = document.querySelector("figure")
  contFigure.innerHTML='';
    const filterbyNum = "num";
    filterPokemons2(filterbyNum, imagenAleatoria);
}   


function generarEnteroAleatorio(cantidadImagenes) {
  return Math.floor(Math.random() * cantidadImagenes);
}

window.addEventListener('load',imgRandom)


//createCard
const createCardX = (element,op) => {
  element.forEach((item) => {
     // contenedor padre de todas las cards en seccion html que busca por clase
     const cardBox = document.querySelector(".scCards");
     const newCard = document.createElement("div");
     newCard.className = "card";
     //mismo id tem.num para cuando des click responda toda la card
     newCard.id = item.num;
     const newCardBody = document.createElement("div");
     newCardBody.className = "card_body";
     newCardBody.id = item.num;
     cardBox.appendChild(newCard);
     newCard.appendChild(newCardBody);

//validando que op es
if (op==1){
  const newH3 = document.createElement("h3");
  newH3.className = "card_title";
  newH3.innerText = item.num;
  newH3.id = item.num;
  const newImg = document.createElement("img");
  newImg.src = item.img;
  newImg.id = item.num;
  const nextEspace = document.createElement("br");
  const newLabel = document.createElement("label");
  newLabel.innerText = item.name.toUpperCase();
  newLabel.className = "card_title";
  newLabel.id = item.num;
  
  newCardBody.appendChild(newH3);
  newCardBody.appendChild(newImg);
  newCardBody.appendChild(nextEspace);
  newCardBody.appendChild(newLabel);

}else if (op==2){
  const newH3 = document.createElement("h3");
  newH3.innerText = item.name.toUpperCase();
  newH3.id = item.num;
  const newImg = document.createElement("img");
  newImg.src = item.img;
  newImg.id = item.num;
  const nextEspace = document.createElement("br");
  const labelFleeRate = document.createElement("label");
  labelFleeRate.innerText = "Base flee rate  " + item.encounter["base-flee-rate"];
  labelFleeRate.id = item.num;
  labelFleeRate.className = "labelCard2";
  const nextEspace2 = document.createElement("br");
  const labelCaptureRate = document.createElement("label");
  labelCaptureRate.innerText = "Base Capture rate  " + item.encounter["base-capture-rate"];
  labelCaptureRate.id = item.num;
  labelCaptureRate.className = "labelCard2";

  newCardBody.appendChild(newH3);
  newCardBody.appendChild(newImg);
  newCardBody.appendChild(nextEspace);
  newCardBody.appendChild(labelFleeRate);
  newCardBody.appendChild(nextEspace2);
  newCardBody.appendChild(labelCaptureRate);

}else if(op==3){
  const newH3 = document.createElement("h3");
  newH3.className = "card_title3";
  newH3.innerText = item.name.toUpperCase();
  newH3.id = item.num;
  const newImg = document.createElement("img");
  newImg.src = item.img;
  newImg.id = item.num;
  const nextEspace = document.createElement("br");
  const labelCandyName = document.createElement("label");
  labelCandyName.innerText = "Candy:  " + item.evolution["candy"];
  labelCandyName.id = item.num;
  labelCandyName.className = "labelCard3";
  const nextEspace2 = document.createElement("br");
  const labelCandyCost = document.createElement("label");
  if (item.evolution['prev-evolution'] !== undefined) {
    labelCandyCost.innerText = "Candy Cost for evolution: " + item.evolution['prev-evolution'][0]['candy-cost'];
  }
  if (item.evolution['next-evolution'] !== undefined) {
    labelCandyCost.innerText = "Candy Cost for evolution: " + item.evolution['next-evolution'][0]['candy-cost'];
  }
  if (item.evolution['next-evolution'] === undefined) {
    labelCandyCost.innerText = "No more evolutions";
  }
  labelCandyCost.id = item.num;
  labelCandyCost.className = "labelCard3";
  newCardBody.appendChild(newH3);
  newCardBody.appendChild(newImg);
  newCardBody.appendChild(nextEspace);

  newCardBody.appendChild(labelCandyName);
  newCardBody.appendChild(nextEspace2);
  newCardBody.appendChild(labelCandyCost);
}


   });
 } 
 
 
 


