import { titleList } from './data.js';
// import data from './data/lol/lol.js';

// console.log(titleList());
// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

console.log(titleList());

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

// const charactersHTML = () => {
//   const datosPersonajes = peopleList();
//   let html = ''
//   datosPersonajes.forEach((itemCharacter) => {

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

  //     for(...){
  //         lugarDelista.innerHTML += `<li> <h4> ${peliculas[i].title} </h4> </li>`
  //     }





// console.log(example, data);





// for (let index = 0; index < films.length; index++) { 
//   const peliculas = films[index]; 

//   const titulo = peliculas.title;
//   console.log('Peliculas:', titulo);
// }

// console.log('origen', films);
// const respuesta = films.map(item => item.name)
// console.log('rspuesta', respuesta);
// const peopleName = people.filter(item => item.name === "Dola")
// console.log('respuesta', peopleName);


// console.log(example, data);