//import ghibli from './data/ghibli/ghibli.js'
import { randomMovie } from './data.js'
import data from './data/ghibli/ghibli.js'

//console.log(data.films) //funciona tomando las peliculas//dom
const dataMovies = data.films;
const showResult = document.getElementById('returnFunction');

const azar = document.getElementById('RandomBtn');
azar.addEventListener("click", randomMovie(dataMovies));
showResult.innnerHTML= randomMovie(dataMovies);

console.log(randomMovie(dataMovies))


//forEach para recorrer el array y que retorne el elemento que seleccionamos callback, title
dataMovies.forEach(function(film) 
{
  //parametro title, como llamar people
  console.log(film.title) 
});


//all-movies-cards


//specie funcion filter para HU penelope sub categoria
//director funcion filter HU Omar
//title para sort? HU camila
//release_date sort? HU camila

