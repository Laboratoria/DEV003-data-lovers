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
    // console.log("objetopelicula", movieObject);
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

export const peopleList = () => {

  return ghibli.films.map((movieObject) => {
    return movieObject.people.map((characterObject) => {
      return {
        nombre: characterObject.name,
        genero: characterObject.gender,
        edad: characterObject.age,
        colorDeOjos: characterObject.eye_color,
        colorDePelo: characterObject.hair_color,
        imagen: characterObject.img
      };
    });
  });
}

// Filtro de peliculas por director
export const directorList = () => {
  return ghibli.films.filter((e) => {
    return e.director === "Hayao Miyazaki";
  });

}


// export const directoresFiltrados = () => {

  const directoresg = ghibli.films.map((t) => {
    return t.director;
  });
  const dirsingular = [...new Set(directoresg)]
  console.log(dirsingular);
  console.log(dirsingular.sort());
  console.log(dirsingular.reverse());
}

// export const ejemplo =() => {
//   // console.log (ghibli.films.map((t) => {
// return t.director;
//   }));
//  }


//listar directores y usamos ...new Set para que no se repitan los elementos 
