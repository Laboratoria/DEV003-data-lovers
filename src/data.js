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
export const peliculasDirector =(director) => {
  return (ghibli.films.filter((elementFilm) => {
  return elementFilm.director == director;
 }));
}
 
//  listar directores y usamos ...new Set para que no se repitan los elementos 
export const listaDirectores = () => {

  const directoresg = ghibli.films.map((direcList) => {
    return direcList.director;
    });
    console.log([ ...new Set(directoresg)]); 
  return [ ...new Set(directoresg)];

}
    // const dirsingular = [ ...new Set(directoresg)]; 
    
    // console.log("asc", dirsingular.sort());
    // console.log("desc", dirsingular.reverse());
