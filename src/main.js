import { titleList } from './data.js';
// import data from './data/lol/lol.js';

// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

console.log(titleList());

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
      <p class="descripcionPeliculas"> Año de lanzamiento: "${itemFilm.lanzamiento}"</p>
      <p class="descripcionPeliculas"> Director: "${itemFilm.director}"</p>
      <p class="descripcionPeliculas"> Productor: "${itemFilm.productor}"</p>
    </div>
  </div>`

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