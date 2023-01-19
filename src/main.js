//import ghibli from './data/ghibli/ghibli.js'
import data from './data/ghibli/ghibli.js'
import { sortMovies, filterDirector, sortName } from './data.js'
//console.log(data)

const dataMovies = data.films;
const moviesList = document.getElementById('showMovies');
const sortSelectUp = document.getElementById('orderYear');
const filterMovies = document.getElementById('directorMovie');
const sortSelectName=document.getElementById("orderNameMovies");

//declaramos el html vacio para luego insertar con innerHtml
//declaramos funcion para mostrar la data de las peliculas mediante un innerHTML, se pasa de funcio global a  cada parametro asignado movie
// para poder reflejar el filtro
function printMovies(movies){
  let printHtml = ''; 
  //tomamos cada dato del array con un forEach, recorre todo el array y retorna los datos que elegimos más abajo
  movies.forEach(function(singleMovie)
  {
  //elementos que se insertaran desde la data al html
  //html += not an addition, but a full overwrite.  printHtml = printHtml+
    printHtml +=
    `
      <div class="caja">  
        <div class="card-container">
      <img class="poster-Image" src="${singleMovie.poster}"/>
      <p class="title-card">Title: ${singleMovie.title}</p>
      <p class="text-card">Director: ${singleMovie.director}</p>
      <p class="text-card">Producer: ${singleMovie.producer}</p>
      <p class="text-card">Release date: ${singleMovie.release_date}</p>
     
       </div>
      
      </div>
  `;
    //we now say let the inside of that div take in our htmlCode variable that holds our html codes.*/
  });
  //se insertan los datos en el container de HTML
  moviesList.innerHTML= printHtml;
}
printMovies(dataMovies);

//se ejecuta la funcion con el change en el orderYear, evento desde el DOM
sortSelectUp.addEventListener('change', MoviesSortUp)
function MoviesSortUp(){
  const sortRelease = sortSelectUp.value;
  //moviesSorted va a ser la funcion de sort, tomando la data y el value del id
  const moviesSorted=sortMovies(dataMovies, sortRelease);
  printMovies(moviesSorted);
}


//funcion orden de director //

filterMovies.addEventListener('change',selectFilterMovie)
function selectFilterMovie() {
  const nameDirector = filterMovies.value;
  const optionDirector= filterDirector (dataMovies, nameDirector);
  printMovies(optionDirector);
}

//función orden A-Z y Z-A
sortSelectName.addEventListener('change',movieSortName )
function movieSortName () {
  const movieByName = sortSelectName.value;
  //namesortselect toma la funcion que esta tomando sortName (que es la funcion del data) y el moviebyName (los value del html)
  const nameSortSelect= sortName (dataMovies, movieByName);
  printMovies(nameSortSelect);
}
