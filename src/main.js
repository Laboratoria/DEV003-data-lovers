import { getData, sortMe, createCharEl, charFilters, calculo } from "./data.js";

const characters = getData("characters");
sortMe(characters);

const charactersPageBtn = document.querySelector(".characters");
const dataSection = document.querySelector("#show-data");
const genderFilterSelect = document.querySelector("#gender");
const houseFilterSelect = document.querySelector("#house");
const clearFilter = document.querySelector("#limpiar");
const calculoPersonajes = document.getElementById("calculo");

//MUESTRA TODOS LOS PERSONAJES
charactersPageBtn.addEventListener("click", () => {
  charactersPageBtn.setAttribute("class", "subrayado");
  document.querySelector(".filtros-data").style.display = "inline-block";
  characters.map((character) => {
    createCharEl(character, dataSection);
  });
  calculoPersonajes.innerHTML = "Hay 707 personajes";
});

//EVENTO PARA FILTROS
genderFilterSelect.addEventListener("change", () => {
  dataSection.replaceChildren();
  const filteredChars = charFilters(
    characters,
    genderFilterSelect.value,
    houseFilterSelect.value
  );
  filteredChars.map((char) => {
    createCharEl(char, dataSection);
  });
  calculo(calculoPersonajes, characters, [
    genderFilterSelect.value,
    houseFilterSelect.value,
  ]);
});

houseFilterSelect.addEventListener("change", () => {
  dataSection.replaceChildren();
  const filteredChars = charFilters(
    characters,
    genderFilterSelect.value,
    houseFilterSelect.value
  );
  filteredChars.map((char) => {
    createCharEl(char, dataSection);
  });
  calculo(calculoPersonajes, characters, [
    genderFilterSelect.value,
    houseFilterSelect.value,
  ]);
});

//CLEAR FILTER
clearFilter.addEventListener("click", () => {
  dataSection.replaceChildren();
  genderFilterSelect.value = "Gender";
  houseFilterSelect.value = "House";
  characters.map((character) => {
    createCharEl(character, dataSection);
  });
  calculoPersonajes.innerHTML = "Hay 707 personajes";
});

//BUSCADOR
document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") e.target.value = "";
    document.querySelectorAll(".character-card").forEach((character) => {
      character.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? character.classList.remove("filtro")
        : character.classList.add("filtro");
    });
  }
});
