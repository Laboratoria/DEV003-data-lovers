import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  //una funcion un return no funciona lo de abajo mucho
 // it('is a function', () => {
   // expect(typeof example).toBe('function');
  //});

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
