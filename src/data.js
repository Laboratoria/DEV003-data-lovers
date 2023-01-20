import ghibli from "./data/ghibli/ghibli.js"
// TITULOS: creacion de nuevo obj con map, definiendo las categorías que se mostraran en el DOM
export const titleList = (data = ghibli.films) => {

  return data.map((movieObject) => {

    return {
      titulo: movieObject.title,
      director: movieObject.director,
      productor: movieObject.producer,
      lanzamiento: movieObject.release_date,
      poster: movieObject.poster,
      personajes: movieObject.people
    }
  });
}

// función del botón de orden alfabético
export const ordenadorAZ = (titulosIndependientes) => { 
  return titulosIndependientes.sort((a, b) => {
    const tituloA = a.titulo.toLowerCase();
    const tituloB = b.titulo.toLowerCase();

    if (tituloA < tituloB) {
      return -1;
    }
    if (tituloA > tituloB) {
      return 1;
    }
    return 0;
  })};

// DIRECTORES: Filtro de peliculas por director
export const peliculasDirector = (director) => {
  return (titleList().filter((titulosPorDirector) => {
    return titulosPorDirector.director === director;
  }));
}


//  listar directores y usamos ...new Set para que no se repitan los elementos 
// export const listaDirectores = () => {

//   const directoresg = ghibli.films.map((listaCompletaDirectores) => {
//     return listaCompletaDirectores.director;
//   });
//   return [ ...new Set(directoresg)];
// }
