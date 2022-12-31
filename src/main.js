//importamos funciones de la hoja de data.js
import { getDataPokemon, orderByOption, filterData } from './data.js'; 
import pokemon from './data/pokemon/pokemon.js';


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
buttonSearch.addEventListener("click", () => {
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
  //recorremos nuestro array para eliminar los repetidos
  const unicos = [];
  for (var i = 0; i < strArray.length; i++) {
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
  select.addEventListener('change', (e) => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //traemos el contenido de la lista (text)
    const typeSelect = select.options[select.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelected = typeSelect.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    const filterDataBy = filterPokemons('type', typeSelected);
  })

  // Traer funcion para mostrar la data del filtro por region
  regionPokemon.addEventListener('change', (e) => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    //traemos el contenido de la lista (text)
    const typeSelect = regionPokemon.options[regionPokemon.selectedIndex].text;
    //lo pasamos a minusculas para buscar igual como esta en la data
    const typeSelected = typeSelect.toLowerCase();
    //llamamos la funcion filtrar y le mandamos el dato a buscar y el valor a comparar
    const filterDataBy = filterPokemons(typeSelected, typeSelected);
    //alert (filterDataBy);
  })

//funcion con Enter que va a buscar el pokemon por nombre y lo va a filtrar para retornar lo que se va a mostrar
const nameTextBox = document.getElementById("pokemon");
  nameTextBox.addEventListener("keyup",function(e){
    const keycode = (e.key);
    if(keycode =='13' || keycode =='Enter'){
//NO SE SI ES NECESARIO ESTE IF
      /*if(nameTextBox.value==''){
        alert('Enter the name of the pokemon you want to see');
      }else{*/
        document.getElementById("scShowAllPokemon").innerHTML = '';
        document.getElementById("scShowAllPokemon").style.display = "flex";
        const value = document.getElementById("pokemon").value.toLowerCase();
        const dataname = "name";
        const filtername = filterPokemons(dataname, value);
        //borrar letras de la busqueda
        document.getElementById("pokemon").value = '';
      //}
    }
  })

  //funcion con boton que va a buscar el pokemon por nombre y lo va a filtrar para retornar lo que se va a mostrar
  nameButton.addEventListener('click', (event) => {
      
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    const value = document.getElementById("pokemon").value.toLowerCase();
    const dataname = "name";
    const filtername = filterPokemons(dataname, value);
    //borrar letras de la busqueda
    document.getElementById("pokemon").value = '';
})
})//Fin boton Search


//funcion que va a enviar los datos a filtrar y retorna lo que se va a mostrar
  const filterPokemons = (filterBy, condition) => {
    const allPokemons = filterData(filterBy, condition).sort();
    createCard(allPokemons);
  }

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
 
  //funcion con Enter que va a mostrar las evoluciones del pokemon
  
  const evolutionTextBox = document.getElementById("evolutionP");
  evolutionTextBox.addEventListener("keyup",function(e){
    const keycode = (e.key);
    if(keycode =='13' || keycode =='Enter'){
    /*  if(evolutionTextBox.value==''){
        alert('Enter the name of the pokemon you want to see the evolutions');
      }else{*/
      // lo estoy omitiendo por el momento
        document.getElementById("scShowAllPokemon").innerHTML = '';
        document.getElementById("scShowAllPokemon").style.display = "flex";
        const value = document.getElementById("evolutionP").value.toLowerCase();
        const dataname = "name";
        const filterNameEvolution = filterPokemons(dataname, value);
        
        //borrar letras de la busqueda
        document.getElementById("evolutionP").value = '';
        console.log(filterNameEvolution);
        createCard3(filterNameEvolution);

      //}
    }
  }) 

  //funcion con boton que va a a mostrar las evoluciones del pokemon
  evolutionButton.addEventListener('click', (event) => {
    document.getElementById("scShowAllPokemon").innerHTML = '';
    document.getElementById("scShowAllPokemon").style.display = "flex";
    const value = document.getElementById("evolutionP").value.toLowerCase();
    const dataname = "name";
    const filterNameEvolution = filterPokemons(dataname, value);
    //borrar letras de la busqueda
    document.getElementById("evolutionP").value = '';
    console.log(filterNameEvolution);
    createCard3(filterNameEvolution);
})

})


//funciones dentro de la pagina de SpawRate
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
buttonTop.id="btntop";
buttonTop.innerText="Top 10";
document.getElementById("scSpawRate").appendChild(buttonTop);



selectNamePokemon.addEventListener('change', (e) => {
  document.getElementById("scShowAllPokemon").innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  //traemos el contenido de la lista (text)
  const typeSelectName = selectNamePokemon.options[selectNamePokemon.selectedIndex].text;
  //lo pasamos a minusculas para buscar igual como esta en la data
  const typeSelectedName = typeSelectName.toLowerCase();
 // console.log (typeSelectedName);
  const byName = "name";
  const filternameP = filterData(byName, typeSelectedName);
  console.log(filternameP);
  createCard2(filternameP);

})

})

/* al darle enter en el textbox
const txtboxFindPokemon = document.getElementById("txtFindPokemon");

txtboxFindPokemon.addEventListener("keyup",function(e){
  console.log(e);
  const keycode = (e.key);
  if(keycode == '13' || keycode=='Enter'){
    if (txtboxFindPokemon.value==''){
      alert('Enter the name of pokemon to find');
      txtboxFindPokemon.focus;
    }else{
        alert('You pressed a "enter" key in textbox  ' +  txtboxFindPokemon.value);


  }  
  }
});*/


