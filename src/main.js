import data from './data/rickandmorty/rickandmorty.js';
import { filterData, getData } from './data.js';

function showAllCharacters(characters) {
  document.getElementById("cards").innerHTML = ("");
  for (const character of characters) {
    const cardMold = document.createElement("div"); //Crear card de molde para reutilizar
    cardMold.classList.add("cardMold"); //Agregando datos/categoría a mi card
    const cardImg = document.createElement("div"); //Agregar img a la card
    cardImg.classList.add("card-img"); //Mandar a traer la img
    const img = document.createElement("img"); //Crea elemento img
    img.setAttribute("src", character.image);
    cardImg.appendChild(img); //Anida img en cardImg
    cardMold.appendChild(cardImg); //Anida en cardMold

    //Mostrando nombre
    const container = document.createElement("div");//Creando div para contenedor de nombre
    container.classList.add("container");
    const charName = document.createElement("h1");  //Characters name
    charName.classList.add("name");
    charName.innerText = character.name;
    container.appendChild(charName);
    //Especie
    const species = document.createElement("h2");
    species.classList.add("species")
    species.innerText = "Species: " + character.species;
    container.appendChild(species);
    //Type
    const type = document.createElement("h2");
    type.classList.add("type")
    type.innerText = "Type: " + character['type'];
    if (character.type) {
      container.appendChild(type);
    }
    //Género
    const gender = document.createElement("h2");
    gender.classList.add("gender")
    gender.innerText = "Gender: " + character.gender;
    container.appendChild(gender);
    //Estatus
    const status = document.createElement("h2");
    status.classList.add("status")
    status.innerText = "Status: " + character.status;
    container.appendChild(status);
    //Lugar de origen
    const origin = document.createElement("h2");
    origin.classList.add("origin")
    origin.innerText = "Origin: " + character.origin.name;
    container.appendChild(origin);
    //Locaciones
    const locations = document.createElement("h2");
    locations.classList.add("location")
    locations.innerText = "Last known location: " + character.location.name;
    container.appendChild(locations);
    //Episodios
    const episodes = document.createElement("h2");
    episodes.classList.add("episodes")
    //Es un arreglo, hay que iterar sobre cada elemento y usar .split para recuperar el núm del episodio
    const epNumbs = character["episode"].map((episode) => {//Tiene mi array de núms
      const urlNum = episode.split("/");//Contiene array con elements separados
      const lastNumb = urlNum[urlNum.length - 1];
      return lastNumb;
    })
    episodes.innerText = "Episodes: " + epNumbs.join(", ");
    container.appendChild(episodes);
    cardMold.appendChild(container);
    document.getElementById("cards").appendChild(cardMold); //Anida en cards
  }
}

window.onload = () => {
  showAllCharacters(data.results) //No retorna nada porque solo quiero que muestre cards
  document.getElementById("searchBtn").onclick = searchButton; //Ejecuta mi función al escuchar click
  const orderSelect = document.getElementById("order");
  orderSelect.addEventListener("change", () => {
    const categoSelect = document.getElementById("filtMain").value; //Llama valor del select
    const inpTxt = document.getElementById("searchInp").value; //Llama valor del input
    const orderType = document.getElementById("order").value;//llama el valor del orden
    const characters = getData(categoSelect, inpTxt, orderType, data);//utiliza la función getData para retornar data filtrada y ordenada
    showAllCharacters(characters);
  });
};

function searchButton() {
  const categoSelect = document.getElementById("filtMain").value; //Llama valor del select
  const inpTxt = document.getElementById("searchInp").value; //Llama valor del input
  const filteredResult = filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult

  showAllCharacters(filteredResult);
  if (inpTxt) { //Condiciona que el input no quede vacío
    const filteredResult = filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult
    document.getElementById("root").style.display = "block";
    document.querySelector(".cards").style.display = "none";
    document.querySelector(".noSearch").style.display = "none";
    showAllCharacters(filteredResult);
  }
  else {
    document.querySelector(".noSearch").style.display = "flex";
    document.querySelector(".cards").style.display = "none";
  }
  document.getElementById("order").value = "relevance";

}

document.getElementById("clear").addEventListener("click", limpiar);
function limpiar() {
  document.getElementById("root").style.display = "none";
  document.querySelector(".cards").style.display = "flex";
  document.querySelector(".noSearch").style.display = "none";
  document.getElementById("searchInp").value = "";
  document.getElementById("order").value = "relevance";
  document.getElementById("filtMain").value = "name";
  showAllCharacters(data.results);
}

document.getElementById("allCharacts").addEventListener("click", showAll);
function showAll() {
  document.getElementById("root").style.display = "flex";
  document.querySelector(".cards").style.display = "none";
  document.querySelector(".noSearch").style.display = "none";
  document.getElementById("searchInp").value = "";
  document.getElementById("order").value = "relevance";
  document.getElementById("filtMain").value = "name";

  showAllCharacters(data.results);
}