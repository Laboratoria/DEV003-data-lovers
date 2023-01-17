// estas funciones son de ejemplo

export const example = () => {
  const todaLaCasa = personajes.filter(function(persona){
    return persona.house === searchHouse;
  }).map(function (persona){
    return persona.name;
  }); 
  return todaLaCasa
};

export const anotherExample = () => {
  return 'OMG';
};

