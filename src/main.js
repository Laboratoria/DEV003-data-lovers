import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const characters=data.results;
const filter=characters.filter((character) => {
    
    return character.id===200
})

console.log(filter);
