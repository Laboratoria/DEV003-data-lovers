// estas funciones son de ejemplo
//import data from './data/rickandmorty/rickandmorty.js';

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export function showAllCharacters(characters){
  document.getElementById("cards").innerHTML=("");
  for (let character of characters){
    //Crear card de molde para reutilizar
    let cardMold=document.createElement("div");
    //Agregando datos/categoría a mi card
    cardMold.classList.add("cardMold");
    //Agregar img a la card
    let cardImg=document.createElement("div");
    cardImg.classList.add("card-img");
    //Mandar a traer la img
    let img=document.createElement("img"); //Crea elemento img
    img.setAttribute("src", character.image);
    cardImg.appendChild(img); //Anida img en cardImg
    cardMold.appendChild(cardImg); //Anida en cardMold

    //Mostrando nombre
    //Creando div para contenedor de nombre
    let container=document.createElement("div");
    container.classList.add("container");
    //Characters name
    let charName=document.createElement("h1");
    charName.classList.add("name");
    charName.innerText=character.name;

    container.appendChild(charName);

    //Especie
    let species=document.createElement("h2");
    species.classList.add("species")
    species.innerText= "Species: " + character.species;
    container.appendChild(species);

    //Type
    let type=document.createElement("h2");
    type.classList.add("type")
    type.innerText="Type: " + character['type'];
    if (character.type) {
      container.appendChild(type);
    }

    //Género
    let gender=document.createElement("h2");
    gender.classList.add("gender")
    gender.innerText= "Gender: " + character.gender;
    container.appendChild(gender);

    //Estatus
    let status=document.createElement("h2");
    status.classList.add("status")
    status.innerText= "Status: " + character.status;
    container.appendChild(status);
    
    //Lugar de origen
    let origin=document.createElement("h2");
    origin.classList.add("origin")
    origin.innerText= "Origin: " + character.origin.name;
    container.appendChild(origin);

    //Locaciones
    let locations=document.createElement("h2");
    locations.classList.add("location")
    locations.innerText= "Last known location: " + character.location.name;
    container.appendChild(locations);


    //Episodios
    let episodes=document.createElement("h2");
    episodes.classList.add("episodes")
  //Es un arreglo, hay que iterar sobre cada elemento y usar .split para recuperar el núm del episodio
    const epNumbs=character["episode"].map((episode)=>{//Tiene mi array de núms
      const urlNum=episode.split("/");//Contiene array con elements separados
      const lastNumb=urlNum[urlNum.length -1];
      
      return lastNumb;
    })
    episodes.innerText= "Episodes: " + epNumbs.join(", ");
    container.appendChild(episodes);

    

    cardMold.appendChild(container);
    document.getElementById("cards").appendChild(cardMold); //Anida en cards
  }
}

export function filterData(data, input, category){
  //Ejecuta la función si está dentro de estas categorías
  if (category==="name"||category==="species"||category==="type"||category==="status") {
    const filterD=data.filter((character) => {
      console.log(character[category]); //Imprime todos los personajes
     
      const selectOpt=character[category].toLowerCase(); //Opc seleccionada de select
      const enteredTxt=input.toLowerCase(); //Txt ingresado en input
  
      return selectOpt.includes(enteredTxt);
      //includes compara la data del select con el txt ingresado en el input
    })
    console.log(filterD);
  return filterD;
  } else if (category==="gender") {
    // otro filtro
    const filtGender=data.filter((character) => {
      const selectOpt=character[category].toLowerCase(); //Opc seleccionada de select
      const enteredTxt=input.toLowerCase(); //Txt ingresado en input
  
      return selectOpt.startsWith(enteredTxt);
      //comparar si la categoria de la data startsWith input del usuario
      //string.startsWith('Fe');
    })
    console.log(filtGender);
    return filtGender;
  } else if (category==="origin"||category==="location"){
    //Otro filtro
    const filtLoc=data.filter((character) => {
      const selectOpt=character[category].name.toLowerCase();
      const enteredTxt=input.toLowerCase();
      return selectOpt.includes(enteredTxt);
    })
    return filtLoc;
  } else if (category==="episode"){
    //Otro filtro
    const filtEpi=data.filter((character) => {
      console.log(character[category]);//contiene mis elementos en un string
      const enteredTxt=input.toLowerCase();//Contiene txt input
      const epNumbs=character[category].map((episode)=>{//Tiene mi array de núms
        const urlNum=episode.split("/");//Contiene array con elements separados
        const lastNumb=urlNum[urlNum.length -1];
        
        return lastNumb;
      })
      console.log(epNumbs);
      
        return epNumbs.includes(enteredTxt);
    })
    return filtEpi;
  }

  // console.log(filterD);
  // return filterD;
}

export function orderAlf(orderType, inputArray) {
  if (orderType === "alphabetic") {
     return inputArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  }
  if (orderType === "reverse") {
     return inputArray.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
  
  }
  return inputArray
};

export function getData(categoSelect, inpTxt, orderType, data) {
  //const categoSelect = document.getElementById("filtMain").value; //Llama valor del select
  //const inpTxt = document.getElementById("searchInp").value; //Llama valor del input
  //const orderType = document.getElementById("order").value
      const filteredResult = filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult
      const orderedResult = orderAlf(orderType, filteredResult)
      return orderedResult
};
//Obtener valor de input txt en una variable---> Hecho

//Function filterData 3 paráms: data, input, categor---> Hecho
//filterData recibe toda la data y la regresa filtradas---> Hecho
//Usar ejemplo que tngo en main.js
