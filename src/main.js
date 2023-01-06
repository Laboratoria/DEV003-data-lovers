//import ghibli from './data/ghibli/ghibli.js'
import { Miyazaki, sortMoviesA, Takahata } from './data.js'
import data from './data/ghibli/ghibli.js'

const dataMovies = data.films;
const moviesList = document.getElementById('showMovies');
//declaramos el html vacio para luego insertar con innerHtml
let htmlCode = '';

//declaramos funcion para mostrar la data de las peliculas mediante un innerHTML
function printMovies(){
//tomamos cada dato del array con un forEach, recorre todo el array y retorna los datos que elegimos más abajo
  dataMovies.forEach(function(singleMovieObjects)
  {
  //elementos que se insertaran desde la data al html
  //html += not an addition, but a full overwrite.  htmlCode = htmlCode +
    htmlCode +=
    `
      <div>
      <img clas="poster" src="${singleMovieObjects.poster}"/>
      <p>Title: ${singleMovieObjects.title}</p>
      <p>Director: ${singleMovieObjects.director}</p>
      <p>Producer: ${singleMovieObjects.producer}</p>
      <p>Release date: ${singleMovieObjects.release_date}</p>

      </div>

  `;
    //we now say let the inside of that div take in our htmlCode variable that holds our html codes.*/
  });
  moviesList.innerHTML= htmlCode;
}
printMovies(dataMovies);

/*funcion para ordenar ascendente funcionando en consola
let orderMovie=dataMovies.sort(sortMoviesA);
orderMovie.forEach(function(film){
  console.log(film.title +' '+ film.director + ' ' + film.release_date)});
*/


/*
Miyazaki.forEach(function(film){
console.log(film.title +' '+ film.director + ' ' + film.release_date)});
*/

/*
Takahata.forEach(function(film){
  console.log(film.title +' '+ film.director + ' ' + film.release_date)});
*/

/*
//specie funcion filter para HU penelope sub categoria
//director funcion filter HU Omar
//title para sort? HU camila
release_date sort? HU camila
*/
