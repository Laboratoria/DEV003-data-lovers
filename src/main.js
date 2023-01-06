import data from './data/ghibli/ghibli.js';

const dataGhibli = data.films

function directorsFilms(index) {
  const container = document.querySelector(".container");
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

function titles (films) {
  const container = document.querySelector(".titlesContainer");
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

//Vista Characters
function charactersView(index) {
  const container = document.querySelector(".characters");
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

function characters() {
  document.querySelector(".dataFilms").style.display = "none";
  document.querySelector(".homeView").style.display = "none";
  document.querySelector(".titles").style.display = "none";
  document.querySelector(".charactersView").style.display = "block";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "block";
  document.querySelector("#main-content-directors").style.display = "none";
  charactersView(peopleArr);
}


function directors() {
  document.querySelector(".dataFilms").style.display = "block";
  document.querySelector(".homeView").style.display = "none";
  document.querySelector(".titles").style.display = "none";
  document.querySelector(".charactersView").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "block";
  document.querySelector("#main-content-directors").style.display = "none";
  directorsFilms(dataGhibli);
}

function title() {
  document.querySelector(".dataFilms").style.display = "none";
  document.querySelector(".homeView").style.display = "none";
  document.querySelector(".charactersView").style.display = "none";
  document.querySelector("#main-content").style.display = "none";
  document.querySelector(".titles").style.display = "block";
  document.querySelector(".swaying-icon").style.display = "none";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "block";
  titles(dataGhibli);
}

function home() {
  document.querySelector(".dataFilms").style.display = "none";
  document.querySelector(".titles").style.display = "none";
  document.querySelector(".homeView").style.display = "block";
  document.querySelector(".charactersView").style.display = "none";
  document.querySelector("#main-content").style.display = "flex";
  document.querySelector(".swaying-icon").style.display = "block";
  document.querySelector("#main-content-movies").style.display = "none";
  document.querySelector("#main-content-directors").style.display = "none";
}

document.getElementById("home").addEventListener("click",home)
document.getElementById("titles").addEventListener("click",directors)
document.getElementById("characters").addEventListener("click",characters)
document.getElementById("directors").addEventListener("click",title)





/*      ANOTHER EXTENSION   */ 

