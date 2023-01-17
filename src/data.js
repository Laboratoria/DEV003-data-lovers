// funcion de ordenar para exportarla en main
export function ordenar(pokemons, orden){
  const organizadorSeleccionado = orden
  const ordenarDataAZ = pokemons.slice().sort((a,b) =>{
    if (a.name.toLowerCase() < b.name.toLowerCase()){
      return -1;
    }
    // if (a.name.toLowerCase() > b.name.toLowerCase()){
    //   return 1;
    // }
    //return 0;
  });
  const ordenarDataZA = pokemons.slice().sort((a,b) =>{
    if (a.name.toLowerCase() > b.name.toLowerCase()){
      return -1;
    }
    // if (a.name.toLowerCase() < b.name.toLowerCase()){
    //   return 1;
    // }
    //return 0;
  });
  const ordenarDataMenorMAyor = pokemons.slice().sort((a,b) =>{
    /*if*/ (a.num < b.num)/*{
       return -1;
     }
     if (a.num > b.num){
       return 1;
     }
    return 0;*/
  });
  const ordenarDataMayorMenor = pokemons.slice().sort((a,b) =>{
    if (a.num > b.num){
      return -1;
    }
    // if (a.num < b.num){
    //   return 1;
    // }
    // return 0;
  });
 
  if (organizadorSeleccionado === "aZ"){
    return ordenarDataAZ;
  }
  if (organizadorSeleccionado === "zA"){
    return ordenarDataZA;
  }
  if (organizadorSeleccionado === "ascendente"){
    return ordenarDataMenorMAyor;
  }
  if (organizadorSeleccionado === "descendente"){
    return ordenarDataMayorMenor;
  }
}
 
// funcion de filtrar
export function filtroData (pokemons, condicion) {
  const elementoTipo = condicion
  const nuevaData = pokemons.filter((element) => element.type.includes(elementoTipo));
  return nuevaData;
}
 
//funcion estadistica
export function estadistica (pokemons, poblacion){
  const resumen = pokemons.filter((element) => element.generation.name.includes(poblacion));
  return resumen;
}

export function calcular (data){
  const resultado = Math.round((data.length*100)/251);
  return resultado
}