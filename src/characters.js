import data from "./data/harrypotter/data.js";

const { characters } = data;
const charactersDiv = document.querySelector(".showCharacters");
const genderFilter = document.querySelector("#gender");
const houseFilter = document.querySelector("#house");
const clearFilter = document.querySelector("#limpiar");

//una funcion que crea elementos
function createCharEl(character) {
  const personaje = document.createElement("div");
  personaje.setAttribute("class", "character-card");
  personaje.innerHTML = `<ul class="character-info">
  <li>Name: ${character.name}</li>
  <li>Birth: ${character.birth}</li>
  <li>Species: ${character.species}</li>
  <li>Gender: ${character.gender}</li>
  <li>House: ${character.house}</li>
  <li>Books: ${character.books_featured_in}</li>
  </ul>`;
  charactersDiv.append(personaje);
}

let filtered = characters;
sortMe(filtered); //llama la funcion para ordenar, es la primera que corre

filtered.map((character) => {
  createCharEl(character);
});

genderFilter.addEventListener("change", (e) => {
  charactersDiv.replaceChildren(); //reemplaza todos los hijos por nada
  filtered = characters.filter((character) => {
    return character.gender === e.target.value;
  });
  filtered.map((character) => {
    createCharEl(character);
  });
});

houseFilter.addEventListener("change", (e) => {
  charactersDiv.replaceChildren();
  filtered = characters.filter((character) => {
    return character.house === e.target.value;
  });

  //si characters.house === null devuelve null
  //else devuelve e.target.value
  // if (character.house === e.target.value) {
  //     return true;
  //   } else {
  //     return character.house === null;
  //   }

  filtered.map((character) => {
    createCharEl(character);
  });
});

clearFilter.addEventListener("click", () => {
  charactersDiv.replaceChildren();
  characters.map((character) => {
    createCharEl(character);
  });
});

//para ordenar alfabeticamente
function sortMe(items) {
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}
