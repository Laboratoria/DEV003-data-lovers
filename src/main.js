import { titleList, peliculasDirector, ordenadorAZ, contador, porcentajesDirector } from './data.js';

// declaración de variables a utilizar
const contenedorDisplayPeliculasPorTitulos = document.getElementById("listaTitulos"); // esta variable llama a la etiqueta vacía del HTML de títulos
const botonLista = document.getElementById("botonAZ"); // esta variable llama el botón A-Z
const contenedorListaDirectores = document.getElementById("directorList") // esta variable llama a la barra de selector de directores
const topButton = document.getElementById("topBtn") // esta variable llama al botón de scroll hacia arriba
let titleListGenerado = titleList(); // esta variable muestra el array de películas al cargar el DOM
let primerClick = true; // esta variable es un booleano que al cargar el DOM siempre será true
const numeroDeElementos = document.getElementById("calculosDirectores"); // variable que llama al contenedor de los elementos contados

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
  const titulosporDirectorSeleccionado = peliculasDirector(directorSeleccionado, titleListGenerado);
  
  if (directorSeleccionado === "" ) {
    titulosHTML(titleListGenerado); 
  }
  else {
    titulosHTML(titulosporDirectorSeleccionado);
  }
  
  porcentajesA(titleListGenerado, titulosporDirectorSeleccionado);
});

// lista completa de películas
const titulosHTML = (listaPeliculas) => {
  
  let html = ''
  
  listaPeliculas.forEach((itemFilm) => {

    html += `
  <div class="contenedorPeliculas">
    <div>
      <img class="miniaturaPeliculas" src="${itemFilm.poster}">
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
  //ejectummos la función de contador para que actualice cada vez que se filtre
}

// contador de elementos
const porcentajesA = (totales, porDirector) => { // acá se crea una función que le dará estructura a la sección de los cálculos en el DOM
  
  const numeroDePeliculasTotales = contador(totales);
  const numeroDePeliculasPorDirector = contador(porDirector);

  let html = ''

  html += `
        <div class="calculosDirectores">
          <p id="nroElementos" class="resultados">${numeroDePeliculasPorDirector} movies found</p>
          <p id="porcentajeElementos" class="resultados">${porcentajesDirector(numeroDePeliculasTotales, numeroDePeliculasPorDirector)} % of the total movies.</p>
        </div>`

  numeroDeElementos.innerHTML = html
}


// filtro de lista de directores
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

// funciones ejecutadas
titulosHTML(titleListGenerado);
directorsHTML(); 