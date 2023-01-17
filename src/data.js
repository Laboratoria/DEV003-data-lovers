import data from './data/ghibli/ghibli.js'
//funcion que devuelve data a main
const dataMovies = data.films;
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
    //retorna opUp sort y toma la comparacion de arriba y reversa el array
    return opUp.sort(compareElement).reverse();
  }
//caso contrario retorna los elementos comparados
  else {
    return opUp.sort(compareElement);
  }

};
/*
// declaracion de funcion ordenar de la A-Z y Z-A
export function sortName (dataMovies, sortFinish)
const sortAz = dataMovies.array.sort ((a,b)=>{
  if(a.name.toLowerCase() < b.name.toLowerCase()) {
return 1;
  }
if(a.name.toLowerCase() > b.name.toLowerCase()) {
return -1;
}
return 0;
});
const sortZa = dataMovies.sort ((a,b)=>{
  if(a.name.toLowerCase() > b.name.toLowerCase()) {
return -1;
  }
if(a.name.toLowerCase() < b.name.toLowerCase()) {
return 1;
}
return 0;
});
if(sortFinish === A-Z){
return sortAz;
} else if(sortFinish === Z-A){
  return sortZa;
};
*/

// filtro de directo
export const filterDirector =(dataMovies, conditionDirector) =>{
//Filter es el toma el array del "dataMovies//
const filterDir = dataMovies.filter((dataMovie) =>{
  //console.log(conditionDirector)
  //console.log(dataMovie)
if (conditionDirector === dataMovie.director){
return true;
}
else{
return false;
}
});
return filterDir;
};

