//import data from './data/ghibli/ghibli.js'
//funcion que devuelve data a main pendiente


//funcion para ordenar años de lanzamiento asc. Toma los valores del elemento, los compara y devuelve la comparación
export const sortMovies = (opUp, opDown) => {
  //comparar elementos del objeto.
  const compareElement = (a, b) => {
    //esta comparando release date, si a es mayor que b, para determinar el orden
    if (a.release_date > b.release_date) {
      return 1;
    }
    else {
      return -1;
    }
  }
  //sort option downward retorna 
  if (opDown === "downward") {
    //retorna opUp sort compare de arriba y reversa el array
    return opUp.sort(compareElement).reverse();
  }
  //caso contrario retorna upward
  else {
    return opUp.sort(compareElement);
  }

};
//console.log(dataMovies.title)

// declaracion de funcion ordenar de la A-Z y Z-A 
export function sortName(dataMovies, sortFinish) {
  const sortAz = dataMovies.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  //investigar porque za no funciona sin reverse
  const sortZa = dataMovies.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  //Az del html
  if (sortFinish === "Az") {
    return sortAz.reverse();  
  } else if (sortFinish === "Za") {
    return sortZa;
  }
}

// filtro de director
export const filterDirector = (dataMovies, conditionDirector) => {
  //Filter  toma el array del dataMovie
  const filterDir = dataMovies.filter((dataMovie) => {
    //console.log(conditionDirector)
    //console.log(dataMovie)
    if (conditionDirector === dataMovie.director) {
      return true;
    }
    else {
      return false;
    }
  });
  return filterDir;
};
