import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const personajes = data.characters


if (document.getElementById("search") !== null) {
  document.getElementById("search").addEventListener("click", buscar);
}

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

//java busca todos los "casa link"
document.querySelectorAll('.casalink').forEach((item) => {
  item.addEventListener('click', function (){
    //el banner se activa
    const bannerCentral = document.getElementById("bannerCentral");
    bannerCentral.classList.add("active"); 
    //Ya tenemos que casa es
    const searchHouse = this.getAttribute("data-house"); 
    const todaLaCasa = personajes.filter(function(persona){
      return persona.house === searchHouse;
    }).map(function (persona){
      return persona.name;
    }); 
    const activeHouse = document.getElementById("ActiveHouse");
    activeHouse.innerHTML = "";
    todaLaCasa.forEach(function(name){
      activeHouse.innerHTML += "<p>" + name + "</p>";
    });
    
  });
});
const mostrarLibros = document.getElementById('getBooks');
mostrarLibros.addEventListener("click",function(){
  document.getElementById("mostrarCasas").style.display = "none";
  document.getElementById("ocultarLibros").style.display = "block";
});

const mostrarCasas = document.getElementById('getHouses');
mostrarCasas.addEventListener("click",function(){
  document.getElementById("ocultarLibros").style.display = "none";
  document.getElementById("mostrarCasas").style.display = "block";

});

const mostrarHome = document.getElementById('getHome');
mostrarHome.addEventListener("click",function(){
  document.getElementById("mostrarCasas").style.display = "block";
  document.getElementById("ocultarLibros").style.display = "none";
});


