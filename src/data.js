import ghibli from "./data/ghibli/ghibli.js"

// lista completa de peliculas y sus datos correspondientes
// export const obtenerData = () => {

//   return ghibli.films.map((movieObject) => {
//     return movieObject.title
//   });
// }
// creacion de nuevo obj con map, que se mostrara en el DOM
export const titleList = () => {

  return ghibli.films.map((movieObject) => {
    return {
      titulo: movieObject.title,
      director: movieObject.director,
      productor: movieObject.producer,
      lanzamiento: movieObject.release_date,
      poster: movieObject.poster,
      personajes: movieObject.people[0].name
    }
  });
}

// export const peopleList = () => {

//   return ghibli.films.map((characterObject) => {
//     return {
//       nombre: characterObject.name,
//       genero: characterObject.gender,
//       edad: characterObject.age,
//       colorDeOjos: characterObject.eye_color,
//       colorDePelo: characterObject.people[0].hair_color,
//       imagen: characterObject.people[0].img
//     }
//   });
// }



//export const example = () => {
//return 'example';
//};
