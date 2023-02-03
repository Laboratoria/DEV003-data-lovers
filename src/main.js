import data from "./data/pokemon/pokemon.js";
import { filter } from "./data.js";





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
    //contener los datos dentro de la caja
    menuPrincipal.appendChild(imagen);
    menuPrincipal.appendChild(nombre);
    //cajaPrincipal.appendChild(tipo)//
    //agregarlo al root
    container.appendChild(menuPrincipal);
  });
};
plantillaPokemon(data.pokemon);
console.log(data.pokemon);





const listaFrecuencias=[];
for(let i=0;i<data.pokemon.length;i++){
  listaFrecuencias[i]=data.pokemon[i]["spawn-chance"]
}

console.log(listaFrecuencias);
// $metodo de temple
const $select = document.getElementById("frecuencia");

for(let j=0;j<data.pokemon.length;j++){
  const $valor=listaFrecuencias[j];

  if($valor!==null){
    const $option = document.createElement('option');

    $option.value=$valor;
    $option.text=$valor;
    $select.appendChild($option);
  }
}




// document.getElementById("elemento").addEventListener("change",()=>{console.log(filter(data.pokemon))})
const elementos = document.getElementById("elemento");
elementos.addEventListener("change", () => {
  const select = elementos.value;
  const filtroPoke = filter(data.pokemon, "type", select);

  plantillaPokemon(filtroPoke);
  console.log(filtroPoke);

  plantillaPokemon(filtroPoke);
  console.log(filtroPoke);
});








// const plantillaFrecuencia = (frePokemon) => {
//   const frecu = document.getElementById('frecuencia');
//   frePokemon.forEach((pokemon) => {
//   const listaFrecuencia =document.createElement("frecuencia");
//   li.innerHTML=pokemon.move-duration-seg
//   listaFrecuencia.appendChild(li);
//   })
// }
// const elementos = document.getElementById('frecuencia');
// elementos.addEventListener('change', () => {
//  const select = elementos.value;
//   const filtroPoke = (filter((data.pokemon), 'type', select))
// })


// document.getElementById("elemento").addEventListener("change",()=>{console.log(filter(data.pokemon))})
// const elementos = document.getElementById('elemento');
// elementos.addEventListener('change', () => {
//  const select = elementos.value;
//   const filtroPoke = (filter((data.pokemon), 'type', select))
 
// plantillaPokemon(filtroPoke)
//   console.log(filtroPoke)
//   // for(let i=0 ;i<filtroPoke.lenght;i++){aqui va todo desde menu principal}
 
 
//   });
  
//   const frecuencia = document.getElementById('frecuencia');
//  frecuencia.addEventListener('change', () => {
//    const select = ata.move-duration-seg .value;
//     const filtroPoke = (filter((data.move-duration-seg), 'move-duration-seg', select))
   
//   plantillaPokemon(filtroPoke)
//     console.log(filtroPoke)
//     // for(let i=0 ;i<filtroPoke.lenght;i++){aqui va todo desde menu principal}
   
   
//     });