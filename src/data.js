// funcion de ordenar para exportarla en main
export function ordenar(pokemons, orden){
  const organizadorSeleccionado = orden
  const ordenarDataAZ = pokemons.sort((a,b) =>{
    if (a.name.toLowerCase() < b.name.toLowerCase()){ 
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()){ 
      return 1;
    }
    return 0;
  });
  const ordenarDataZA = pokemons.sort((a,b) =>{
    if (a.name.toLowerCase() > b.name.toLowerCase()){ 
      return -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()){ 
      return 1;
    }
    return 0;
  });
  const ordenarDataMenorMAyor = pokemons.sort((a,b) =>{
    if (a.num < b.num){ 
      return -1;
    }
    if (a.num > b.num){ 
      return 1;
    }
    return 0;
  });
  const ordenarDataMayorMenor = pokemons.sort((a,b) =>{
    if (a.num > b.num){ 
      return -1;
    }
    if (a.num < b.num){ 
      return 1;
    }
    return 0;
  });

  if (organizadorSeleccionado === "aZ"){
    return ordenarDataAZ;
  }
  else if (organizadorSeleccionado === "zA"){
    return ordenarDataZA;
  } else if (organizadorSeleccionado === "ascendente"){
    return ordenarDataMenorMAyor;
  }else if (organizadorSeleccionado === "descendente"){
    return ordenarDataMayorMenor;
  }  else {
    return "";
  }
}

// funcion de filtrar
export function filtroData (pokemons, condicion) {
  const elementoTipo = condicion
  const nuevaData = pokemons.filter((element) => element.type.includes(elementoTipo));
  return nuevaData;
}