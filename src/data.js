import ghibli from "./data/ghibli/ghibli.js"
// lista completa de peliculas y sus datos correspondientes
// export const obtenerData = () => {

//   return ghibli.films.map((movieObject) => {
//     return movieObject.title
//   });
// }
// creacion de nuevo obj con map, que se mostrara en el DOM
export const ejemplo = () => {

  return ghibli.films.map((movieObject) => {
    return {
      titulo: movieObject.title,
      director: movieObject.director,
      productor: movieObject.producer,
      lanzamiento: movieObject.release_date,
      poster: movieObject.poster
    }
  });
}



//export const example = () => {
//return 'example';
//};
