import { titleList, listaDirectores, peliculasDirector } from './data.js';
// import data from './data/lol/lol.js';


// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

// Lista de Títulos
const titulosHTML = () => {
  const datosProcesados = titleList();
  let html = ''
  datosProcesados.forEach((itemFilm) => {

    html += `
  <div class="contenedorPeliculas">
    <div>
      <img class="miniaturaPeliculas" src="${itemFilm.poster}" alt="Castle in the Sky">
    </div>
    <div class="descripcionPeliculas">
      <p> "${itemFilm.titulo}"</p>
      <p> Release Date: "${itemFilm.lanzamiento}"</p>
      <p> Director: "${itemFilm.director}"</p>
      <p> Producer: "${itemFilm.productor}"</p>
    </div>
  </div>`
  })
  document.getElementById("listaTitulos").innerHTML = html
}
titulosHTML();

// lista de directores filtrada
listaDirectores().forEach ((itemDirector) => {
  console.log(peliculasDirector(itemDirector));
})

// selector de filtros
const directorsHTML = () => {
  const directorList = listaDirectores();
  // console.log("lista de personajes de todas las peliculas como string con su imagen",datosPersonajes);
  let html = ''
  // directorList.forEach((itemDirector) => {
  // console.log("personajes",itemCharacter, index);
  html += `
        <label for="directorSelect">Películas por Director:</label>
        <select name="directores" id="directorSelect">
           // <option value="">--Elige un Director para ver sus películas--</option>
            <option value="Hayao">Hayao Miyazaki</option>
            <option value="Hayao2">Hayao2</option>
            <option value="dir3">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>`
  // })
  document.getElementById("directorList").innerHTML = html
}
directorsHTML();
listaDirectores();

// funcionalidad barra select directores
const selectElement = document.getElementById("directorSelect");

// agregar el evento change al elemento select
selectElement.addEventListener('change', (event) => {
  
  console.log("select", peliculasDirector("Hayao Miyazaki"));
});

// funcionalidad *botón a-z*
// const selectElement = document.getElementById("directorSelect");
// selectElement.addEventListener('change', (event) => {
//   alert("Hola");
// });

// console.log(example, data);