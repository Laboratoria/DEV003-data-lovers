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

// DIRECTORES: Filtro de peliculas por director
export const peliculasDirector = (director) => {
  return (ghibli.films.filter((e) => {
    return e.director == director;
  }));
}
 
//  listar directores y usamos ...new Set para que no se repitan los elementos 
export const listaDirectores = () => {

  const directoresg = ghibli.films.map((t) => {
    return t.director;
  });
  return [ ...new Set(directoresg)];

  // orden A-Z
  // const dirsingular = 
  // console.log(dirsingular);
  // console.log("asc", dirsingular.sort());
  // console.log("desc", dirsingular.reverse());
}


// lista de personajes para después
// export const peopleList = () => {

//   return ghibli.films.map((movieObject) => {
//     return movieObject.people.map((characterObject) => {
//       return {
//         nombre: characterObject.name,
//         genero: characterObject.gender,
//         edad: characterObject.age,
//         colorDeOjos: characterObject.eye_color,
//         colorDePelo: characterObject.hair_color,
//         imagen: characterObject.img
//       };
//     });
//   });
// }

// lista completa de peliculas y sus datos correspondientes - estructura
// export const obtenerData = () => {

//   return ghibli.films.map((movieObject) => {
//     return movieObject.title
//   });
// }
