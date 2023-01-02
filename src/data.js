import DataGlibli  from './data/ghibli/ghibli.js';

// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

function ChargeGhibli(){
  //console.log(DataGlibli.films[1]);
  const container = document.querySelector(".container");
  for(let i = 0; i <= DataGlibli.films.length; i++){
    const divCard = document.createElement('div');
    divCard.className = "card"; 
    
    const divCardFront = document.createElement('div')
    divCardFront.className = "face front"
    
    const img = document.createElement('img');
    img.src = DataGlibli.films[i].poster;
    
    const title = document.createElement('h3');
    title.className = "title";
    title.textContent =  DataGlibli.films[i].title;
    
    const divCardBack = document.createElement('div');
    divCardBack.className = "face back"
    
    const description = document.createElement('p');
    description.className = "description"
    description.textContent = DataGlibli.films[i].description;
    //console.log("container", container);
  
    container.append(divCard);
    divCard.append(divCardFront, divCardBack);
    divCardFront.append(img, title);
    divCardBack.append(description);
    
    divCard.addEventListener("click", function() {
      this.classList.toggle("card");
    });
  }
  // Handle click on touchscreens
  //const flip_card = document.querySelector(".");
}

ChargeGhibli();