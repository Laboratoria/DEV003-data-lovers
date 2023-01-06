import data from './data/ghibli/ghibli.js'
const dataMovies = data.films;
//funciona pero toma todos los elementos del array, lo muestra como un objeto 

export const Miyazaki = dataMovies.filter(function(dataMovies){
  return dataMovies.director === 'Hayao Miyazaki'
}
else if ()

);

// como mejorar la funcion para cada uno de los directores
/* export const Miyazaki = dataMovies.filter((dataMovies) => {
  return dataMovies.director === 'Hayao Miyazaki'
});

//funcionando, retorna solo peliculas de miyazaki pero el array  */

