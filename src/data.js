import data from "./data/harrypotter/data.js";

const {characters}= data;


// estas funciones son de ejemplo

export const personajes = () => {
  return characters;
};

//como meter un elemento a un array [].push
// export const anotherExample = () => {
//   return 'OMG';
// };


console.log(characters.sort());
