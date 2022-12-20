import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const personajes = data.characters

document.getElementById("search").addEventListener("click", buscar)

function buscar() {
  const name = getName()
  console.log(name)
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].name === name) {
      alert("Este personaje es:" + personajes[i].house)

    }
  }

  function getName() {
    return document.getElementById("informationbox").value
  }

}



