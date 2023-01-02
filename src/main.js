import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//Implementar método que recorra toda mi data de R&M
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

    document.getElementById("cards").appendChild(cardMold); //Anida en cards

    //Mostrando nombre
    //Creando div para contenedor de nombre
    let container=document.createElement("div");
    container.classList.add("container");
    //Characters name
    let charName=document.createElement("h1");
    charName.classList.add("name");
    charName.innerText=character.name;

    container.appendChild(charName);

    cardMold.appendChild(container);
}

//const characters=data.results;
// const filter=characters.filter((character) => {
    
//     return character.id===200
// })

// console.log(filter);
