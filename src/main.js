//import ghibli from './data/ghibli/ghibli.js'
import data from './data/ghibli/ghibli.js'
//import { randomMovie } from './data.js'
const dataMovies = data.films;
//declaramos donde se mostraran las peliculas
const moviesList = document.getElementById('showMovies');
//declaramos el html vacio para luego insertar con innerHtml
let htmlCode = ``;
//tomamos cada dato del array con un forEach, recorre el array y retorna los datos que elegimos más abajo
dataMovies.forEach(function(singleMovieObjects) 
{
  htmlCode =
    htmlCode +
    `
      <img src="${singleMovieObjects.poster}" alt="${singleMovieObjects.imageAlt}">
      <p>title: ${singleMovieObjects.title}</p>
      <p>description: ${singleMovieObjects.description}</p>
      <p>director: ${singleMovieObjects.director}</p>
      <p>producer: ${singleMovieObjects.producer}</p>
      <p>release_date: ${singleMovieObjects.release_date}</p>

      </div>

  `;
  //console.log(htmlCode);

});
moviesList.innerHTML= htmlCode

/*
//specie funcion filter para HU penelope sub categoria
//director funcion filter HU Omar
//title para sort? HU camila
release_date sort? HU camila
*/
