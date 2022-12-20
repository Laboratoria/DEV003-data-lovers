import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

const btnPokemon = document.querySelector("#btnPokemones")
const sectionPage1 = document.querySelector("#page1");
const sectionPage2 = document.querySelector("#page2");
const sectionPage3 = document.querySelector("#page3");
const sectionPage4 = document.querySelector("#page4");

btnPokemon.addEventListener("click", function(){
  sectionPage1.style.display= "none";
  sectionPage2.style.display= "block";
  sectionPage3.style.display= "none";
  sectionPage4.style.display= "none";
})

const dataPokemones = data;

const catalogoPokemones = `
<div class ="dataPokemones">
<h2>
  ${dataPokemones.name}
</h2>
<p class="img">${dataPokemones.img}</p>
<p class="info">${dataPokemones.about}</p>
<p class="altura">${dataPokemones.height}</p>
<p class="peso">${dataPokemones.weight}</p>
<p class="fortalezas">${dataPokemones.resistant}</p>
<p class="debilidades">${dataPokemones.weaknesses}</p>
</div>`;

document.getElementById('page2').innerHTML = catalogoPokemones;




