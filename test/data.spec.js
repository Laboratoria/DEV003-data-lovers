import { ordenarAz, ordenarZa, inferior, superior, filtraTipos } from '../src/data.js';

const arrayParaTest = [{ 
"num": "001",
"name": "bulbasaur",
"pokemon-rarity": "normal",
"type": [
  "grass",
  "poison"
],
},
{
"num": "002",
"name": "ivysaur",
"pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
},

{
  "num": "003",
    "name": "venusaur",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
},
{
  "num": "004",
  "name": "charmander",
  "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
},

];

const arrayOrdenarAz = [
{ 
"num": "001",
"name": "bulbasaur",
"pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
],
},
{
  "num": "004",
  "name": "charmander",
  "pokemon-rarity": "normal",
    "type": [
      "fire"
],
},
{
  "num": "002",
  "name": "ivysaur",
  "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
],
},
  
{
    "num": "003",
      "name": "venusaur",
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
],
},

];

const arrayOrdenarZa = [
  {
  "num": "003",
    "name": "venusaur",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
],
},
{
  "num": "002",
  "name": "ivysaur",
  "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
],
},
{
  "num": "004",
  "name": "charmander",
  "pokemon-rarity": "normal",
    "type": [
      "fire"
],
},
{ 
  "num": "001",
  "name": "bulbasaur",
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
],
},

];

const arrayInferior = [{
"num": "001",
"name": "bulbasaur",
"pokemon-rarity": "normal",
"type": [
  "grass",
  "poison"
],
},
{
"num": "002",
"name": "ivysaur",
"pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
},

{
  "num": "003",
    "name": "venusaur",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
},
{
  "num": "004",
  "name": "charmander",
  "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
},

];
const arraySuperior = [
  {
    "num": "004",
    "name": "charmander",
    "pokemon-rarity": "normal",
      "type": [
        "fire"
  ],
  },
  {
    "num": "003",
      "name": "venusaur",
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
  ],
  },
  {
    "num": "002",
    "name": "ivysaur",
    "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
  ],
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
  ],
  },
];

const arrayFire = [
    {
      "num": "004",
      "name": "charmander",
      "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
    },
  ];

  
describe('ordenarAz', () => {
  it('is a function', () => {
    expect(typeof ordenarAz).toBe('function');
  });
  it('returns un array que contiene los pokemon ordenados de la A-Z', () => {
    expect(ordenarAz(arrayParaTest)).toEqual(arrayOrdenarAz);
    });
    });

describe('ordenarZa', () => {
 it('deberia ser una funcion', () => {
 expect(typeof ordenarZa).toBe('function');
 });
 
 it('returns un array que contiene los pokemon ordenados de la Z-A', () => {
 expect(ordenarZa(arrayParaTest)).toEqual(arrayOrdenarZa);
 });
 });
 

describe('inferior', () => {
  it('is a function', () => {
  expect(typeof inferior).toBe('function');
  });

it('returns un array que contiene los pokemon ordenados de menor a mayor', () => {
expect(inferior(arrayParaTest)).toEqual(arrayInferior);
});
});
 

describe('superior', () => {
  it('is a function', () => {
  expect(typeof superior).toBe('function');
  });

it('returns un array que contiene los pokemon ordenados de mayor a menor', () => {
expect(superior(arrayParaTest)).toEqual(arraySuperior);
});
});

describe('filtraTipos', () => {
 it('deberia ser una funcion', () => {
 expect(typeof filtraTipos).toBe('function');
 });
 
it('returns un array que contiene los Pokémon tipo fire', () => {
expect(filtraTipos("fire", arrayParaTest)).toEqual(arrayFire);
});
});
 

