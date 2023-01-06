import data from "./data/harrypotter/data.js";

const { characters } = data;

let filtered = characters;
sortMe(filtered); //llama la funcion para ordenar, es la primera que corre

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
