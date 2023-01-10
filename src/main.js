//Aquí se manipula el DOM y se le agregan eventos
import data from './data/rickandmorty/rickandmorty.js';

import { filterData, getData } from './data.js';



function showAllCharacters(characters){
    document.getElementById("cards").innerHTML=("");
    for (let character of characters){
      //Crear card de molde para reutilizar
      let cardMold=document.createElement("div");
      //Agregando datos/categoría a mi card
      cardMold.classList.add("cardMold");
      //Agregar img a la card
      let cardImg=document.createElement("div");
      cardImg.classList.add("card-img");
      //Mandar a traer la img
      let img=document.createElement("img"); //Crea elemento img
      img.setAttribute("src", character.image);
      cardImg.appendChild(img); //Anida img en cardImg
      cardMold.appendChild(cardImg); //Anida en cardMold
  
      //Mostrando nombre
      //Creando div para contenedor de nombre
      let container=document.createElement("div");
      container.classList.add("container");
      //Characters name
      let charName=document.createElement("h1");
      charName.classList.add("name");
      charName.innerText=character.name;
  
      container.appendChild(charName);
  
      //Especie
      let species=document.createElement("h2");
      species.classList.add("species")
      species.innerText= "Species: " + character.species;
      container.appendChild(species);
  
      //Type
      let type=document.createElement("h2");
      type.classList.add("type")
      type.innerText="Type: " + character['type'];
      if (character.type) {
        container.appendChild(type);
      }
  
      //Género
      let gender=document.createElement("h2");
      gender.classList.add("gender")
      gender.innerText= "Gender: " + character.gender;
      container.appendChild(gender);
  
      //Estatus
      let status=document.createElement("h2");
      status.classList.add("status")
      status.innerText= "Status: " + character.status;
      container.appendChild(status);
      
      //Lugar de origen
      let origin=document.createElement("h2");
      origin.classList.add("origin")
      origin.innerText= "Origin: " + character.origin.name;
      container.appendChild(origin);
  
      //Locaciones
      let locations=document.createElement("h2");
      locations.classList.add("location")
      locations.innerText= "Last known location: " + character.location.name;
      container.appendChild(locations);
  
  
      //Episodios
      let episodes=document.createElement("h2");
      episodes.classList.add("episodes")
    //Es un arreglo, hay que iterar sobre cada elemento y usar .split para recuperar el núm del episodio
      const epNumbs=character["episode"].map((episode)=>{//Tiene mi array de núms
        const urlNum=episode.split("/");//Contiene array con elements separados
        const lastNumb=urlNum[urlNum.length -1];
        
        return lastNumb;
      })
      episodes.innerText= "Episodes: " + epNumbs.join(", ");
      container.appendChild(episodes);
  
      
  
      cardMold.appendChild(container);
      document.getElementById("cards").appendChild(cardMold); //Anida en cards
    }
  }
  
window.onload = (event) => {
    showAllCharacters(data.results) //No retorna nada porque solo quiero que muestre cards
    // console.log(showAllCharacters);

    document.getElementById("searchBtn").onclick = searchButton; //Ejecuta mi función al escuchar click
    const orderSelect = document.getElementById("order");
    orderSelect.addEventListener("change", (e) => {
        const categoSelect = document.getElementById("filtMain").value; //Llama valor del select
        const inpTxt = document.getElementById("searchInp").value; //Llama valor del input
        const orderType = document.getElementById("order").value
        const characters = getData(categoSelect, inpTxt, orderType, data);
        showAllCharacters(characters);
     });

    //.onclick=searchButton; //Ejecuta mi función al escuchar click

};
function searchButton() {
    const categoSelect = document.getElementById("filtMain").value; //Llama valor del select
    const inpTxt = document.getElementById("searchInp").value; //Llama valor del input

    // if (categoSelect==="allCharacters") {
    //     document.getElementById("root").style.display="block";//Muestra cards personajes
    //     document.querySelector(".cards").style.display="none";//Oculta cards
    //     document.querySelector(".noSearch").style.display="none";
    //     showAllCharacters(data.results);
    //     return
    // }

    const filteredResult = filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult

        showAllCharacters(filteredResult);
        console.log(categoSelect);
        console.log(inpTxt);

    if (inpTxt) { //Condiciona que el input no quede vacío
        const filteredResult = filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult
        document.getElementById("root").style.display="block";
        document.querySelector(".cards").style.display="none";
        document.querySelector(".noSearch").style.display="none";
        showAllCharacters(filteredResult);
        console.log(categoSelect);
        console.log(inpTxt);
    }
    else {
        document.querySelector(".noSearch").style.display="flex";
        document.querySelector(".cards").style.display="none";
    }
   
};



document.getElementById("clear").addEventListener("click", limpiar);
function limpiar(){
    document.getElementById("root").style.display="none";
    document.querySelector(".cards").style.display="flex";
    document.querySelector(".noSearch").style.display="none";
    document.getElementById("searchInp").value="";
}

document.getElementById("allCharacts").addEventListener("click", allCharacts)
function allCharacts() {
  document.getElementById("root").style.display="block";//Muestra cards personajes
  document.querySelector(".cards").style.display="none";//Oculta cards
  document.querySelector(".noSearch").style.display="none";
}

  //  export const ordenA = (data) => ordenAlf(data);
  //  export const ordenZ= (data) => ordenA(data).reverse();




