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
