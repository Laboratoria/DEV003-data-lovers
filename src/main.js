import { obtenerData } from './data.js';
// import data from './data/lol/lol.js';
obtenerData();
const peliculas= obtenerData();
console.log(peliculas);

function llenarLista(){
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