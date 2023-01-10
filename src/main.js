import { titleList } from './data.js';
// import data from './data/lol/lol.js';


console.log(titleList());

const armarHTML = () => {
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
      <p class="descripcionPeliculas"> Año de lanzamiento: "${itemFilm.lanzamiento}"</p>
      <p class="descripcionPeliculas"> Director: "${itemFilm.director}"</p>
      <p class="descripcionPeliculas"> Productor: "${itemFilm.productor}"</p>
    </div>
  </div>`

  })
  document.getElementById("test").innerHTML = html
}
armarHTML();





// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

// console.log(example, data);