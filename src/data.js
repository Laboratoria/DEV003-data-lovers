// 

//
export const buscarPersonajesPorCasa = (personajes, searchHouse) => {
  //arreglo de objetos le pusimos de nombre "toda la casa" y es igual al filtro y mapeo de párametro personajes 
  const todaLaCasa = personajes.filter(function(persona){
    //filtra por casa
    return persona.house === searchHouse;
    //filtra solo el nombre
  }).map(function (persona){
    //regresa sólo el nombre de las personas que pertenecen
    return persona.name;
  }); 
  return todaLaCasa
};


