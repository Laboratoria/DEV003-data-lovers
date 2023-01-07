import { getDataPokemon } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('get Data of pokemons', () => {
  //una funcion un return no funciona lo de abajo mucho
  // it('is a function', () => {
  // expect(typeof example).toBe('function');
  //});

  it('returns `Data of pokemons`', () => {
    const dataPokemon = data['pokemon'];
    expect(getDataPokemon()).toBe(dataPokemon);
  });
});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
