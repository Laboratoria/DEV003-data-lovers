import { obtenerPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';   //cuando trabajen en los algoritmos de manejo de información se deben de trar cada función de ese archivo 

const btnWelcome = document.getElementById("btn-change-view");
let card = document.getElementById("main2");

btnWelcome.addEventListener("click", () => {
    console.log("holamundo")
    // buscar el elemento que tiene la clase "section-welcome y hacerlo invisible a partir de su display"
    // .... "section-pokemones" y hacerlo visible a partir de su display 
    const sectionWelcome = document.getElementById("section-welcome");
    sectionWelcome.style.display = "none";

    const sectionPokemons = document.getElementById("section-pokemons");
    sectionPokemons.style.display = "inline";
});

obtenerPokemon(data).map((pokemon) => {
    card.innerHTML +=
        `<div class= "front">
            <p class="name">${pokemon.name}</p>
            <p class="img" ><img src="${pokemon.img}"></p>
            <p class="pk_num">${pokemon.num}</p>
            <div><span class="name-card">Type</span><br> ${pokemon.type.map((type) =>
            `<span class="ataqueClass ${type}">${type}</span>`).join(" / ")}</div>
            <p><span class="name-card">Generation</span><br> ${pokemon["generation"].name}</p>
        </div>`;
});

