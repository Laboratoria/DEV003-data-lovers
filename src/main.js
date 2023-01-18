import data from './data/pokemon/pokemon.js';
import {filtroData, ordenar, estadisticaFiltro, calcular} from './data.js'


const btnPokemon = document.querySelector("#btnPokemones")
const inicioNav =document.getElementById("inicioNav");
const pokemonNav =document.getElementById("pokemonsNav");
const filtroNav =document.getElementById("filtroNav");
const multiplicadorNav =document.getElementById("multiplicadorNav");

const sectionPage1 = document.querySelector("#page1");
const sectionPage2 = document.querySelector("#page2");
const sectionPage3 = document.querySelector("#page3");
const sectionPage4 = document.querySelector("#page4");

// funciones agregadas a los botones para navegar por el menu
btnPokemon.addEventListener("click", pokemonInf);
pokemonNav.addEventListener("click", pokemonInf);
function pokemonInf(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "block";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "none";
}
inicioNav.addEventListener("click", function(){
  sectionPage1.style.display= "block";
  sectionPage2.style.display= "none";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "none";
});
filtroNav.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "none";
  sectionPage3.style.display= "block";
  sectionPage4.style.display= "none";
});
multiplicadorNav.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "none";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "block";
});

// se trae la data y se especifica el elemento
const dataPokemons = data.pokemon;

//se declara una constante de la seccion de la pagina donde se visualizara el catalogo o biblioteca de pokemons
const catalogo =document.getElementById("mostrarPokemons");
// Se toma la constante de la data y la recorremos con el metodo .foreach que tiene la funcion de callback y el parametro es la data (archivo pokemon.js)
function mostrarData (dataAll){ 
  // se crea un cuerpo html a la seccion declarada como catalogo y se traen los datos ya declarados con template strings
  catalogo.innerHTML += `
    <div class="TarjetasPokemon">
      <div class="tarjetas">
      <div class="cuerpoTarjetas">
      <img src="${dataAll.img}"/>
      <h3 class="idPokemon">${dataAll.num}</h3><h3 class="nombrePokemon">${dataAll.name.toUpperCase()}</h3>
      <h4 class="peso">Weight: ${dataAll.size.weight}</h4>
      <h4 class="altura">Height: ${dataAll.size.height}</h4>
      <h4 class="tipo">Type: ${dataAll.type}</h4>
      <p class="about"> ${dataAll.about}</p>
      <p class=""></p>
    </div>
    </div>
    </div>
    `;
}
dataPokemons.forEach(mostrarData);


// funcion ordenar
const selectorOrganizarAlfabeticamente = document.getElementById("ordenarAlfabeto");
selectorOrganizarAlfabeticamente.addEventListener("change",function(){
  const opcionSeleccionada = this.options[selectorOrganizarAlfabeticamente.selectedIndex];
  const nuevaData = ordenar(dataPokemons, opcionSeleccionada.value);
  catalogo.innerHTML="";
  
  if(opcionSeleccionada.value === "selecciona")
  // mostrarData(dataPokemons);
    dataPokemons.forEach(mostrarData);
  else
  // mostrarData(nuevaData);
    nuevaData.forEach(mostrarData);
});

// funcion filtrar
const SelectorElementoTipo = document.getElementById("filtroTipo");
SelectorElementoTipo.addEventListener("change", function(){
  const opcionSeleccionada = this.options[SelectorElementoTipo.selectedIndex];
  const catalogo2 =document.getElementById("pokemonesFiltrados");
  const nuevaData = filtroData(dataPokemons, opcionSeleccionada.value);
  catalogo2.innerHTML="";

  function mostrarData2 (dataAll){     
    catalogo2.innerHTML += `
      <div class="TarjetasPokemon">
        <div class="tarjetas">
        <div class="cuerpoTarjetas">
        <img src="${dataAll.img}"/>
        <h3 class="idPokemon">${dataAll.num}</h3><h3 class="nombrePokemon">${dataAll.name.toUpperCase()}</h3>
        <h4 class="peso">Weight: ${dataAll.size.weight}</h4>
        <h4 class="altura">Height: ${dataAll.size.height}</h4>
        <h4 class="tipo">Type: ${dataAll.type}</h4>
        <p class="about"> ${dataAll.about}</p>
        <p class=""></p>
      </div>
      </div>
      </div>
      `;
  }

  if(opcionSeleccionada.value === "selecciona")
    dataPokemons.forEach(mostrarData2);
  else
    nuevaData.forEach(mostrarData2);
});

