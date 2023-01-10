// estas funciones son de ejemplo
//import data from './data/rickandmorty/rickandmorty.js';

export function filterData(data, input, category){
  //Ejecuta la función si está dentro de estas categorías
  if (category === "name" || category === "species" || category === "type" || category === "status") {
    const filterD = data.filter((character) => {
      console.log(character[category]); //Imprime todos los personajes

      const selectOpt = character[category].toLowerCase(); //Opc seleccionada de select
      const enteredTxt = input.toLowerCase(); //Txt ingresado en input

      return selectOpt.includes(enteredTxt);
      //includes compara la data del select con el txt ingresado en el input
    })
    console.log(filterD);
    return filterD;
  } else if (category === "gender") {
    // otro filtro
    const filtGender = data.filter((character) => {
      const selectOpt = character[category].toLowerCase(); //Opc seleccionada de select
      const enteredTxt = input.toLowerCase(); //Txt ingresado en input

      return selectOpt.startsWith(enteredTxt);
      //comparar si la categoria de la data startsWith input del usuario
      //string.startsWith('Fe');
    })
    console.log(filtGender);
    return filtGender;
  } else if (category === "origin" || category === "location") {
    //Otro filtro
    const filtLoc = data.filter((character) => {
      const selectOpt = character[category].name.toLowerCase();
      const enteredTxt = input.toLowerCase();
      return selectOpt.includes(enteredTxt);
    })
    return filtLoc;
  } else if (category === "episode") {
    //Otro filtro
    const filtEpi = data.filter((character) => {
      console.log(character[category]);//contiene mis elementos en un string
      const enteredTxt = input.toLowerCase();//Contiene txt input
      const epNumbs = character[category].map((episode) => {//Tiene mi array de núms
        const urlNum = episode.split("/");//Contiene array con elements separados
        const lastNumb = urlNum[urlNum.length - 1];

        return lastNumb;
      })
      console.log(epNumbs);

      return epNumbs.includes(enteredTxt);
    })
    return filtEpi;
    }
}

export function orderAlf(orderType, inputArray) {
  if (orderType === "alphabetic") {
    return inputArray.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  }
  if (orderType === "reverse") {
    return inputArray.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))

  }
  return inputArray
};

export function getData(categoSelect, inpTxt, orderType, data) {
  const filteredResult = filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult
  const orderedResult = orderAlf(orderType, filteredResult)
  return orderedResult
};
//Obtener valor de input txt en una variable---> Hecho

//Function filterData 3 paráms: data, input, categor---> Hecho
//filterData recibe toda la data y la regresa filtradas---> Hecho
//Usar ejemplo que tngo en main.js
