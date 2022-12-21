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
      const mensaje = "Este personaje es:" + personajes[i].name + ". Pertenece a la casa " + personajes[i].house
      // alert(mensaje)

      getDivMensajeUsuario().innerHTML = `<div id='divmensaje'>${mensaje}</div>`

    }
  }
}

function getDivMensajeUsuario() {
  return document.getElementById("mensajeUsuario")
}

function getName() {
  return document.getElementById("informationbox").value
}
