import { example, anotherExample, getCharacters } from '../src/data.js';
import data from '../src/data/harrypotter/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


  
describe('getcharacters', () => {
  it('is a function', () => {
    expect(typeof getCharacters).toBe('function');
  });

  it('returns harry potter characters', () => {
    const characters = getCharacters(data);
    expect(characters).toBe(data.characters);
  });
});
