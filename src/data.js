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

    // names must be equal
    return 0;
  });
}

export function calculo(div, characters, filterValue) {
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
  div.innerHTML = `Hay ${totalFilter} ${gender} ${house} de ${total} personajes`;
}
