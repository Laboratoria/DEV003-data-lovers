import { titleList, peliculasDirector } from './data.js';

// declaracion de variables a utilizar
const contenedorDisplayPeliculasPorTitulos = document.getElementById("listaTitulos"); // esta variable llama a la etiqueta vacía del HTML
const botonLista = document.getElementById("botonAZ"); // esta variable llama el botón A-Z
const contenedorListaDirectores = document.getElementById("directorList"); // esta variable llama a la barra de selector de directores

// funcionalidad del botón hacia arriba
window.topFunction = () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
}

// función del boton AZ
botonLista.addEventListener("click", () => {

  contenedorDisplayPeliculasPorTitulos.innerHTML = ''; // se vacía el contenedor de las películas

  const titulosOrdenados = titleList().sort((a, b) => {
    const tituloA = a.titulo.toLowerCase();
    const tituloB = b.titulo.toLowerCase();

    if (tituloA < tituloB) {
      return -1;
    }
    if (tituloA > tituloB) {
      return 1;
    }
    return 0;
  });
  titulosHTML(titulosOrdenados);
//   titulosOrdenados.forEach((itemFilm) => {
//     contenedorDisplayPeliculasPorTitulos.innerHTML += `
//   <div class="contenedorPeliculas">
//   <div>
//     <img class="miniaturaPeliculas" src="${itemFilm.poster}">
//   </div>
//   <div class="descripcionPeliculas">
//     <p> "${itemFilm.title}"</p>
//     <p> Release Date: "${itemFilm.release_date}"</p>
//     <p> Director: "${itemFilm.director}"</p>
//     <p> Producer: "${itemFilm.producer}"</p>
//   </div>
// </div>`
//   });
});

//LISTA DE TITULOS DE PELICULAS
const titulosHTML = (listaPeliculas) => {

  let html = ''
  listaPeliculas.forEach((itemFilm) => {

    html += `
  <div class="contenedorPeliculas">
    <div>
      <img class="miniaturaPeliculas" src="${itemFilm.poster}">
    </div>
    <div class="descripcionPeliculas">
      <p> "${itemFilm.title}"</p>
      <p> Release Date: "${itemFilm.release_date}"</p>
      <p> Director: "${itemFilm.director}"</p>
      <p> Producer: "${itemFilm.producer}"</p>
    </div>
  </div>`
  })
  contenedorDisplayPeliculasPorTitulos.innerHTML = html
}
titulosHTML(titleList());

//Selector de Filtros - Directores - ++EN PRUEBA++
const directorsHTML = () => {
  
  let html = ''

  html += `
        <label for="directorSelect"></label>
        <select class="busquedaDirector" name="directores" id="directorSelect">
           <option value="">—Busca por Directores—</option>
            <option value="Hayao Miyazaki">Hayao Miyazaki</option>
            <option value="Isao Takahata">Isao Takahata</option>
            <option value="Yoshifumi Kondō">Yoshifumi Kondō</option>
            <option value="Hiroyuki Morita">Hiroyuki Morita</option>
            <option value="Gorō Miyazaki">Gorō Miyazaki</option>
            <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
        </select>`
  contenedorListaDirectores.innerHTML = html
}
directorsHTML();
console.log(titulosHTML.length);

// funcionalidad *select directores*
// Seleccionar de la lista de directores
const selectElement = document.getElementById("directorSelect");
//console.log(selectElement);
// agregar el evento change al elemento select
selectElement.addEventListener("change", (event) => {
  const directorSeleccionado = event.target.value;
  titulosHTML(peliculasDirector(directorSeleccionado));

  // document.getElementById("nroElementos").addEventListener("load", function(){ 
  //   cantElements.textContent = cantElements.length;
  // });
  let numb = document.getElementById("listaTitulos").childElementCount;
  document.getElementById("nroElementos").innerHTML = numb;

  
  // document.getElementById("nroElementos").innerHTML = "Se encontraron"
  //   + peliculasDirector.length
  //console.log(peliculasDirector(directorSeleccionado));
  //console.log("select", peliculasDirector("Hayao Miyazaki"));
});

// window.addEventListener("load", function() {
//   var cantElementos
//   document.getElementById('change').addEventListener()
// })

//*FUNCIONALIDAD SELECT PRODUCTORES*
//*FUNCIONALIDAD BOTON LIMPIAR*
//*FUNCIONALIDAD CONTADOR DE ELEMENTOS EN LA PAGINA TITULOS*