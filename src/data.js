import data from './data/ghibli/ghibli.js'
const dataMovies = data.films;
// como mejorar la funcion para cada uno de los directores
export const Miyazaki = dataMovies.filter(function(film){
  return film.director === 'Hayao Miyazaki'
});

export const Takahata = dataMovies.filter(function(film){
  return film.director === 'Isao Takahata'
});
export const Kondo = dataMovies.filter(function(film){
  return film.director === 'Yoshifumi Kondo'
});
/*
Hiroyuki Morita
Goro Miyazaki
Hiromasa Yonebayashi
*/

//funcion para ordenar años de lanzamiento asc y desc realiza la comparacion
export function sortMoviesA (a, b){
  if (a.release_date < b.release_date) 
  {return -1;}
  if (a.release_date > b.release_date) {return 1;}
  return 0;
};
