import { getDataPokemon,filterData } from '../src/data.js';
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




describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `Filter data by type`', () => {
    const filterBy=[{type:"grass"},{type:"dark"}];
    const condition="grass";
    const array = [{type:"grass"}];
    expect(filterData(filterBy, condition )).toBe(array);
  });

  it('returns `Filter data by name`', () => {
    const filterBy=[{name:"bulbasaur"},{name:"lapras"}];
    const condition="lapras";
    const array = [{name:"lapras"}];
    expect(filterData(filterBy, condition )).toBe(array);
  });
//pokemon.generation.name.includes(condition)
  it('returns `Filter data by kanto`', () => {
    const filterBy=[{name:"kanto"},{name:"johto"}];
    const condition="kanto";
    const array = [{name:"kanto"}];
    expect(filterData(filterBy, condition )).toBe(array);
  });
});
/*
describe('orderByOption', () => {
  it('is a function', () => {
    expect(typeof orderByOption).toBe('function');
  });

  it('returns `Order data by`', () => {
    const filterBy=[{valor:"1"},{valor:"2"}];
    const condition="1";
    const array = [{valor :"grass"}];
    expect(orderByOption(valor )).toBe(array);
  });
});*/
