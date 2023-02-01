import { ordenarAz, ordenarZa, inferior, superior, filtraTipos } from './data.js';
import data from './data/pokemon/pokemon.js';

const btnWelcome = document.getElementById("btn-change-view");
const card = document.getElementById("gallery");
const poke = data.pokemon;

//Para el cambio de Vista.

btnWelcome.addEventListener("click", () => {
  // buscar el elemento que tiene la clase "section-welcome y hacerlo invisible a partir de su display"
  // .... "section-pokemones" y hacerlo visible a partir de su display 
  const sectionWelcome = document.getElementById("section-welcome");
  sectionWelcome.style.display = "none";

  const sectionPokemons = document.getElementById("section-pokemons");
  sectionPokemons.style.display = "inline";
});

//Mostrar el total de pokemones en la galería.

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
    const idPoke = parseInt(e.currentTarget.id) - 1;
    detallePokemon(idPoke);
  });
});

function detallePokemon(idPoke) {
  const pokemon = data.pokemon[idPoke];
  const cardDetalle = document.getElementById("detallePokemon");
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

//Función para remover las cartas 
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//Función que muestra el array por tipos según lo seleccionado por el usuario

const filtrar = document.getElementById("tipoPokemon");
const ordenar = document.getElementById("sorterPokemon");

filtrar.addEventListener("change", () => {
  if (filtrar.value !== "-1") {
    removeChildNodes(card);
    let pokes;
    pokes = filtraTipos(filtrar.value, poke);

    if (ordenar.value !== "-1") {
      if (ordenar.value === "low") {
        pokes = inferior(pokes);
      } else if (ordenar.value === "top") {
        pokes = superior(pokes);
      } else if (ordenar.value === "byaz") {
        pokes = ordenarAz(pokes);
      } else if (ordenar.value === "byza") {
        pokes = ordenarZa(pokes);
      }
    }
    //console.log(filtraTipos(filtrar.value, pokes));

    pokes.map((pokemon) => {
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

    const pokemon = document.querySelectorAll(".pokemon");
    //console.log(pokemon)
    pokemon.forEach((p) => {  //genero un evento para los 251 pokemones
      p.addEventListener("click", (e) => {
        //console.log(data.pokemon[parseInt(e.currentTarget.id) - 1]);
        const idPoke = parseInt(e.currentTarget.id) - 1;
        detallePokemon(idPoke);
      });
    });

  }
});


//Ordenar A-Z, Z-A, Ascendente, Descendente.

ordenar.addEventListener("change", () => {
  if (ordenar.value !== "-1") {
    let pokes;
    removeChildNodes(card);

    if (ordenar.value === "low") {
      if (filtrar.value !== "-1") {
        pokes = filtraTipos(filtrar.value, poke);
        pokes = inferior(pokes);
        console.log(pokes);
      } else {
        pokes = inferior(poke);
      }
    } else if (ordenar.value === "top") {
      if (filtrar.value !== "-1") {
        pokes = filtraTipos(filtrar.value, poke);
        pokes = superior(pokes);
        console.log(pokes);

      } else {
        pokes = superior(poke);
      }
    } else if (ordenar.value === "byaz") {
      if (filtrar.value !== "-1") {
        pokes = filtraTipos(filtrar.value, poke);
        pokes = ordenarAz(pokes);
        console.log(pokes);

      } else {
        pokes = ordenarAz(poke);
      }
    } else if (ordenar.value === "byza") {
      if (filtrar.value !== "-1") {
        pokes = filtraTipos(filtrar.value, poke);
        pokes = ordenarZa(pokes);
        console.log(pokes);

      } else {
        pokes = ordenarZa(poke);
      }
    }

    pokes.map((pokemon) => {
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

    const pokemon = document.querySelectorAll(".pokemon");
    //console.log(pokemon)
    pokemon.forEach((p) => {  //genero un evento para los 251 pokemones
      p.addEventListener("click", (e) => {
        //console.log(data.pokemon[parseInt(e.currentTarget.id) - 1]);
        const idPoke = parseInt(e.currentTarget.id) - 1;
        detallePokemon(idPoke);
      });
    });

  }
});