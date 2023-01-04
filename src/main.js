//import ghibli from './data/ghibli/ghibli.js'
import data from './data/ghibli/ghibli.js'
//import { randomMovie } from './data.js'
const dataMovies = data.films;
//declaramos donde se mostraran las peliculas
const moviesList = document.getElementById('showMovies');
//declaramos el html vacio para luego insertar con innerHtml
let htmlCode = ``;
//tomamos cada dato del array con un forEach, recorre todo el array y retorna los datos que elegimos más abajo
dataMovies.forEach(function(singleMovieObjects)
{
  //imagen de arriety link roto
  //elementos que se insertaran desde la data al html 
  htmlCode = htmlCode +
    `
      <div>
      
      <img src="${singleMovieObjects.poster}">
      <p>Title: ${singleMovieObjects.title}</p>
      <p>Description: ${singleMovieObjects.description}</p>
      <p>Director: ${singleMovieObjects.director}</p>
      <p>Producer: ${singleMovieObjects.producer}</p>
      <p>Release date: ${singleMovieObjects.release_date}</p>

      </div>

  `;
  /*console.log(htmlCode); funciona, luego tomamos movieList definido más arriba para insertarlo
//we now say let the inside of that div take in our htmlCode variable that holds our html codes.*/
});
moviesList.innerHTML= htmlCode

/*
//specie funcion filter para HU penelope sub categoria
//director funcion filter HU Omar
//title para sort? HU camila
release_date sort? HU camila
*/
