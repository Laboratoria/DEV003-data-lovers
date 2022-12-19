// estas funciones son de ejemplo
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const getBooks = (data) => {
  return data.books;
}

export const getCharacters = (data) => {
  return data.characters;

}

const searchCharacterByName = (name, characters) => {
  if(name === "") return []

  const charactersFound = characters.filter(function(character){
    const characterName = character.name.toLowerCase();
    return characterName.includes(name.toLowerCase());
  })
  return charactersFound
}
export const searchCharacterByName = (name, characters) => {
  if (name === '') return []
        
  const charactersFound = characters.filter(function (character) {
    const characterName = character.name.toLowerCase();
    return characterName.includes(name.toLowerCase());
  })
        
  return charactersFound;
}
