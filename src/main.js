import {getDataPokemon,orderByOpcion, filterData} from './data.js';

const buttonHome = document.getElementById("btnHome");
const buttonPokedex = document.getElementById("btnPokedex");


buttonHome.addEventListener("click", function(){
    document.getElementById("scIntroduction").style.display = "block";
    document.getElementById("scPokedex").style.display = "none";
    document.getElementById("scShowAllPokemon").style.display = "none";
    //document.getElementById("myModal").style.display = "none";
  });

  buttonPokedex.addEventListener("click", function(){

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";
  
  const getCards = getDataPokemon();
  

 getCards.forEach((item)=>{

const cardBox=document.querySelector(".scCards");

const newCard = document.createElement("div");
newCard.className= "card";

const newCardBody=document.createElement("div");
newCardBody.className= "card_body";

const newH3= document.createElement("h3");
newH3.className= "card_title";
newH3.innerText= item.num;

const newImg=document.createElement("img");
newImg.src=item.img;

const nextEspace=document.createElement("br");


const newLabel=document.createElement("label");
newLabel.innerText=item.name.toUpperCase();
newLabel.className="card_title";

cardBox.appendChild(newCard);
newCard.appendChild(newCardBody);
newCardBody.appendChild(newH3);
newCardBody.appendChild(newImg);
newCardBody.appendChild(nextEspace);
newCardBody.appendChild(newLabel);

})
  //console.log(data);
  // Get the modal
/*
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
*/
})

 


const optionOrder = document.querySelectorAll('input[type=radio][name="rdOptionShow"]');

optionOrder.forEach(optionOrder => optionOrder.addEventListener('change', () => {

  document.getElementById("scPokedex").style.display = "block";
  document.getElementById('scShowAllPokemon').innerHTML = '';
  document.getElementById("scShowAllPokemon").style.display = "flex";
  document.getElementById("scIntroduction").style.display = "none";

  const getCardsOrderBy = orderByOpcion(optionOrder.value);
        
  getCardsOrderBy.forEach((item)=>{

    const cardBox=document.querySelector(".scCards");
    
    const newCard = document.createElement("div");
    newCard.className= "card";
    
    const newCardBody=document.createElement("div");
    newCardBody.className= "card_body";
    
    const newH3= document.createElement("h3");
    newH3.className= "card_title";
    newH3.innerText= item.num;
    
    const newImg=document.createElement("img");
    newImg.src=item.img;
    
    const nextEspace=document.createElement("br");
    
    
    const newLabel=document.createElement("label");
    newLabel.innerText=item.name.toUpperCase();
    newLabel.className="card_title";
    
    cardBox.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newH3);
    newCardBody.appendChild(newImg);
    newCardBody.appendChild(nextEspace);
    newCardBody.appendChild(newLabel);
    
    });
}
))

buttonSearch.addEventListener("click", function(){
  document.getElementById("scSearch").style.display = "block";
  document.getElementById("scIntroduction").style.display = "none";
  document.getElementById("scPokedex").style.display = "none";
  document.getElementById("scShowAllPokemon").style.display = "none";
  //document.getElementById("myModal").style.display = "none";

    const values = getDataPokemon();
    const item = values[0].num['type'];
    console.log(item);
    const select = document.createElement("select");
    select.name = "pokemontypes";

  const result = values.reduce((acc,item)=>{
    if(!acc.includes(item)){
      acc.push(item);
    }
    return acc;
  },[])

  console.log(result); 

    for (const val of result)
    {
        const option = document.createElement("option");
        option.value = val;
        option.textContent = values.type;
       // option.text = result.value;
        select.appendChild(option);
    }
 
    document.getElementById("filterContainer").appendChild(select);
})



 /*
// When the user clicks on <span> (x), close the modal
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

const modal = document.getElementById("myModal");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}*/


  //document.getElementById("myModal").innerHTML= allDataPokemon;
  
 // document.getElementById("scShowAllPokemon").innerHTML= allDataPokemon;
//TODO: hacer funcion que, dado un arreglo de objetos (pokemones) devuelva un arreglo de 'tarjetas'

//window.addEventListener('load', ()=>{

  //hacer el llenado inicial de las tarjetas
  
    //TODO limpiar el contenedor
    // appendChild de cada item al contenedor


/*const containerScShowAllPokemon = (num,name,img) =>{
  const containerId = document.getElementById("lblIdPokemon");
  const containerName = document.getElementById("lblNamePokemon");
  const containerImg = document.getElementById("imgImagenPokemon");
 // console.log(containerName);
  containerId.innerText= num;
  containerId.innerText= name;

}*/







