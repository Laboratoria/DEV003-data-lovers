//import ghibli from './data/ghibli/ghibli.js'
import data from './data/ghibli/ghibli.js'
import { sortMovies } from './data.js'
//console.log(data)

const dataMovies = data.films;
const moviesList = document.getElementById('showMovies');
const sortSelectUp=document.getElementById('orderYear');


//declaramos el html vacio para luego insertar con innerHtml
//declaramos funcion para mostrar la data de las peliculas mediante un innerHTML
function printMovies(){
  let printHtml = ''; 
//tomamos cada dato del array con un forEach, recorre todo el array y retorna los datos que elegimos más abajo
  dataMovies.forEach(function(singleMovie)
  {
  //elementos que se insertaran desde la data al html
  //html += not an addition, but a full overwrite.  printHtml = printHtml+
  printHtml = printHtml+
    `
      
      <div>
      <img class="poster-Image" src="${singleMovie.poster}"/>
      <p>Title: ${singleMovie.title}</p>
      <p>Director: ${singleMovie.director}</p>
      <p>Producer: ${singleMovie.producer}</p>
      <p>Release date: ${singleMovie.release_date}</p>
      </div>
      
  `;
    //we now say let the inside of that div take in our htmlCode variable that holds our html codes.*/
  });
  //se insertan los datos en el container de HTML
  moviesList.innerHTML= printHtml;
}
printMovies(dataMovies);

//se ejecuta la funcion con el change en el orderYear, evento desde el DOM
sortSelectUp.addEventListener('click', MoviesSortUp)
function MoviesSortUp(){
  let sortRelease = sortSelectUp.value;
  let moviesSorted;
  //moviesSorted va a ser la funcion de sort, tomando la data y el value del id
  moviesSorted=sortMovies(dataMovies, sortRelease);
  printMovies(MoviesSortUp);
} 

//  for each o llamado individual
//printMovies(nombreFuncion)

/*Miyazaki.forEach(function(film){
console.log(film.title +' '+ film.director + ' ' + film.release_date)});

Takahata.forEach(function(film){
  console.log(film.title +' '+ film.director + ' ' + film.release_date)});

/*
specie funcion filter para HU penelope sub categoria
director funcion filter HU Omar
release_date sort? HU camila
orden aleatorio zoe
*/
