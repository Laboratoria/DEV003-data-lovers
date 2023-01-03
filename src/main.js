import data from './data/ghibli/ghibli.js';

const dataGhibli = data.films

function indexFilms(index) {
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


function inicio() {
  document.querySelector(".dataFilms").style.display = "block";
  document.querySelector(".titles").style.display = "none";
  indexFilms(dataGhibli);
}

function title() {
  document.querySelector(".dataFilms").style.display = "none";
  document.querySelector(".titles").style.display = "block";
  titles(dataGhibli);
}

document.getElementById("titles").addEventListener("click",inicio)
document.getElementById("direcprod").addEventListener("click",title)
