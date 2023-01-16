import data from './data/pokemon/pokemon.js';
console.log(data,"hola");
export const type= data.type;
console.log(type,"tipo");

document.getElementById("elemento").addEventListener("change",function(event)
{
  const elementos= document.getElementById("filtroEle").value
console.log(elementos)


})