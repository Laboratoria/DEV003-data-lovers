import ghibli from "./data/ghibli/ghibli.js"
// TITULOS: creacion de nuevo obj con map, definiendo las categorías que se mostraran en el DOM
export const titleList = () => {

  return ghibli.films.map((movieObject) => {

    return {
      titulo: movieObject.title,
      director: movieObject.director,
      productor: movieObject.producer,
      lanzamiento: movieObject.release_date,
      poster: movieObject.poster,
    }
  });
}
//  listar directores y usamos ...new Set para que no se repitan los elementos 
export const listaDirectores = () => {

  const directoresg = ghibli.films.map((t) => {
    return t.director;
  });
  return [ ...new Set(directoresg)];
}

// DIRECTORES: Filtro de peliculas por director
export const peliculasDirector = (director) => {
  return (ghibli.films.filter((e) => {
    return e.director === director;
  }));
}
 
// orden A-Z
//   const dirsingular = 
//   console.log(dirsingular);
//   console.log("asc", dirsingular.sort());
//   console.log("desc", dirsingular.reverse());
// }


// lista completa de peliculas y sus datos correspondientes - estructura
// export const obtenerData = () => {

//   return ghibli.films.map((movieObject) => {
//     return movieObject.title
//   });
// }
