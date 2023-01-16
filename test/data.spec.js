import { filterData, getData, orderAlf } from '../src/data.js';


describe('filterData', () => {
  it('returns `filterData', () => {
    expect(filterData()).toEquals('example');
  });
});

it('returns `filterData', () => {
  expect(filterData()).toEquals('example');
});


describe('getData', () => {
  it('is a function', () => {
    expect(typeof getData).toBe('function');
  });

  /* it('returns `anotherExample`', () => {
     expect(anotherExample()).toBe('OMG');
  });*/
});

describe('orderAlf', () => {
  it('is a function', () => {
    expect(typeof orderAlf).toBe('function');
  });

  it.only('retorna array ordenado alfabeticamente', () => {
    const array = ["g", "t", "z", "d", "a"];
    expect(orderAlf("alphabetic", array)).toBe(["a", "d", "g", "t", "z"]);
  });

  it.only('retorna array ordenado alfabeticamente en reversa', () => {
    const array = ["g", "t", "z", "d", "a"]
    expect(orderAlf("reverse", array)).toBe(["z", "t", "g", "d", "a"]);
  });
});


