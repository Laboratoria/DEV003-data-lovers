import { sortTitles, sortCharacters, filterDirector, filterProducer, filterTitles } from './data.js';
import data from './data/ghibli/ghibli.js';

const dataGhibli = data.films

//Funcion para las cartas giratorias
function displayTitleCards(index, contenedor) {
  const container = document.querySelector(contenedor);
  container.innerHTML = index.map((item) =>
    `<div class = "card">
          <div class = "face front">
            <img src = "${item.poster}" class = "poster"></img>
            <div class = "text"> <h3>${item.release_date} &nbsp ${item.title}</h3> </div>
          </div>
  
          <div class = "face back">
            <h3 class = "title">${item.title}</h3>
            <p class = "description">${item.description}</p>
          </div>
      </div>`
      
  ).join('')
}

//Funcion para las tarjetas de los personajes
function displayCharacters(index, contenedor) {
  const container = document.querySelector(contenedor);
  container.innerHTML = index.map((item) =>
    `<div class = "cardCharacter">
          <div class = "imgCharacter">
            <img src = "${item.img}"></img>
          </div>
          <div class = "dataCharacter">
            <p class = "name">${item.name}</p>
          </div>
          <ul class = "characterList">
            <li><p class = "gender"> <strong>Gender:</strong> &nbsp ${item.gender}</p></li>
            <li><p class = "age"> <strong>Age:</strong> &nbsp ${item.age}</p></li>
            <li><p class = "eyeColor"> <strong>Eye color:</strong> &nbsp ${item.eye_color}</p></li>
            <li><p class = "hairColor"> <strong>Hair color:</strong> &nbsp ${item.hair_color}</p></li>
            <li><p class = "specie"> <strong>Specie:</strong> &nbsp ${item.specie}</p></li>
          </ul>
      </div>`
  ).join('')
}
const peopleArr = dataGhibli.map(ppl=>ppl.people).flat(1)

//Funcion para ver director y productor de las películas
function displayDirecProds (films, contenedor) {
  const container = document.querySelector(contenedor);
  container.innerHTML = films.map((item) =>
    `<div class = "cardTitle">
        <div class = "blockData">
            <div class = "poster"><img src = "${item.poster}"</img></div>
            <div class = "data">
                <h3 class = "title">${item.title}</h3>
                <section class = "ds">
                    <h4>Rate: ${item.rt_score} </h4>   
                    <h4>Year: ${item.release_date} </h4> 
                </section>
                <h4>Director: ${item.director} </h4>
                <h4>Producer: ${item.producer} </h4>
                <h4>Description:</h4> ${item.description}
            </div>
        </div>
          
        </div>`
  ).join('')
}

//Funciones para las vistas
function homeView() {
  document.querySelector(".homeContainer").style.display = "block";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "block";
  document.querySelector("#main-content").style.display = "flex";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
}

function cardTitlesView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "block";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "block";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
  displayTitleCards(dataGhibli, ".titleCardContainer");
}

function charactersView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "block";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "block";
  document.querySelector("#main-content-directors").style.display = "none";
  displayCharacters(peopleArr, ".characterContainer");
}

function dirProdsView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "block";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "block";
  displayDirecProds(dataGhibli, ".dirProdContainer");
}

//Event listeners
document.getElementById("home").addEventListener("click", homeView)
document.getElementById("titles").addEventListener("click", cardTitlesView)
document.getElementById("characters").addEventListener("click", charactersView)
document.getElementById("dirProds").addEventListener("click", dirProdsView)


//Ordenar películas
const orderFilms = (a) =>{
  const orderSelected = a.target.value;
  if (orderSelected !== ""){
    const filterOrder = sortTitles(dataGhibli, orderSelected)
    displayTitleCards(filterOrder, ".titleCardContainer")
  }
}

const order = document.getElementById("selectOrder")
order.addEventListener ("change", orderFilms)


//Ordenar Personajes
const orderCharacter = (a)=>{
  const orderSelec = a.target.value;
  if(orderSelec !== ""){
    const filterOrder = sortCharacters(peopleArr, orderSelec)
    displayCharacters(filterOrder, ".characterContainer")
  }
}

const orderPeople = document.getElementById("selectOrderCharacter")
orderPeople.addEventListener ("change", orderCharacter)


//Filtro director y productor
const director = document.getElementById("director")
director.addEventListener("change", () => {    
  const directorSelected = director.value;
  const directorFiltered = filterDirector(dataGhibli, directorSelected);
  displayDirecProds(directorFiltered, ".dirProdContainer")
});

//Filtro productor
const producer = document.getElementById("producer")
producer.addEventListener("change", () => {
  const producerSelected = producer.value;
  const producerFiltered = filterProducer(dataGhibli, producerSelected);
  displayDirecProds(producerFiltered, ".dirProdContainer")
});

//Filtro por título
const filterMovie = document.getElementById("titlesSelec")
filterMovie.addEventListener("change", () => {    
  const titleSelected = filterMovie.value;
  const titleFiltered = filterTitles(dataGhibli, titleSelected);
  displayDirecProds(titleFiltered,  ".titleSelec")
})
