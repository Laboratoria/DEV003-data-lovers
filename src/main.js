import { obtenerPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

const btnWelcome = document.getElementById("btn-change-view");
let card = document.getElementById("gallery");

btnWelcome.addEventListener("click", () => {
    console.log("holamundo")
    // buscar el elemento que tiene la clase "section-welcome y hacerlo invisible a partir de su display"
    // .... "section-pokemones" y hacerlo visible a partir de su display 
    const sectionWelcome = document.getElementById("section-welcome");
    sectionWelcome.style.display = "none";

    const sectionPokemons = document.getElementById("section-pokemons");
    sectionPokemons.style.display = "inline";
});

obtenerPokemon(data).map((pokemon, index) => {
    card.innerHTML +=
        `<div class= "pokemon">
            <p class="pk_num"># ${pokemon.num}</p>
            <p class="img" ><img src="${pokemon.img}" height="100"></p>
            <button id="${index}" class="btnPoke" name="btnPoke">
            <p class="name">${pokemon.name}</p>
            </button>
            <div> ${pokemon.type.map((type) =>
            `<span class="ataqueClass ${type}">${type}</span>`).join(" / ")}
            </div>
             ${pokemon["generation"].name}</p>
        </div>`;

});

