export const ordenarAz = (dataList) => {
  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    else return 0;
  });
  return result;
}

// creando función para ordenar alfabeticamente de forma descendente Z-A
export const ordenarZa = (dataList) => {
  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    else return 0;
  });
  return result;
}

// creando función para Ordenar por numero de ID numero inferior 
export const inferior = (dataList) => {
  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => a.num - b.num);
  return result;
}

// creando función para ordenar por numero de ID numero superior
export const superior = (dataList) => {
  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => b.num - a.num);
  return result;
}