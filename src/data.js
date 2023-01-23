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

// contador de elementos
export const contador = (listaPeliculas) => { // función "contador" al que se le pasa la lista completa de películas como parámetro, para contabilizar los elementos
  return listaPeliculas.length;
}

// porcentaje de películas
export const porcentajesDirector = (totales, porDirector) => { // función que mostrará los porcentajes por director. Se le brindan los parámetros del total de las películas y del listado por director
  return (porDirector * 100) / totales; // se hace la operación matemática que devolverá un número
}

//  listar directores y usamos ...new Set para que no se repitan los elementos 
// export const listaDirectores = () => {

//   const directoresg = ghibli.films.map((listaCompletaDirectores) => {
//     return listaCompletaDirectores.director;
//   });
//   return [ ...new Set(directoresg)];
// }
