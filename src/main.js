import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const personajes = data.characters
const libros = data.books



if (document.getElementById("search") !== null) {
  document.getElementById("search").addEventListener("click", buscar);
}

function buscar() {
  const name = getName()
  console.log(name)
  for (let i = 0; i < personajes.length; i++) {

    if (personajes[i].name.toUpperCase() === name.toUpperCase()) {

      const mensaje = "This character is: " + personajes[i].name + ". It belongs to House " + personajes[i].house
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
window.addEventListener("load", books)
function books() {
  //ingresar las datas de los libros
  let todosLibros = ""
  for (let i = 0; i < libros.length; i++) {
    todosLibros = todosLibros + `<div class="libro">
      <img src="${libros[i].picture}">
      <p>${libros[i].releaseDay}</p>
      <p>${libros[i].title}</p>
    </div>`
  }


  document.getElementById("root").innerHTML= `
  <section id="ocultarLibros"> 
    <div id="container" class="flex-container">
      <div class="libro-contenedor" id="libro-contenedor"> 
      ${todosLibros}
      </div>
    </div>
  </section>`
}

function houses() {

  document.getElementById("root").innerHTML = `
    <section id="mostrarCasas">
      <div class="card-wrapper">
        <div class="inside-wrapper">
          <a class="w-100 casalink" data-house="Gryffindor">
            <img class="w-100" src="HPG.jpg" />
            <div class="houseinfo">
              Gryffindor values courage, bravery, nerve, and chivalry. Gryffindor's mascot is the lion, and its
              colours are scarlet red and gold
            </div>
          </a>

          <a class="w-100 casalink" data-house="Hufflepuff">
            <img class="w-100" src="HPH.jpg" />
            <div class="houseinfo">
              Hufflepuff values hard work, patience, justice, and loyalty. The house mascot is the badger, and
              canary yellow and black
            </div>
          </a>
        </div>

        <div id="bannerCentral" class="inside-wrapper">
          <img id="HP2" src="HP2.jpg" />
          <div id="ActiveHouse">

          </div>
        </div>

        <div class="inside-wrapper">
          <a class="w-100 casalink" data-house="Slytherin">
            <img class="w-100" src="HPS.jpg" />
            <div class="houseinfo">
              Slytherin values ambition, cunning, leadership, and resourcefulness. The house mascot of Slytherin is
              the serpent, and the house colours are green and silver.
            </div>
          </a>

          <a class="w-100 casalink" data-house="Ravenclaw">
            <img class="w-100" src="HPR.jpg" />
            <div class="houseinfo">
              Ravenclaw values intelligence, learning, wisdom and wit. The house mascot is an eagle and the house
              colours are blue and bronze
            </div>
          </a>
        </div>

      </div>
      <div id="card-template">
      </div>
    </section> `



//java busca todos los "casa link"
document.querySelectorAll('.casalink').forEach((item) => {
  item.addEventListener('click', function (){
    //el banner se activa
    const bannerCentral = document.getElementById("bannerCentral");
    bannerCentral.classList.add("active"); 
    //Ya tenemos que casa es
    const searchHouse = this.getAttribute("data-house"); 
    /*const todaLaCasa = personajes.filter(function(persona){
      return persona.house === searchHouse;
    }).map(function (persona){
      return persona.name;
    }); */
    const activeHouse = document.getElementById("ActiveHouse");
    activeHouse.innerHTML = "";
    todaLaCasa.forEach(function(name){
      activeHouse.innerHTML += "<p>" + name + "</p>";
    });
    
  });
});
}


const mostrarLibros = document.getElementById('getBooks');
  mostrarLibros.addEventListener("click", books);

const mostrarCasas = document.getElementById('getHouses');
mostrarCasas.addEventListener("click", houses);


 //const mostrarHome = document.getElementById('getHome');
 //mostrarHome.addEventListener("click",home);


