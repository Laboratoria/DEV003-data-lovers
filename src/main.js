import { ordenarAz, ordenarZa, inferior, superior } from './data.js';
import data from './data/pokemon/pokemon.js';

const btnWelcome = document.getElementById("btn-change-view");
let card = document.getElementById("gallery");
const poke = data.pokemon;

btnWelcome.addEventListener("click", () => {
    // buscar el elemento que tiene la clase "section-welcome y hacerlo invisible a partir de su display"
    // .... "section-pokemones" y hacerlo visible a partir de su display 
    const sectionWelcome = document.getElementById("section-welcome");
    sectionWelcome.style.display = "none";

    const sectionPokemons = document.getElementById("section-pokemons");
    sectionPokemons.style.display = "inline";
});

poke.map((pokemon) => {
    card.innerHTML +=
        `<div class="pokemon" id="${pokemon.num}">
            <div class="pk_num"># ${pokemon.num}</div>
            <div class="info">
            <p class="img" ><img src="${pokemon.img}" height="90"></p>
            <button class="btnPoke" name="btnPoke">
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
        `<div class="pokemon2" id="${pokemon.num}">
        <div class="pk_num2"># ${pokemon.num}
        <button class="equis" id="equis"> X </button>
        </div>
        <div class="info2">
        <p class="img2"><img src="${pokemon.img}" height="130"></p>
            <p class="text-modal">${pokemon.about}</p><br>
            <div class= "modalInfo">
            <p class="text-modal"> <span class="name-card">Height</span><br> ${pokemon["size"].height}</p>
            <p class="text-modal"> <span class="name-card"> Weight</span><br> ${pokemon["size"].weight}</p>
            <div class="text-modal"> <span class="name-card">Attack</span><br> ${pokemon["special-attack"].map((ataque) =>
            `<li class="ataqueClass2 ${ataque}">${ataque.name}</li>`).join("")}</div>
            <div class="text-modal"> <span class="name-card">Weaknesses</span><br> ${pokemon["weaknesses"].map((debilidad) =>
                `<li class="ataqueClass2 ${debilidad}">${debilidad}</li>`).join("")}</div> 
            <div class="text-modal"> <span class="name-card">Resistant</span><br> ${pokemon["resistant"].map((resistencia) =>
                    `<li class="ataqueClass2 ${resistencia}">${resistencia}</li>`).join("")}</div> 
            </div>
            </div>
    </div>`;

    const close = document.getElementById("equis");
    close.addEventListener("click", () => {
        document.getElementById('detallePokemon').style.display = "none";
        removeChildNodes(cardDetalle);
    });
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const ordenar = document.getElementById("sorterPokemon");
ordenar.addEventListener("change", () => {
    let pokemones;
    if (ordenar.value != "-1") {
        if (ordenar.value == "low") {
            pokemones = inferior(poke);
            removeChildNodes(card);
        } else if (ordenar.value == "top") {
            pokemones = superior(poke);
            removeChildNodes(card);
        } else if (ordenar.value == "byaz") {
            pokemones = ordenarAz(poke);
            removeChildNodes(card);
        } else if (ordenar.value == "byza") {
            pokemones = ordenarZa(poke);
            removeChildNodes(card);
        }

        for (let i = 0; i < pokemones.length; i++) {
            card.innerHTML +=
                `<div class="pokemon" id="${pokemones[i].num}">
                    <div class="pk_num"># ${pokemones[i].num}</div>
                    <div class="info">
                    <p class="img" ><img src="${pokemones[i].img}" height="100"></p>
                    <button class="btnPoke" name="btnPoke">
                    <p class="textPoke">${pokemones[i].name}</p>
                    </button>
                    <br>
                    <br>
                    <div> ${pokemones[i].type.map((type) =>
                    `<span class="ataqueClass ${type}">${type}</span>`).join(" / ")}
                    </div>
                </div>`;
        }
    }
});
