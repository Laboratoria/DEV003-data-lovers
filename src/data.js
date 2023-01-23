// estas funciones son de ejemplo

export const buscarPersonajesPorCasa = (personajes, searchHouse) => {
  const todaLaCasa = personajes.filter(function(persona){
    return persona.house === searchHouse;
  }).map(function (persona){
    return persona.name;
  }); 
  return todaLaCasa
};


