//Aquí se manipula el DOM y se le agregan eventos
import data from './data/rickandmorty/rickandmorty.js';

import { showAllCharacters, filterData } from './data.js';

showAllCharacters(data.results) //No retorna nada porque solo quiero que muestre cards

function searchButton(){
    const categoSelect=document.getElementById("filtMain").value; //Llama valor del select
    const inpTxt=document.getElementById("searchInp").value; //Llama valor del input
    if (inpTxt) { //Condiciona que el input no quede vacío
        const filteredResult=filterData(data.results, inpTxt, categoSelect); //Lo que retorna filterData almacenado en filteredResult

        showAllCharacters(filteredResult);
        console.log(categoSelect);
        console.log(inpTxt);
    }
    else{
        alert("Por favor introduce un criterio de búsqueda válido")
    }
    
    
}
document.getElementById("searchBtn").onclick=searchButton; //Ejecuta mi función al escuchar click




