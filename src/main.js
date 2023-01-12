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

    if (personajes[i].name.toUpperCase () === name.toUpperCase ()) {

      const mensaje = "This character is: " + personajes[i].name + ". It belongs to House " + personajes[i].house
      // alert(mensaje)

      getDivMensajeUsuario().innerHTML = `<div id='divmensaje'>${mensaje}</div>`

      if (personajes[i].name.toUpperCase() === name.toUpperCase()) {
        const mensaje = "This character is:" + personajes[i].name + ". Belongs to House " + personajes[i].house;
        // alert(mensaje)

        getDivMensajeUsuario().innerHTML = `<div id='divmensaje'>${mensaje}</div>`
      }
    }
  }
}
function getDivMensajeUsuario() {
  return document.getElementById("mensajeUsuario")
}

function getName() {
  return document.getElementById("informationbox").value
}

alert("Este personaje es:" + personajes[i].house)