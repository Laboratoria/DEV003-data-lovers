// funcion de ordenar para exportarla en main
export function ordenarAlfabeto(pokemons, orden){
  const organizadorSeleccionado = orden
  const ordenarDataAZ = pokemons.slice().sort((a,b) =>{
    if (a.name.toLowerCase() < b.name.toLowerCase()){ 
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()){ 
      return 1;
    }
    return 0;
  });
  const ordenarDataZA = pokemons.slice().sort((a,b) =>{
    if (a.name.toLowerCase() > b.name.toLowerCase()){ 
      return -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()){ 
      return 1;
    }
    return 0;
  });

  if (organizadorSeleccionado === "aZ"){
    return ordenarDataAZ;
  }
  else if (organizadorSeleccionado === "zA"){
    return ordenarDataZA;
  }

  else {
    return "";
  }
}

// funcion de filtrar
export function filtroData (pokemons, condicion) {
  const elementoTipo = condicion
  const nuevaData = pokemons.filter((element) => element.type == elementoTipo);
  return nuevaData;
}