//funcion estadistica
 
//parte 1 datos para grafica
const pobladoresKanto = estadisticaFiltro(dataPokemons,"kanto");
const pobladoresJohto = estadisticaFiltro(dataPokemons,"johto");
const porcentajepobladoresKanto = calcular(pobladoresKanto);
const porcentajepobladoresJohto = calcular(pobladoresJohto);
const catalogo4 = document.getElementById("pokemonesestadistica");
 

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
 
function drawChart() {
 
  const data = google.visualization.arrayToDataTable([
    ['Region', 'Poblacion'],
    ['Johto', 100],
    ['Kanto', 151],
         
  ]);
 
  const options = {
    title: 'percentages of pokemon according to region'
  };
 
  const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
 
  chart.draw(data, options);
}
    
/*
const newPorcentajes = [
  {region:"kanto", poblacion:`${pobladoresKanto.length}`, porcentaje:`${porcentajepobladoresKanto}`},
  {region:"johto", poblacion:, porcentaje:`${porcentajepobladoresJohto}`},
];
const miGrafica = document.getElementById("miGrafica").getContext("2d");
 
const graficaPorcentajes = new Chart(miGrafica,
  {
    type: 'bar',
    data: {
      labels: newPorcentajes.map(element => element.region),
      datasets: [
        {
          label: '',
          data: newPorcentajes.map(element => element.porcentaje)
        }
      ]
 
    }  }
);
*/
 
function mostrarDatos1 (){    
  catalogo4.innerHTML += `
    <div class="Tarjetasestadistica">
      <div class="tarjetasestadistica">
      <div class="cuerpoTarjetasestadistica">
      <p> Carrying out an analysis of the data, it was found that the ${porcentajepobladoresKanto}% of Pokémon are found in the Kanto region with ${pobladoresKanto.length} pokemon and the ${porcentajepobladoresJohto}% are in Johto with ${pobladoresJohto.length} pokemon</p>
    </div>
    </div>
    </div>
    `;
}
mostrarDatos1();
 
//parte 2 datos de pokemons filtrados
 
const SelectorElementoPoblacion = document.getElementById("ordenarRegion");
SelectorElementoPoblacion.addEventListener("change", function (){
  const opcionSeleccionada = this.options[SelectorElementoPoblacion.selectedIndex];
  const catalogo3 =document.getElementById("mostrarRegionElemento");
  const nuevaData = estadisticaFiltro(dataPokemons, opcionSeleccionada.value);
  catalogo3.innerHTML="";
 
 
  function mostrarData3 (dataAll){    
    catalogo3.innerHTML += `
    <div class="TarjetasPokemon">
        <div class="tarjetas">
        <div class="cuerpoTarjetas">
        <img src="${dataAll.img}"/>
        <h3 class="nombrePokemon">${dataAll.name.toUpperCase()}</h3>
        <h4 class="tipo">Type: ${dataAll.type}
        <h4 class="peso">Resistant:<br>${dataAll.resistant}</h4>
        <h4 class="altura">Weaknesses:<br>${dataAll.weaknesses}</h4>
      </div>
      </div>
      </div>
      `;
  }
 
  if(opcionSeleccionada.value === "selecciona")
    dataPokemons.forEach(mostrarData3);
  else
    nuevaData.forEach(mostrarData3);
});