// estas funciones son de ejemplo
import data from './data/rickandmorty/rickandmorty.js';

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export function showAllCharacters(){
  document.getElementById("cards").innerHTML=("");
  for (let character of data.results){
    console.log(character.name);
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
    species.innerText= "Especie: " + character.species;
    container.appendChild(species);

    //Género
    let gender=document.createElement("h2");
    gender.classList.add("gender")
    gender.innerText= "Género: " + character.gender;
    container.appendChild(gender);

    //Estatus
    let status=document.createElement("h2");
    status.classList.add("status")
    status.innerText= "Status: " + character.status;
    container.appendChild(status);
    
    //Lugar de origen
    let origin=document.createElement("h2");
    origin.classList.add("origin")
    origin.innerText= "Origen: " + character.origin.name;
    container.appendChild(origin);

    //Locaciones
    let locations=document.createElement("h2");
    locations.classList.add("location")
    locations.innerText= "Última ubicación: " + character.location.name;
    container.appendChild(locations);


    //Episodios
    let episodes=document.createElement("h2");
    episodes.classList.add("episodes")
    //episodes.innerText=character.episode; Es un arreglo, hay que iterar sobre cada elemento y usar .split para recuperar el núm del episodio
    container.appendChild(episodes);

    

    cardMold.appendChild(container);
    document.getElementById("cards").appendChild(cardMold); //Anida en cards
  }
}
export function searchButton(){
  const filtOpt=document.getElementById("filtMain").value;
  const inpTxt=document.getElementById("searchInp").value;
  console.log(filtOpt);
  console.log(inpTxt);
}
//Obtener valor de input txt en una variable
//Otra funcion filterData 3 paráms: data, input, categor
//Arriba let x const porque no se reasigna
//filterData recibe toda la data y la regresa filtrada
//Usar ejemplo que tngo en main.js

  

//export function filterData(data, filterType, string)