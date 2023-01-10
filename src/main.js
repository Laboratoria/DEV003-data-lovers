import { ejemplo } from './data.js';
// import data from './data/lol/lol.js';


console.log(ejemplo());

const armarHTML = () => {
  const datosProcesados = ejemplo();
  let html = ''
  datosProcesados.forEach((ej) => {

    // document.getElementById("inventado").innerHTML +=
    // html +=  `<div class="ejemplo">
    //   <img src="${ej.poster}" alt="">
    //   <h3>${ej.title}</h3>
    //   <p>${ej.director}</p>
    // </div>`

    ////////////
    html += `
  <li class="contenedorPeliculas">
          <img class="miniaturaPeliculas"
            src="${ej.poster}"
            alt="Castle in the Sky">
          <p class="descripcionPeliculas">
          "${ej.titulo}"
            Año de lanzamiento: "${ej.lanzamiento}"
            Director: "${ej.director}"
            Productor: "${ej.productor}"
          </p>
        </li>`

  })
  document.getElementById("test").innerHTML = html
}
armarHTML();


//para mostrarlo en el DOM
function llenarLista() {
  const lugarDelista = document.getElementById("idlista");

  //     for(...){
  //         lugarDelista.innerHTML += `<li> <h4> ${peliculas[i].title} </h4> </li>`
  //     }
}



// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

// console.log(example, data);