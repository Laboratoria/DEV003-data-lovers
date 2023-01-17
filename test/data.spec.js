import { getDataPokemon,filterData,orderByOption,evolutions } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';
// hacker edition
/*
let data = [];

const getPokemonData = await fetch("../src/data/pokemon/pokemon.json");
const pokemonData = await getPokemonData.json();
//data. pokemonData.pokemon;
data = pokemonData;
*/



describe('get Data of pokemons', () => {
   it('is a function', () => {
   expect(typeof getDataPokemon).toBe('function');
  });

//data === undefined || typeof data !== 'object' || 
//data === 0 || data === null || data.length === 0 || data === ''
  it('should throw TypeError when invoked with wrong argument', () => {
   // let result = getObjectDescription("");
   //expect(post.length).toBeGreaterThanOrEqual(1);
   //expect(post[0].id).toBe(1);
   
    expect(() => getDataPokemon.toBe(undefined)).toThrow(TypeError);
    expect(() => getDataPokemon.not.objectContaining()).toThrow(TypeError);
    expect(() => getDataPokemon.toBeempty()).toThrow(TypeError);
    expect(() => getDataPokemon.toBeNull()).toThrow(TypeError);
    expect(() => getDataPokemon.length(0)).toThrow(TypeError);
    expect(() => getDataPokemon().toBeFalsy()).toThrow(TypeError);
    //expect(() => getDataPokemon[0]).toEqual(data);
  });

  it('returns `Data of pokemons`', () => {
   const dataPokemon = data['pokemon'];
//   const dataPokemon = data.pokemon;
    expect(getDataPokemon()).toBe(dataPokemon);
  });
});

describe('orderByOption', () => {
  it('is a function', () => {
    expect(typeof orderByOption).toBe('function');
  });

  it('returns `Order data by Asc`', () => {
  const result = orderByOption("1");
  expect(result[2].name).toBe('venusaur');  
  });

  it('returns `Order data by Desc`', () => {
    const result = orderByOption("2");
    expect(result[0].name).toBe('celebi');
  });

  it('returns `Order data by A-Z`', () => {
    const result = orderByOption("3");
    expect(result[0].name).toBe('abra');  
  });
  it('returns `Order data by Z-A`', () => {
    const result = orderByOption("4");
    expect(result[0].name).toBe('zubat');  
  });

  it('returns `Order by Top10`', () => {
    const result = orderByOption("5");
    expect(result[0].name).toBe('mew');  
  });

});

describe('evolutions', () => {
  it('is a function', () => {
    expect(typeof evolutions).toBe('function');
  });
/*
  it('returns `Filter by Previous Evolution`', () => {
    let condition ="pikachu";
    let filterBy=evolutions('name', condition);
    //result[0]['evolution']['prev-evolution'][0].num;
    expect(filterBy[0]['evolution']['prev-evolution'][0].num).toBe('172'); //pichu
  });
*/
  it('returns `Filter by evolutions`', () => {
    let condition ="kakuna";
    let filterBy=evolutions('name', condition);
    expect(filterBy[2].name).toContain('beedrill');
  });

});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  
  it('returns `Filter data by type`', () => {
    let condition ="poison";
    let filterBy=filterData('type', condition);
    expect(filterBy[0].type).toContain('poison');
  });

  it('returns `Filter data by kanto`', () => {
    //let condition="kanto";
    let filterBy=filterData('kanto', 'kanto' );
    expect(filterBy[0].generation.name).toBe('kanto');
  });

  it('returns `Filter data by johto`', () => {
    //let condition="kanto";
    let filterBy=filterData('johto', 'johto' );
    expect(filterBy[0].generation.name).toBe('johto');
  });

  it('returns `Filter data by name`', () => {
    let condition ="kakuna";
    let filterBy=filterData('name', condition);
    expect(filterBy[0].name).toBe('kakuna');
  });

  it('returns `Filter data by num`', () => {
    let condition ="202";
    let filterBy=filterData('num', condition);
    expect(filterBy[0].name).toBe('wobbuffet');
  });

  it('returns `Filter data by weaknesses`', () => {
    let condition ="dragon";
    let filterBy=filterData('weaknesses', condition);
    expect(filterBy[0].name).toContain('dratini');
  });


});





