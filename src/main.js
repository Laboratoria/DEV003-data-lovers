import { obtenerData } from './data.js';
// import data from './data/lol/lol.js';
obtenerData();  //2do una vez importado
const peliculas= obtenerData();
console.log(peliculas);



function llenarLista(){
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




// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
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

