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
  labelTitleW.innerHTML = "<br>Weaknesses of Pokemon ";
  //labelTitleW.textContent = "Weaknesses of Pokemon ";
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
    const value2 = document.getElementById("txtSearch").value.toLowerCase();
    const value3=value2.trim();
    const dataname = "name";
    filterPokemons(dataname, value3);
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
    const value1 = evolutionTextBox.value.toLowerCase();
    const value =value1.trim();
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
    showInfoPokemon2(idCardSelect);
  }
})




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
    containerClose.removeChild(document.getElementById('secPopUp'));
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
 
 
 const showInfoPokemon2 = (idPokemon) => {

  const infoPokemonAll = filterData('num', idPokemon);
  const infoPokemon = infoPokemonAll[0];
  let container = "";
  container = document.getElementById("scPopUp");
  // limpiar el popup card cada que le demos click en un pokemon
  document.getElementById("scPopUp").innerHTML = '';
  container.style.display = "block";
  const secPopUp = document.createElement("section");
  secPopUp.id = "secPopUp";

  const headerPopUp = document.createElement("section");
  headerPopUp.id="headerDetails";  
//header
  const spanRarity = document.createElement("span");
  spanRarity.id="spPokemonRarityD";
  spanRarity.innerText=infoPokemon['pokemon-rarity'].toUpperCase();

  const spanNameNum = document.createElement("span");
  spanNameNum.id="spNameNumPokemonD";
  spanNameNum.innerText=infoPokemon.name.toUpperCase() + " " + "#" + infoPokemon.num;

  const spanHp = document.createElement("span");
  spanHp.id="spHpPokemonD";
  spanHp.innerText= "HP " + infoPokemon.stats['max-hp'];

  const divCloseB=document.createElement("div");
  divCloseB.id="divCloseDetails";
  const btnClosePopUp = document.createElement("button");
  btnClosePopUp.className = "close";
  btnClosePopUp.id = "btnClose";
  btnClosePopUp.textContent = "X";
//fin header

//ssection body
const secBodydetails=document.createElement("section");
secBodydetails.id="scBodyDetail";

//section left
const scLeftPopUp = document.createElement("section");
scLeftPopUp.id="leftDetails";
const figureImg =document.createElement("img");
figureImg.src = infoPokemon.img;
figureImg.id = "imgPokemon";

const scthw = document.createElement("section");
scthw.id="scTypeHeigthWeigth";
const spanType = document.createElement("span");
spanType.innerHTML= "<strong>Type : </strong><br>"  + infoPokemon.type[0] + "<br>";

if (infoPokemon.type[1] !== undefined && infoPokemon.type[1] !== null) {
  spanType.innerHTML +=  infoPokemon.type[1] +"<br>";
}

const spanHeight = document.createElement("span");
spanHeight.innerHTML = "<strong>Height : </strong>" + infoPokemon.size.height +"<br>";

const spanWeight = document.createElement("span");
spanWeight.innerHTML =  "<strong>Weight : </strong>" + infoPokemon.size.weight +"<br>";

const scWeaknesses= document.createElement("section");
scWeaknesses.id="scweaknessesDetails";
const ulWeaknesses = document.createElement("ul");
ulWeaknesses.id="ulWeaknesses";
ulWeaknesses.innerHTML = "<strong> Weaknesses : </strong>" ;

infoPokemon.weaknesses.forEach((item) => {
  
  ulWeaknesses.innerHTML += `<li> ${item} </li>` ;
})
//fin section left

//section rigth
const scRigthPopUp = document.createElement("section");
scRigthPopUp.id="scRigthDetails";

const scAbout = document.createElement("section");
scAbout.id="scAboutDetails";
const pAbout=document.createElement("p");
pAbout.innerText = infoPokemon.about;

const spanGeneration = document.createElement("span");
spanGeneration.innerHTML = "<br><strong>Generation :</strong>" + infoPokemon.generation.num +"<br>";

const spanRegion = document.createElement("span");
spanRegion.innerHTML = "<strong>Region :</strong>" + infoPokemon.generation.name +"<br>";

const scResistant= document.createElement("section");
scResistant.id="scResistantDetails"
const ulResistant = document.createElement("ul");
ulResistant.id="ulResistant";
ulResistant.innerHTML = "<strong>Resistant :</strong>" ;

infoPokemon.resistant.forEach((item) => {
  //ulResistant.innerHTML += "<li>" + item + "</li>"; //
  ulResistant.innerHTML += `<li> ${item} </li>` ;
})
//end section rigth

const scOtherInfo=document.createElement("section");
scOtherInfo.id="scOtherInfoP";

const scExtraInfo = document.createElement("section");
scExtraInfo.id="scExtraInfoDetails";
const spExtraInfo =document.createElement("span");
spExtraInfo.innerHTML="<strong><ins> EXTRA INFORMATION </ins></strong><br>";

const spanEggs = document.createElement("span");
spanEggs.id="spEggs";
spanEggs.innerHTML = "<strong>Eggs : </strong>" + infoPokemon.egg+"<br>";

const spanCandy = document.createElement("span");
spanCandy.id="spCandy";
spanCandy.innerHTML = "<strong>Candy distance (km) : </strong>" + infoPokemon['buddy-distance-km'];
//fin section rigth

container.appendChild(secPopUp);
  secPopUp.appendChild(headerPopUp);
  headerPopUp.appendChild(spanRarity);
  headerPopUp.appendChild(spanNameNum);
  headerPopUp.appendChild(spanHp);
  headerPopUp.appendChild(divCloseB);
  divCloseB.appendChild(btnClosePopUp);

  container.appendChild(secBodydetails);
  secBodydetails.appendChild(scLeftPopUp);
  scLeftPopUp.appendChild(figureImg);
  scLeftPopUp.appendChild(scthw);
  scthw.appendChild(spanType);
  scthw.appendChild(spanHeight);
  scthw.appendChild(spanWeight);

  secBodydetails.appendChild(scRigthPopUp);
  scRigthPopUp.appendChild(scAbout); 
  scAbout.appendChild(pAbout);
  secBodydetails.appendChild(scOtherInfo); 
  scRigthPopUp.appendChild(spanGeneration);
  scRigthPopUp.appendChild(spanRegion);
  scLeftPopUp.appendChild(scWeaknesses);
  scWeaknesses.appendChild(ulWeaknesses); 
  scRigthPopUp.appendChild(scResistant);
  scResistant.appendChild(ulResistant);

  scOtherInfo.appendChild(scExtraInfo); 
  scExtraInfo.appendChild(spExtraInfo); 
  scExtraInfo.appendChild(spanEggs); 
  scExtraInfo.appendChild(spanCandy); 

//************************************************************************ */ 

}


