// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const sortTitles = (films, orderSelected) => {
  if (orderSelected === "a-z"){
    return films.sort((a,b) => a.title > b.title ? 1 : -1)
  }

  if (orderSelected === "z-a"){
    return films.sort((a,b) => a.title > b.title ? -1 : 1)
  }

  if(orderSelected === "first"){
    return films.sort((a,b) => a.release_date > b.release_date ? 1 : -1)
  }

  if(orderSelected === "last"){
    return films.sort((a,b) => a.release_date > b.release_date ? -1 : 1)
  }
}

export const sortCharacters = (peopleArr, orderSelec) => {
  if (orderSelec === "a-z"){
    return peopleArr.sort((a,b) => a.name > b.name ? 1 : -1)
  }

  if (orderSelec === "z-a"){
    return peopleArr.sort((a,b) => a.name > b.name ? -1 : 1)
  }
}

//Filtro director y productor

export const filterDirector = (films, condition) => {
  return films.filter((film) => film.director.includes(condition));
};

export const filterProducer = (films, condition) => {
  return films.filter((film) => film.producer.includes(condition));
};

//Filtro por título

export const filterTitles = (films, condition) => {
  return films.filter((film) => film.title.includes(condition));
};