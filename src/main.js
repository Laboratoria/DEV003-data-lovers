import { obtenerPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

const btnWelcome = document.getElementById("btn-change-view");
let card = document.getElementById("gallery");

btnWelcome.addEventListener("click", () => {
    // buscar el elemento que tiene la clase "section-welcome y hacerlo invisible a partir de su display"
    // .... "section-pokemones" y hacerlo visible a partir de su display 
    const sectionWelcome = document.getElementById("section-welcome");
    sectionWelcome.style.display = "none";

    const sectionPokemons = document.getElementById("section-pokemons");
    sectionPokemons.style.display = "inline";
});

obtenerPokemon(data).map((pokemon, index) => {
    card.innerHTML +=
        `<div class="pokemon" id="${pokemon.num}">
            <div class="pk_num"># ${pokemon.num}</div>
            <div class="info">
            <p class="img" ><img src="${pokemon.img}" height="100"></p>
            <button id="${index}" class="btnPoke" name="btnPoke">
            <p class="textPoke">${pokemon.name}</p>
            </button>
            <br>
            <br>
            <div> ${pokemon.type.map((type) =>
            `<span class="ataqueClass ${type}">${type}</span>`).join(" / ")}
            </div>
        </div>`;
});

//Armar las tarjetas para cada pokemon

const pokemon = document.querySelectorAll(".pokemon");
//console.log(pokemon)
pokemon.forEach((p) => {  //genero un evento para los 251 pokemones
    p.addEventListener("click", (e) => {
        //console.log(data.pokemon[parseInt(e.currentTarget.id) - 1]);
        let idPoke = parseInt(e.currentTarget.id) - 1;
        detallePokemon(idPoke);
    });
});

function detallePokemon(idPoke) {

    let pokemon = data.pokemon[idPoke];
    let cardDetalle = document.getElementById("detallePokemon");
    cardDetalle.style.display = "block";
    cardDetalle.innerHTML +=
        `<div class="pokemon" id="${pokemon.num}">
        <div class="pk_num"># ${pokemon.num}
        <button class="equis" id="equis"> X </button>
        </div>
        <p class="img"><img src="${pokemon.img}"></p>
            <p class="textPoke">${pokemon.about}</p><br>
            <div class= "modalInfo">
            <p class="textPoke"> <span class="name-card">Height</span><br> ${pokemon["size"].height}</p>
            <p class="textPoke"> <span class="name-card"> Weight</span><br> ${pokemon["size"].weight}</p>
            <div class="textPoke"> <span class="name-card">Attack</span><br> ${pokemon["special-attack"].map((ataque) =>
            `<li class="ataqueClass ${ataque}">${ataque.name}</li>`).join("")}</div>
            <div class="textPoke"> <span class="name-card">Weaknesses</span><br> ${pokemon["weaknesses"].map((debilidad) =>
                `<li class="ataqueClass ${debilidad}">${debilidad}</li>`).join("")}</div> 
            <div class="textPoke"> <span class="name-card">Resistant</span><br> ${pokemon["resistant"].map((resistencia) =>
                    `<li class="ataqueClass ${resistencia}">${resistencia}</li>`).join("")}</div> 
            </div>
    </div>`;
}
