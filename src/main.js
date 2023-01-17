import { titleList, peliculasDirector } from './data.js';

// declaracion de variables a utilizar
const contenedorDisplayPeliculasPorTitulos = document.getElementById("listaTitulos"); // esta variable llama a la etiqueta vacía del HTML de títulos
const botonLista = document.getElementById("botonAZ"); // esta variable llama el botón A-Z
const contenedorListaDirectores = document.getElementById("directorList") // esta variable llama a la barra de selector de directores
const topButton = document.getElementById("topBtn") // esta variable llama al botón de scroll hacia arriba

// funcionalidad del botón hacia arriba
topButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
});

// funcionalidad del boton A-Z
botonLista.addEventListener("click", () => {

  contenedorDisplayPeliculasPorTitulos.innerHTML = ''; // se vacía el contenedor de las películas

  // const titulosOrdenados = titleList().reverse(); // método utilizado para ordenar de la Z a la A, pero no sé cómo usarlo XD
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

  titulosOrdenados.forEach((itemFilm) => {

    contenedorDisplayPeliculasPorTitulos.innerHTML += `
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
  });
});


//LISTA DE TITULOS DE PELICULAS
const titulosHTML = (listaPeliculas) => {

  let html = ''

  listaPeliculas.forEach((itemFilm) => {

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
titulosHTML(titleList());

//LISTA DE DIRECTORES FILTRADA
const directorsHTML = () => {

  let html = ''

  html += `
        <label for="directorSelect"></label>
        <select class="busquedaDirector" name="directores" id="directorSelect">
           <option value="">— Busca por Director —</option>
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


// Seleccionar de la lista de directores
const selectElement = document.getElementById("directorSelect");

// agregar el evento change al elemento select
selectElement.addEventListener('change', (event) => {

  const directorSeleccionado = event.target.value;
  titulosHTML(peliculasDirector(directorSeleccionado));

});

// console.log(example, data);