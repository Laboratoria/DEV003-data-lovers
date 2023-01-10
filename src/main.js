import { ejemplo } from './data.js';
// import data from './data/lol/lol.js';

// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

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

      for(let index = 0; index < peliculas.length; index++) {
          lugarDelista.innerHTML += `<section> <ul> ${peliculas[i].title} </ul> </section>`
    }
}

// function llenarLista1(){
//   const lugarDelista1 = document.getElementById("idlista1");

//     for(let index = 0; index < peliculas.length; index++) {
//         lugarDelista1.innerHTML += `<li> ${peliculas[i].title} </li>`
  //     }
// }








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

