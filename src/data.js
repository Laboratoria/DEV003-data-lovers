import data from './data/ghibli/ghibli.js'
//funcion que devuelve data a main
const dataMovies = data.films;
//funcion para ordenar años de lanzamiento asc. Toma los valores del elemento, los compara y devuelve la comparación
export const sortMovies = (opUp, opDown) => {
  //comparar elementos del objeto.
  const compare = (a, b) => {
//esta comparando release date, si a es mayor que b
    if (a.release_date > b.release_date) {
      return 1;
    }
    else {
      return -1;
    }
  }
  //sort option downward retorna 
  if (opDown === "downward") {
    //retorna opUp sort y toma la comparacion de arriba y reversa el array
    return opUp.sort(compare).reverse();
  }

  else {
    return opUp.sort(compare);
  }

};

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