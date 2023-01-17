import ghibli from "./data/ghibli/ghibli.js"
// TITULOS: creacion de nuevo obj con map, definiendo las categorías que se mostraran en el DOM
export const titleList = () => {

  return ghibli.films.map((movieObject) => {
    return {
      title: movieObject.title,
      director: movieObject.director,
      producer: movieObject.producer,
      release_date: movieObject.release_date,
      poster: movieObject.poster,
    }
  });
}

// DIRECTORES: listamos los directores de films ghibli y usamos ...new Set para que no se repitan los elementos 
export const listaDirectores = () => {
  const directoresg = ghibli.films.map((direcList) => {
    return direcList.director;
  });
  return [...new Set(directoresg)]; // retorna array de directores
}

// Filtro de peliculas por director
export const peliculasDirector = (director) => {
  return (ghibli.films.filter((elementFilm) => {
    return elementFilm.director === director;
    
  }));
 
}

// export const cantElements = () => {
//  // return titleList.length;
// }
//console.log(ghibli.films.elementFilm.length);
//titleList.elements;

    // console.log("asc", dirsingular.sort());
    // console.log("desc", dirsingular.reverse());