import { sortTitles, sortCharacters, filterDirector, filterProducer, filterTitles, filterGenders } from './data.js';
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
const peopleArr = dataGhibli.map(a=>a.people).flat(1)

// Función para sacar personajes por película
function peopleByTitle (data, value) {
  for (let i=0; i<data.length; i++){
    if(data[i].title === value){
      return data[i].people 
    }
  }
}

//Funcion para locations
function displayLocations(index, contenedor) {
  const container = document.querySelector(contenedor);
  container.innerHTML = index.map((item) =>
    `<div class = "cardLocation">
          <div class = "imgLocation">
            <img src = "${item.img}"></img>
          </div>
          
          <div class = "locationList">
            <p class = "name"> <strong>Name:</strong> &nbsp ${item.name}</p>
            <p class = "climate"> <strong>Climate:</strong> &nbsp ${item.climate}</p>
            <p class = "terrain"> <strong>Terrain:</strong> &nbsp ${item.terrain}</p>
            <p class = "surfaceWater"> <strong>Surface water:</strong> &nbsp ${item.surface_water}%</p>
          </div>
      </div>`
  ).join('')
}
const locationArr = dataGhibli.map(a=>a.locations).flat(1)
// Función para sacar locations por película
function locationsByTitle (data, value) {
  for (let i=0; i<data.length; i++){
    if(data[i].title === value){
      return data[i].locations 
    }
  }
}

//Funcion para vehicles
function displayVehicles(index, contenedor) {
  const container = document.querySelector(contenedor);
  container.innerHTML = index.map((item) =>
    `<div class = "cardVehicle">
          <div class = "imgVehicle">
            <img src = "${item.img}"></img>
          </div>
          <div class = "vehicleList">
            <p class = "name"> <strong>Name:</strong> &nbsp ${item.name}</p>
            <p class = "pilot"> <strong>Pilot:</strong> &nbsp ${item.pilot.name}</p>
            <p class = "class"> <strong>Class:</strong> &nbsp ${item.vehicle_class}</p>
            <p class = "length"> <strong>Length:</strong> &nbsp ${item.length} m.</p>
            <p class = "description"> <strong>Description:</strong> &nbsp ${item.description}</p>
          </div>
      </div>`
  ).join('')
}
const vehicleArr = dataGhibli.map(a=>a.vehicles).flat(1)
// Función para sacar locations por película
function vehiclesByTitle (data, value) {
  for (let i=0; i<data.length; i++){
    if(data[i].title === value){
      return data[i].locations 
    }
  }
}

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
  document.querySelector(".locationsContainer").style.display = "none";
  document.querySelector(".vehiclesContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "block";
  document.querySelector("#main-content").style.display = "flex";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-locations").style.display = "none";
  document.querySelector("#main-content-vehicles").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
}

function cardTitlesView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "block";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".locationsContainer").style.display = "none";
  document.querySelector(".vehiclesContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "block";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-locations").style.display = "none";
  document.querySelector("#main-content-vehicles").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
  displayTitleCards(dataGhibli, ".titleCardContainer");
}

function charactersView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "block";
  document.querySelector(".locationsContainer").style.display = "none";
  document.querySelector(".vehiclesContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "block";
  document.querySelector("#main-content-locations").style.display = "none";
  document.querySelector("#main-content-vehicles").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
  displayCharacters(peopleArr, ".characterContainer");
}

function locationsView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".locationsContainer").style.display = "block";
  document.querySelector(".vehiclesContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-locations").style.display = "block";
  document.querySelector("#main-content-vehicles").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
  displayLocations(locationArr, ".locationContainer");
}

function vehiclesView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".locationsContainer").style.display = "none";
  document.querySelector(".vehiclesContainer").style.display = "block";
  document.querySelector(".dirProdsContainer").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-locations").style.display = "none";
  document.querySelector("#main-content-vehicles").style.display = "block";
  document.querySelector("#main-content-directors").style.display = "none";
  displayVehicles(vehicleArr, ".vehicleContainer");
}

function dirProdsView() {
  document.querySelector(".homeContainer").style.display = "none";
  document.querySelector(".titleCardsContainer").style.display = "none";
  document.querySelector(".charactersContainer").style.display = "none";
  document.querySelector(".locationsContainer").style.display = "none";
  document.querySelector(".vehiclesContainer").style.display = "none";
  document.querySelector(".dirProdsContainer").style.display = "block";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-characters").style.display = "none";
  document.querySelector("#main-content-locations").style.display = "none";
  document.querySelector("#main-content-vehicles").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "block";
  displayDirecProds(dataGhibli, ".dirProdContainer");
}

//Event listeners
document.getElementById("home").addEventListener("click", homeView)
document.getElementById("titles").addEventListener("click", cardTitlesView)
document.getElementById("characters").addEventListener("click", charactersView)
document.getElementById("locations").addEventListener("click", locationsView)
document.getElementById("vehicles").addEventListener("click", vehiclesView)
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
  const orderSelected = a.target.value;
  if(orderSelected !== ""){
    const filterOrder = sortCharacters(peopleArr, orderSelected)
    displayCharacters(filterOrder, ".characterContainer")
  }
}

const orderPeople = document.getElementById("selectOrderCharacter")
orderPeople.addEventListener ("change", orderCharacter)


//Ordenar Locations
const orderLocations = (a)=>{
  const orderSelected = a.target.value;
  if(orderSelected !== ""){
    const filterOrder = sortCharacters(locationArr, orderSelected)
    displayLocations(filterOrder, ".locationContainer")
  }
}

const orderLocation = document.getElementById("selectOrderLocation")
orderLocation.addEventListener ("change", orderLocations)

//Ordenar Vehicles
const orderVehicles = (a)=>{
  const orderSelected = a.target.value;
  if(orderSelected !== ""){
    const filterOrder = sortCharacters(vehicleArr, orderSelected)
    displayVehicles(filterOrder, ".vehicleContainer")
  }
}

const orderVehicle = document.getElementById("selectOrderVehicles")
orderVehicle.addEventListener ("change", orderVehicles)

//Filtro director
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

//--Filtro por título-personajes
const filterCharacter = document.getElementById("titlesSelec")
filterCharacter.addEventListener("change", () => {    
  const titleSelected = filterCharacter.value;
  const peopleFiltered = peopleByTitle(dataGhibli, titleSelected);
  displayCharacters(peopleFiltered, ".pplSelec")
})

//--Filtro por título-locations
const filterLocation = document.getElementById("titlesSelec")
filterLocation.addEventListener("change", () => {    
  const titleSelected = filterLocation.value;
  const locationFiltered = locationsByTitle(dataGhibli, titleSelected);
  displayLocations(locationFiltered, ".locationSelec")
})

//--Filtro por título-vehicles
const filterVehicle = document.getElementById("titlesSelec")
filterVehicle.addEventListener("change", () => {    
  const titleSelected = filterVehicle.value;
  const vehicleFiltered = vehiclesByTitle(dataGhibli, titleSelected);
  displayVehicles(vehicleFiltered, ".vehicleSelec")
})
vehiclesByTitle
//Filtro por género
const filterGender = document.getElementById("selectGender")
filterGender.addEventListener("change", () => {    
  const genderSelected = filterGender.value;
  const genderFiltered = filterGenders(peopleArr, genderSelected);
  displayCharacters(genderFiltered, ".characterContainer")
})


