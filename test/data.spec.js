import { filterDirector} from '../src/data.js';
//
const testMovie = [ 
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
  },
  {
    "title": "The Secret World of Arrietty",
    "director": "Hiromasa Yonebayashi",
    "release_date": "2010",
  },
  {
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "release_date": "2002", 
  }
]
//Isao Takahata
describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });

  it('deberia retornar 1 para "testMovie" y Hayao Miyazaki', () => {
    expect(filterDirector(testMovie, "Hayao Miyazaki")).toBe('true');
  });
});

//crear data para testeo
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