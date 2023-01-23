import { filterDirector, sortMovies } from '../src/data.js';
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
//pendiente de test!
describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });
});

describe('sortMovies', () => {
  it('is a function', () => {
    expect(typeof sortMovies).toBe('function');
  });

  it('debe ordenar realease date descendente', () => {
    expect(sortMovies(testMovie, 'downward')).toEqual([
      {
        "title": "The Secret World of Arrietty",
        "director": "Hiromasa Yonebayashi",
        "release_date": "2010",
      },

      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "release_date": "2002",
      },
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
      }
    ]);
  });
  it('debe ordenar realease date ascendente', () => {
    expect(sortMovies(testMovie, 'upward')).toEqual([
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
      },
      {
        "title": "The Cat Returns",
        "director": "Hiroyuki Morita",
        "release_date": "2002",
      },
      {
        "title": "The Secret World of Arrietty",
        "director": "Hiromasa Yonebayashi",
        "release_date": "2010",
      }
    ])
  });
})

//crear data para testeo
