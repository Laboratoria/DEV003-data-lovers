// creando función para ordenar alfabeticamente de forma ascendente A-Z
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

// creando función para Ordenar por numero de ID para que se muestre de forma ascendente 
export const inferior = (dataList) => {
  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => a.num - b.num);
  return result;
}

// creando función para ordenar por numero de ID para que se muestre de forma descendente 
export const superior = (dataList) => {
  //creamos otra constante para guardar el resultado de la función
  const result = dataList.sort((a, b) => b.num - a.num);
  return result;
}

//Función para filtrar por tipos

export const filtraTipos = (type, dataList) => {
  const filterType = dataList.filter((element) =>
    element.type.includes(type))
  return filterType;
};

