import data from "./data/pokemon/pokemon.js";
import { filter,filtroFrecuencia} from "./data.js";


const plantillaPokemon = (arrayPokemon) => {
  const container = document.getElementById("container");
  //  se reemplaza la sintaxis HTML del elemento por la nueva.
  container.innerHTML = "";
  // El método forEach() ejecuta la función indicada una vez por cada elemento del array.
  arrayPokemon.forEach((pokemon) => {
    //para que se muestren los pokemon con su imagen y nombre (creando portada)
    const menuPrincipal = document.createElement("div");
    //  es una forma práctica de acceder a la lista de clases de un elemento / método add() añade un nuevo elemento con un valor específico
    menuPrincipal.classList.add("cardPokemon"); //cardPokemon es la tarjeta del pokemon.
    // imagen del pokemon
    const imagen = document.createElement("img");
    imagen.src = pokemon.img;
    //nombre del pokemon
    const nombre = document.createElement("div");
    nombre.innerHTML = pokemon.name;
    // const boton = document.createElement("button")
    // boton.innerHTML = pokemon.name
    //contener los datos dentro de la caja
    menuPrincipal.appendChild(imagen);
    menuPrincipal.appendChild(nombre);
    // menuPrincipal.appendChild(boton);
    //cajaPrincipal.appendChild(tipo)//
    //agregarlo al root
    container.appendChild(menuPrincipal);

  });
};
plantillaPokemon(data.pokemon);
console.log(data.pokemon);

// document.getElementById("elemento").addEventListener("change",()=>{console.log(filter(data.pokemon))})
const elementos = document.getElementById("elemento");
elementos.addEventListener("change", () => {
  const select = elementos.value;
  const filtroPoke = filter(data.pokemon, "type", select);

  plantillaPokemon(filtroPoke);
  // console.log(filtroPoke);

 
});

// -----------------------------------

const listaFrecuencias=[];
for(let i=0;i<data.pokemon.length;i++){
  listaFrecuencias[i]=data.pokemon[i]["spawn-chance"]
}

// console.log(listaFrecuencias);
// $metodo de temple, es platilla de cadena forma de mostrar textos variables interpolar informacion
const $select = document.getElementById("frecuencia");

for(let j=0;j<data.pokemon.length;j++){
  const $valor=listaFrecuencias[j];
  // aqui le damos una condicion para eliminar la aparicion de null en la lista
  if($valor!==null){
    const $option = document.createElement('option');

    $option.value=$valor;
    $option.text=$valor;
    $select.appendChild($option);
  }
}

 
const frecuencias = document.getElementById("frecuencia");
frecuencias.addEventListener("change", () => {
  const select = frecuencias.value;
  const filtroFrec = filtroFrecuencia(data.pokemon,"spawn-chance", select);

  plantillaPokemon(filtroFrec);
  // console.log(filtroFrec);
});
