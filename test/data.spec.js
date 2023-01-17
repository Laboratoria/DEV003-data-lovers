import { filterData, orderAlf } from '../src/data.js';

const mockCharacters=[{"name": "Rick Sanchez"}, {"name": "Morty Smith"}, {"name": "Summer Smith"}]
describe('filterData', () => 
  it('should work correctly using name criteria', () => {
    const filteredResult=filterData(mockCharacters,'morty','name');
    expect(filteredResult).toEqual([{"name": "Morty Smith"}]);
  })
)
const mockSpecies=[{"species": "vampire"}, {"species": "human"}, {"species": "alien"}]
describe('filterData', () =>
  it('should filter using species criteria', () => {
    const filtLoc=filterData(mockSpecies,'vampire', 'species');
    expect(filtLoc).toEqual([{"species": "vampire"}]);
  })
)
const mockType=[{"type":"Genetic experiment"}, {"type": "Superhuman (Ghost trains summoner)"}, {"type": "Parasite, Cyborg"}]
describe('filterData', () =>
  it('should filter all type criteria', ()=>{
    const filType=filterData(mockType, 'Genetic experiment', 'type');
    expect(filType).toEqual([{"type": "Genetic experiment"}]);
  })
)
const mockStatus=[{"status": "dead"}, {"status": "alive"}, {"status": "unkown"}]
describe('filterData', ()=>
  it('should work filtering by status criteria', ()=>{
    const filtStatus=filterData(mockStatus, 'dead', 'status');
    expect(filtStatus).toEqual([{"status": "dead"}]);
  })
)


const mockGen=[{"gender": "female"}, {"gender": "male"}]
describe('filterData', ()=>
  it('should filter by gender male or female', ()=>{
    const filtGen=filterData(mockGen, 'female', 'gender');
    expect(filtGen).toEqual([{"gender": "female"}]);
  })
)

const mockOrigin=[{"origin":{"name": "Purge Planet"}}, {"origin":{"name": "unknown"}}, {"origin":{"name": "Venzenulon 7"}}]
describe('filterData', ()=>
  it('should filter the data by origin criteria', ()=>{
    const filtOrigin=filterData(mockOrigin, 'unknown', 'origin');
    expect(filtOrigin).toEqual([{"origin": {"name": "unknown"}}]);
  })
)

const mockLoc=[{"location":{"name": "Venzenulon 7"}}, {"location":{"name":"Interdimensional Cable"}},{"location":{"name":"Bepis 9"}}]
describe('filterData', ()=>
  it('should work correctly filtering by location criteria', ()=>{
    const filtLoc=filterData(mockLoc, 'Bepis 9', 'location');
    expect(filtLoc).toEqual([{"location":{"name":"Bepis 9"}}]);
  })
)

it.only('retorna array ordenado alfabeticamente', () => {
  const array = ["g", "t", "z", "d", "a"];
  expect(orderAlf("alphabetic", array)).toBe(["a", "d", "g", "t", "z"]);
});

it.only('retorna array ordenado alfabeticamente en reversa', () => {
  const array = ["g", "t", "z", "d", "a"]
  expect(orderAlf("reverse", array)).toBe(["z", "t", "g", "d", "a"]);
});
