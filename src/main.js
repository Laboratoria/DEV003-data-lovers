import { titleList, listaDirectores, peliculasDirector } from './data.js';
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
    </div>
  </div>`

  })
  document.getElementById("lista").innerHTML = html
}
titulosHTML();


// lista de directores
listaDirectores().forEach ((itemDirector) => {
  console.log(peliculasDirector(itemDirector));
})



// lista de personajes para después
// const charactersHTML = () => {
//   const datosPersonajes = peopleList();
//   let html = ''
//   datosPersonajes.forEach((itemCharacter, index) => {


//     html += `
//    <div class="contenedorPeliculas">
//       <div>
//         <img class="miniaturaPeliculas" src="${itemCharacter.imagen}" alt="personajes por título">
//       </div>
//       <div class="descripcionPeliculas">  
//           <p> Name: "${itemCharacter.nombre}"</p>
//           <p> Gender: "${itemCharacter.genero}"</p>
//           <p class="descripcionPeliculas"> Age: "${itemCharacter.edad}"</p>
//           <p class="descripcionPeliculas"> Eye Color: "${itemCharacter.colorDeOjos}"</p>
//           <p class="descripcionPeliculas"> Hair Color: "${itemCharacter.colorDePelo}"</p>
//       </div>
//     </div>`

//   })
//   document.getElementById("characterList").innerHTML = html
// }
// charactersHTML();


// console.log(example, data);