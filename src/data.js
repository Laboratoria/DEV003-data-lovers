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
    
    console.log(character.type);

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
    //episodes.innerText=character.episode; Es un arreglo, hay que iterar sobre cada elemento y usar .split para recuperar el núm del episodio
    container.appendChild(episodes);

    

    cardMold.appendChild(container);
    document.getElementById("cards").appendChild(cardMold); //Anida en cards
  }
}

export function filterData(data, input, category) {
  const filterD=data.filter((character) => {
    console.log(character[category]); //Imprime todos los personajes
    //return character[category].toUpperCase()=="Rick"
    //return character[category].toLowerCase().includes(input.toLowerCase());
    const selectOpt=character[category].toLowerCase(); //Opc seleccionada de select
    const enteredTxt=input.toLowerCase(); //Txt ingresado en input

    return selectOpt.includes(enteredTxt);
    //includes compara la data del select con el txt ingresado en el input
  })

  console.log(filterD);
  return filterD;

}
//Obtener valor de input txt en una variable---> Hecho

//Function filterData 3 paráms: data, input, categor---> Hecho
//filterData recibe toda la data y la regresa filtradas---> Hecho
//Usar ejemplo que tngo en main.js


//Agregar parám data a showCharacters, en vez de llamar data.results