import {
  getData,
  sortMe,
  createCharEl,
  charFilters,
  calculo,
  createBooksEl,
  crearPociones
} from "./data.js";

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
  document.getElementById("filtros-data").style.display = "none";
  const containerBooks = document.querySelector("#data-libros", "#data-Pociones");
  containerBooks.innerHTML = "";
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
  calculoPersonajes.innerHTML = calculo(
    characters,

    [genderFilterSelect.value, houseFilterSelect.value]
  );
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

  calculoPersonajes.innerHTML = calculo(
    characters,

    [genderFilterSelect.value, houseFilterSelect.value]
  );
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

//BUSCADOR PERSONAJES
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

//MENU RESPONSIVE
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// MOSTRAR LIBROS
const books = getData("books");
const booksPage = document.querySelector(".books");
const dataLibros = document.querySelector("#data-libros");

booksPage.addEventListener("click", () => {
  booksPage.setAttribute("class", "subrayado"); 
  document.getElementById("filtros-data").style.display = "none";
  const containerCharacters = document.querySelector("#data-libros");
  containerCharacters.innerHTML = "";

  for(var i=0; i<books.length; i++){
    createBooksEl(books[i], dataLibros)
  }
  
});

// MOSTRAR POTIONS

const potions = getData('potions');
const potionsPage= document.querySelector(".potions");
const dataPotions= document.querySelector("#data-libros");
potionsPage.addEventListener("click", () => {
  potionsPage.setAttribute("class", "subrayado");
  document.getElementById("filtros-data").style.display = "none";
  const containerCharacters = document.querySelector("#data-libros");
  containerCharacters.innerHTML = "";


  for(var i=0; i<potions.length; i++){
    crearPociones(potions[i], dataPotions);
  }
});


