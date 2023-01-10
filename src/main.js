import { titleList } from './data.js';
// import data from './data/lol/lol.js';

// console.log(titleList());

const titulosHTML = () => {
  const datosProcesados = titleList();
  let html = ''
  datosProcesados.forEach((itemFilm) => {

    html += `
  <div class="contenedorPeliculas">
    <div>
      <img class="miniaturaPeliculas" src="${itemFilm.poster}" alt="Castle in the Sky">
    </div>
    <div>
      <p class="descripcionPeliculas">"${itemFilm.titulo}"</p>
      <p class="descripcionPeliculas"> Release Date: "${itemFilm.lanzamiento}"</p>
      <p class="descripcionPeliculas"> Director: "${itemFilm.director}"</p>
      <p class="descripcionPeliculas"> Producer: "${itemFilm.productor}"</p>
      <p class="descripcionPeliculas"> Characters: "${itemFilm.personajes}"</p>
    </div>
  </div>`

  })
  document.getElementById("lista").innerHTML = html
}
titulosHTML();

const charactersHTML = () => {
  const datosPersonajes = peopleList();
  let html = ''
  datosPersonajes.forEach((itemCharacter) => {


    html += `
    <div id="characterList" class="dosColumnas">
      <ul class="columnaPersonajes">
        <li class="miniaturaDescripcion">
          <img class="miniatura" src="${itemCharacter.imagen}" alt="personajes por título">
          <p class="descripcionPersonaje"> Name: "${itemCharacter.nombre}"</p>
          <p class="descripcionPersonaje"> Gender: "${itemCharacter.genero}"</p>
          <p class="descripcionPersonaje"> Age: "${itemCharacter.edad}"</p>
          <p class="descripcionPersonaje"> Eye Color: "${itemCharacter.colorDeOjos}"</p>
          <p class="descripcionPersonaje"> Hair Color: "${itemCharacter.colorDePelo}"</p>
        </li>
      </ul>
    </div>`

  })
  document.getElementById("characterList").innerHTML = html
}
charactersHTML();



// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

// console.log(example, data);