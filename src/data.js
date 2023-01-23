import data from "./data/harrypotter/data.js";

export function getData(category) {
  const catArray = data[category];
  return catArray;
}

export function createCharEl(character, dataSection) {
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
  dataSection.append(personaje);
}

export function charFilters(charArr, genderFilter, houseFilter) {
  let filtered = charArr;
  if (genderFilter !== "Gender") {
    filtered = filtered.filter((character) => {
      return character.gender === genderFilter;
    });
  }
  if (houseFilter !== "House") {
    filtered = filtered.filter((character) => {
      return String(character.house) === houseFilter;
    });
  }
  return filtered;
}

export function sortMe(items) {
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
}

export function calculo(characters, filterValue) {
  const [genderFilter, houseFilter] = filterValue;
  const characterFilters = charFilters(characters, genderFilter, houseFilter);
  const total = characters.length;
  const totalFilter = characterFilters.length;
  let gender = "";
  let house = "";
  switch (genderFilter) {
    case "Male":
      gender = "hombres";
      break;
    case "Female":
      gender = "mujeres";
      break;
  }
  switch (houseFilter) {
    case "Gryffindor":
      house = "Gryffindor";
      break;
    case "Slytherin":
      house = "Slytherin";
      break;
    case "Ravenclaw":
      house = "Ravenclaw";
      break;
    case "Hufflepuff":
      house = "Hufflepuff";
      break;
  }
  return `Hay ${totalFilter} ${gender} ${house} de ${total} personajes`;
}


export function createBooksEl(book, dataLibros) {
  const libro = document.createElement("div");
  libro.setAttribute("class", "book-card");
  libro.innerHTML = `<ul class="book-info">
  <li><center><h3>${book.title}</li>
  <li><center><img src=${book.imagen} width="120" height="200px"></li>
  <li>Release Day: ${book.releaseDay}</li>
  <li>author: ${book.author}</li>
  <li>Description: ${book.description}</li>
  </ul>`;
  dataLibros.append(libro);

}

export function crearPociones(potion, dataPotions) {
  const pocion = document.createElement("div");
  pocion.setAttribute("class", "potion-card");
  pocion.innerHTML = `<ul class="potion-info">
  <li><center><h3> ${potion.name}</li>
  <li>${potion.description}</li>
  </ul>`;
  dataPotions.append(pocion);
}

