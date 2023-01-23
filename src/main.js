//import { obtenerData, filtrarData, ordenarData, ... } from './data.js';   <-- cuando trabajen en los algoritmos de manejo de información se deben de trar cada función de ese archivo 

const btnWelcome = document.getElementById("btn-change-view");

btnWelcome.addEventListener("click", () => {
    console.log("holamundo")
    // buscar el elemento que tiene la clase "section-welcome y hacerlo invisible a partir de su display"
    // .... "section-pokemones" y hacerlo visible a partir de su display 
    const sectionWelcome = document.getElementById("section-welcome");
    sectionWelcome.style.display = "none";

    const sectionPokemons = document.getElementById("section-pokemons");
    sectionPokemons.style.display = "inline";
})

