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

// para ordenar alfabeticamente
export function sortMe(items) {
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

export function calculo(div, characters, charFilters, filterValue) {
  const total = characters.length;
  const totalFilter = charFilters.length;
  let gender = "";
  if (filterValue === "Male") {
    gender = "hombres";
  } else {
    gender = "mujeres";
  }
  div.innerHTML = `Hay ${totalFilter} ${gender} de ${total} personajes`;
}
