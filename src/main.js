import { titleList, peliculasDirector, ordenadorAZ } from './data.js';

// declaración de variables a utilizar
const contenedorDisplayPeliculasPorTitulos = document.getElementById("listaTitulos"); // esta variable llama a la etiqueta vacía del HTML de títulos
const botonLista = document.getElementById("botonAZ"); // esta variable llama el botón A-Z
const contenedorListaDirectores = document.getElementById("directorList") // esta variable llama a la barra de selector de directores
const topButton = document.getElementById("topBtn") // esta variable llama al botón de scroll hacia arriba
let titleListGenerado = titleList(); // esta variable muestra el array de películas al cargar el DOM
let primerClick = true; // esta variable es un booleano que al cargar el DOM siempre será true

// evento del botón hacia arriba
topButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
});

// evento del botón de orden alfabético (preguntar si esq el if else se deja en data.js)
botonLista.addEventListener("click", () => {

  contenedorDisplayPeliculasPorTitulos.innerHTML = ''; // se vacía el contenedor de las películas
  
  if (primerClick) {
    titleListGenerado = ordenadorAZ(titleListGenerado);
    primerClick = false;
  } else {
    titleListGenerado.reverse();
  }

  titulosHTML(titleListGenerado); // se ejecuta la función de títulos para ordenarlos en orden alfabético
});

// evento change al elemento select
contenedorListaDirectores.addEventListener('change', (event) => {

  const directorSeleccionado = event.target.value;
  titulosHTML(peliculasDirector(directorSeleccionado));

});

//lista completa de películas
const titulosHTML = (listaPeliculas) => {

  let html = ''

  listaPeliculas.forEach((itemFilm) => {
  //console.log(itemFilm.personajes); // crear for
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
  contenedorDisplayPeliculasPorTitulos.innerHTML = html
}

//filtro de lista de directores
const directorsHTML = () => {

  let html = ''

  html += `
        <select class="busquedaDirector" id="directorSelect" name="directores">
           <option value="">— Search by Director —</option>
            <option value="Hayao Miyazaki">Hayao Miyazaki</option>
            <option value="Isao Takahata">Isao Takahata</option>
            <option value="Yoshifumi Kondō">Yoshifumi Kondō</option>
            <option value="Hiroyuki Morita">Hiroyuki Morita</option>
            <option value="Gorō Miyazaki">Gorō Miyazaki</option>
            <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
        </select>`

  contenedorListaDirectores.innerHTML = html
}

titulosHTML(titleListGenerado);
directorsHTML();

// console.log(example, data);