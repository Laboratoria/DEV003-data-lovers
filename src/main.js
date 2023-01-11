import { titleList, peopleList, ejemplo } from './data.js';
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
  document.getElementById("lista").innerHTML = html
}
titulosHTML();

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
ejemplo();

//     html += `
//     <div id="characterList" class="dosColumnas">
//       <ul class="columnaPersonajes">
//         <li class="miniaturaDescripcion">
//           <img class="miniatura" src="${itemCharacter.imagen}" alt="personajes por título">
//           <p class="descripcionPersonaje"> Name: "${itemCharacter.nombre}"</p>
//           <p class="descripcionPersonaje"> Gender: "${itemCharacter.genero}"</p>
//           <p class="descripcionPersonaje"> Age: "${itemCharacter.edad}"</p>
//           <p class="descripcionPersonaje"> Eye Color: "${itemCharacter.colorDeOjos}"</p>
//           <p class="descripcionPersonaje"> Hair Color: "${itemCharacter.colorDePelo}"</p>
//         </li>
//       </ul>
//     </div>`

//   })
//   document.getElementById("characterList").innerHTML = html
// }
// charactersHTML();


// console.log(example, data);