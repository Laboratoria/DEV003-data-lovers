import { titleList, peopleList, listaDirectores, peliculasDirector } from './data.js';
// import data from './data/lol/lol.js';


// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

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
    <div class="descripcionPeliculas">
      <p> "${itemFilm.titulo}"</p>
      <p> Release Date: "${itemFilm.lanzamiento}"</p>
      <p> Director: "${itemFilm.director}"</p>
      <p> Producer: "${itemFilm.productor}"</p>
      <p> Characters: "${itemFilm.personajes}"</p>
    </div>
  </div>`

  })
  document.getElementById("listaTitulos").innerHTML = html
}
titulosHTML();


// const titulosHTML = () => {
//   const datosProcesados = titleList();
//   let html = ''
//   datosProcesados.forEach((itemFilm) => {

//     html += `
//   <div class="contenedorPeliculas">
//     <div>
//       <img class="miniaturaPeliculas" src="${itemFilm.poster}" alt="Castle in the Sky">
//     </div>
//     <div class="descripcionPeliculas">
//       <p> "${itemFilm.titulo}"</p>
//       <p> Release Date: "${itemFilm.lanzamiento}"</p>
//       <p> Director: "${itemFilm.director}"</p>
//       <p> Producer: "${itemFilm.productor}"</p>
//       <p> Characters: "${itemFilm.personajes}"</p>
//     </div>
//   </div>`

//   })
//   document.getElementById("lista").innerHTML = html
// }
// titulosHTML();

const charactersHTML = () => {
  const datosPersonajes = peopleList();
  // console.log("lista de personajes de todas las peliculas como string con su imagen",datosPersonajes);
  let html = ''
  datosPersonajes.forEach((itemCharacter, index) => {

    // console.log("personajes",itemCharacter, index);

    html += `
   <div class="contenedorPeliculas">
      <div>
        <img class="miniaturaPeliculas" src="${itemCharacter.imagen}" alt="personajes por título">
      </div>
      <div class="descripcionPeliculas">  
          <p> Name: "${itemCharacter.nombre}"</p>
          <p> Gender: "${itemCharacter.genero}"</p>
          <p class="descripcionPeliculas"> Age: "${itemCharacter.edad}"</p>
          <p class="descripcionPeliculas"> Eye Color: "${itemCharacter.colorDeOjos}"</p>
          <p class="descripcionPeliculas"> Hair Color: "${itemCharacter.colorDePelo}"</p>
      </div>
    </div>`

  })
  document.getElementById("characterList").innerHTML = html
}
charactersHTML();

// ejemplo();
// peliculasDirector();
listaDirectores();
// listaDirectores().forEach ((itemDirector) => {
//   console.log("peliculas x director", peliculasDirector(itemDirector));
// })

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
            <option value="Hayao">Hayao</option>
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

//
const selectElement = document.getElementById("directorSelect");
selectElement.addEventListener('change', (event) => {
  alert("Hola");
});

// console.log(example, data);