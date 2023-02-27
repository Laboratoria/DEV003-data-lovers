import { filterData, orderAlf, getData } from '../src/data.js';

const mockCharacters = [{ "name": "Rick Sanchez" }, { "name": "Morty Smith" }, { "name": "Summer Smith" }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should work correctly using name criteria', () => {
    const filteredResult = filterData(mockCharacters, 'morty', 'name');
    expect(filteredResult).toEqual([{ "name": "Morty Smith" }]);
  });
});
const mockSpecies = [{ "species": "vampire" }, { "species": "human" }, { "species": "alien" }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should filter using species criteria', () => {
    const filtLoc = filterData(mockSpecies, 'vampire', 'species');
    expect(filtLoc).toEqual([{ "species": "vampire" }]);
  });
});
const mockType = [{ "type": "Genetic experiment" }, { "type": "Superhuman (Ghost trains summoner)" }, { "type": "Parasite, Cyborg" }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should filter all type criteria', () => {
    const filType = filterData(mockType, 'Genetic experiment', 'type');
    expect(filType).toEqual([{ "type": "Genetic experiment" }]);
  });
});
const mockStatus = [{ "status": "dead" }, { "status": "alive" }, { "status": "unkown" }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should work filtering by status criteria', () => {
    const filtStatus = filterData(mockStatus, 'dead', 'status');
    expect(filtStatus).toEqual([{ "status": "dead" }]);
  });
});
const mockGen = [{ "gender": "female" }, { "gender": "male" }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should filter by gender male or female', () => {
    const filtGen = filterData(mockGen, 'female', 'gender');
    expect(filtGen).toEqual([{ "gender": "female" }]);
  });
});
const mockOrigin = [{ "origin": { "name": "Purge Planet" } }, { "origin": { "name": "unknown" } }, { "origin": { "name": "Venzenulon 7" } }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should filter the data by origin criteria', () => {
    const filtOrigin = filterData(mockOrigin, 'unknown', 'origin');
    expect(filtOrigin).toEqual([{ "origin": { "name": "unknown" } }]);
  });
});
const mockLoc = [{ "location": { "name": "Venzenulon 7" } }, { "location": { "name": "Interdimensional Cable" } }, { "location": { "name": "Bepis 9" } }]
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('should work correctly filtering by location criteria', () => {
    const filtLoc = filterData(mockLoc, 'Bepis 9', 'location');
    expect(filtLoc).toEqual([{ "location": { "name": "Bepis 9" } }]);
  });
});

describe('orderAlf', () => {
  it('is a function', () => {
    expect(typeof orderAlf).toBe('function');
  });
  it('retorna array ordenado alfabeticamente', () => {
    const array = [{ "name": "g" }, { "name": "t" }, { "name": "z" }, { "name": "d" }, { "name": "a" }];
    expect(orderAlf("alphabetic", array)).toEqual([{ "name": "a" }, { "name": "d" }, { "name": "g" }, { "name": "t" }, { "name": "z" }]);
  });
  it('retorna array ordenado alfabeticamente en reversa', () => {
    const array = [{ "name": "g" }, { "name": "t" }, { "name": "z" }, { "name": "d" }, { "name": "a" }];
    expect(orderAlf("reverse", array)).toEqual([{ "name": "z" }, { "name": "t" }, { "name": "g" }, { "name": "d" }, { "name": "a" }]);
  });
});

describe('getData', () => {
  it('is a function', () => {
    expect(typeof getData).toBe('function');
  });
  it('retorna la data filtrada y ordenada', () => {
    const data = {results:[{
      "name": "Morty Smith",
      "status": "Alive"
    },
    {
      "name": "Rick Sanchez",
      "status": "Alive"
    },
    {
      "name": "Abradolf Lincler",
      "status": "unknown"
    },
    {
      "name": "Adjudicator Rick",
      "status": "Dead"
    }]};

    expect(getData("status", "alive", "alphabetic", data)).toEqual([{
      "name": "Morty Smith",
      "status": "Alive"
    },
    {
      "name": "Rick Sanchez",
      "status": "Alive"
    }]);
  });
});
