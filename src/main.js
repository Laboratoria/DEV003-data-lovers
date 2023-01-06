import data from "./data/harrypotter/data.js";
const { characters } = data;

const charactersPage = document.querySelector(".characters");

const charactersDiv = document.querySelector(".showCharacters");
const genderFilter = document.querySelector("#gender");
const houseFilter = document.querySelector("#house");
const clearFilter = document.querySelector("#limpiar");

charactersPage.addEventListener("click", () => {
  characters.map((character) => {
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
  });
});

let filtered = characters;

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
    return String(character.house) === e.target.value;
  });
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

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") e.target.value = " ";
    document.querySelectorAll(".character-card").forEach((character) => {
      character.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? character.classList.remove("filtro")
        : character.classList.add("filtro");
    });
  }
});