//cuando de click al card para mostrar data completa
//1 debe tomar el card.id
//2 ir a buscar el data por ese id y traer la info
//3 mostrar card de ese pokemon con su info completa
//Funcion que recibe la data a mostrar en las tarjetas (cards)
const createCard = (element) => {

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

const createCard2 = (element) => {

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
    newH3.innerText = item.name.toUpperCase();
    newH3.id = item.num;

    const newImg = document.createElement("img");
    newImg.src = item.img;
    //newImg.textContent=item.num;
    newImg.id = item.num;

    const nextEspace = document.createElement("br");
    const labelFleeRate = document.createElement("label");
    labelFleeRate.innerText = "Base flee rate  " + item.encounter["base-flee-rate"];
    labelFleeRate.id = item.num;
    labelFleeRate.className= "labelCard2";

    const nextEspace2 = document.createElement("br");
    const labelCaptureRate = document.createElement("label");
    labelCaptureRate.innerText = "Base Capture rate  " + item.encounter["base-capture-rate"];
    labelCaptureRate.id = item.num;
    labelCaptureRate.className= "labelCard2";

    cardBox.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newH3);
    newCardBody.appendChild(newImg);
    newCardBody.appendChild(nextEspace);
    newCardBody.appendChild(labelFleeRate);
    newCardBody.appendChild(nextEspace2);
    newCardBody.appendChild(labelCaptureRate);

  });
}

// Card 3 de Evolution !
const createCard3 = (element) => {
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
    newH3.innerText = item.name.toUpperCase();
    newH3.id = item.num;

    const newImg = document.createElement("img");
    newImg.src = item.img;
    newImg.id = item.num;

    const nextEspace = document.createElement("br");
    const labelCandy = document.createElement("label");
    labelCandy.innerText = "Candy for next evolution  " + item.evolution["candy"];
    labelCandy.id = item.num;
    labelCandy.className= "labelCard3";

    const nextEspace2 = document.createElement("br");
    const labelCandyCost = document.createElement("label");
    labelCandyCost.innerText = "Number of candies for next evolution  " + item.evolution["candy-cost"];
    labelCandyCost.id = item.num;
    labelCandyCost.className= "labelCard3";

    cardBox.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newH3);
    newCardBody.appendChild(newImg);
    newCardBody.appendChild(nextEspace);
    newCardBody.appendChild(labelCandy);
    newCardBody.appendChild(nextEspace2);
    newCardBody.appendChild(labelCandyCost);

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
    showInfoPokemon(idCardSelect);
  } 
})



const showInfoPokemon = (idPokemon) => {
 // console.log(idPokemon);
const filterByP='num';
//console.log(filterByP);

const infoPokemonAll = filterData(filterByP, idPokemon);
const infoPokemon=infoPokemonAll[0];
  //console.log(infoPokemon);


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
  headerTh3.innerText = "HP "+infoPokemon.stats['max-hp'];

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

 
  const labelType = document.createElement("label");
  labelType.innerText = "Type: " +infoPokemon.type[0];
  if(infoPokemon.type[1] !== undefined && infoPokemon.type[1] !== null){
    labelType.innerText += " - " + infoPokemon.type[1] ;
  }

  labelType.id="lblTypePokemon";

  const nextEspace3 = document.createElement("br");
  const labelHeight =document.createElement("label");
  labelHeight.innerText = "Height : " +infoPokemon.size.height;
  const nextEspace4 = document.createElement("br");
  const labelWeight =document.createElement("label");
  labelWeight.innerText = "Weight : " + infoPokemon.size.weight;

  const bodytd2 = document.createElement("td");
  bodytd2.innerText = infoPokemon.about;
  bodytd2.colSpan="3";
  const nextEspace2 = document.createElement("br");
  const labelGeneration = document.createElement("label");
  labelGeneration.innerText =  "Generation: " +infoPokemon.generation.num +" Region " +infoPokemon.generation.name;

  
  const bodytrdetail2 = document.createElement("tr");
  const bodytd3 = document.createElement("td");
  const labelWeaknessesTitle = document.createElement("label");
  labelWeaknessesTitle.innerText="Weaknesses";
  const nextEspace5 = document.createElement("br");
  
  const labelweaknesses = document.createElement("label");
  labelweaknesses.innerText="";
  
  infoPokemon.weaknesses.forEach((item) => {
  labelweaknesses.innerText += "- "+ item  ;
    
    //console.log(item);
  })

  const bodytd4 = document.createElement("td");
  bodytd4.colSpan="2";
 // bodytd4.rowSpan="2";
  const labelResistantTitle = document.createElement("label");
  labelResistantTitle.innerText="Resistant";
  const nextEspace6 = document.createElement("br");
  
  const labelResistant = document.createElement("label");
  labelResistant.innerText="";
  
  infoPokemon.resistant.forEach((item) => {
    labelResistant.innerText += "- "+ item  ;
   
    
    //console.log(item);
  })

/*   "egg": "2 km",
    "buddy-distance-km": "3",*/
    const bodytrdetail3 = document.createElement("tr");
    const bodytd5 = document.createElement("td");
    bodytd5.colSpan="4";
    const labelExtra = document.createElement("label");
    labelExtra.innerText="Extra Information:";
    const nextEspace7 = document.createElement("br");
    
    const labelEggs = document.createElement("label");
    labelEggs.innerText="Eggs: "+ infoPokemon.egg;
    const nextEspace8 = document.createElement("br");
    const labelCandy = document.createElement("label");
    labelCandy.innerText="Candy distance km: "+ infoPokemon['buddy-distance-km'];

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
  console.log(e);
  if (e.target.nodeName == 'BUTTON') {
    const containerClose = document.querySelector('.cPopUp');
    containerClose.removeChild(document.getElementById('divPopUp'));
    containerClose.style.display = "none";
  }
  //const container = document.querySelector(".popUpInfo");
})



