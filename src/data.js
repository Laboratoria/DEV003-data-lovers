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
    const div = document.createElement("div");
    div.className = "card"; 
    const img = document.createElement('img');
    img.src = DataGlibli.films[i].poster;
    const title = document.createElement("span");
    title.className = "title";
    title.textContent =  DataGlibli.films[i].title;
    //const description = document.createElement("span");
    //description.textContent = DataGlibli.films[i].description;
    //console.log("container", container);
  
    div.append(img);
    div.append(title);
    //div.append(description);
    container.append(div);
  }

}

ChargeGhibli();

