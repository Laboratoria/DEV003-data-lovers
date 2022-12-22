import data from "./data/harrypotter/data.js";
<<<<<<< HEAD

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
=======
const { characters } = data;
const { spells } = data;

export const example = (id) => {
  return characters[id].name;
};

//como meter un elemento a un array ([].push)
//como condicionar para que no se repitan los elementos en el array (if..)
//como accesar a la información que necesito
//aplicar la condición que evita que se repitan los elementos que van a ser empujados

let species = [];

for (let i = 0; i < characters.length; i++) {
  const currentSpecies = characters[i].species?.toLowerCase();
  if (species.includes(currentSpecies) === false) {
    species.push(currentSpecies);
  }
}

console.log(species.sort());

let gender = [];

for (let i = 0; i < characters.length; i++) {
  const currentGender = characters[i].gender?.toLowerCase();
  if (gender.includes(currentGender) === false) {
    gender.push(currentGender);
  }
}

console.log(gender.sort());

let house = [];

for (let i = 0; i < characters.length; i++) {
  const currentHouse = characters[i].house?.toLowerCase();
  if (house.includes(currentHouse) === false) {
    house.push(currentHouse);
  }
}

console.log(house.sort());

let ancestry = [];

for (let i = 0; i < characters.length; i++) {
  const currentAncestry = characters[i].ancestry?.toLowerCase();
  if (ancestry.includes(currentAncestry) === false) {
    ancestry.push(currentAncestry);
  }
}

console.log(ancestry.sort());

let spellType = [];

for (let i = 0; i < spells.length; i++) {
  const currentSpelltype = spells[i].spell_type?.toLowerCase();
  if (spellType.includes(currentSpelltype) === false) {
    spellType.push(currentSpelltype);
  }
}

console.log(spellType.sort());
>>>>>>> cecbeb2685bc77063fd7a6722fd7fde99a2367d9
