import { example, anotherExample, getBooks, getCharacters } from '../src/data.js';
import data from '../src/data/harrypotter/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

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


describe('getbooks', () => {
  it('is a function', () => {
    expect(typeof getBooks).toBe('function');
  });

  it('returns harry potter books', () => {
    const books = getBooks(data);
    expect(books).toBe(data.books)
  });
});

describe('getcharacters', () => {
  it('is a function', () => {
    expect(typeof getCharacters).toBe('function');
  });

  it('returns harry potter characters', () => {
    const characters = getCharacters(data);
    expect(characters).toBe(data.characters)
  });
});
