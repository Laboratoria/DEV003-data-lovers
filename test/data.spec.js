import { titleList, ordenadorAZ, peliculasDirector, contador, porcentajesDirector } from '../src/data.js';

// test de lista completa de títulos
describe("titleList", () => {
  
  it('array lista de películas', () => {
    expect(titleList([
      {
        title: 'title',
        director: 'director',
        producer: 'producer',
        release_date: '2022',
        poster: 'poster',
        people: []
      },
      {
        title: 'title2',
        director: 'director2',
        producer: 'producer2',
        release_date: '2011',
        poster: 'poster2',
        people: []
      }
    ])).toEqual([        
      {      
        titulo: 'title',
        director: 'director',
        productor: 'producer',
        lanzamiento: '2022',
        poster: 'poster',
        personajes: []
      },
      {
        titulo: 'title2',
        director: 'director2',
        productor: 'producer2',
        lanzamiento: '2011',
        poster: 'poster2',
        personajes: []
      }
    ])
  });
});

// test de botón de orden alfabético
describe("ordenadorAZ", () => {
  
  it('orden alfabético', () => {
    expect(ordenadorAZ([
      { titulo: "C" },
      { titulo: "Z" },
      { titulo: "F" }
    ])).toEqual([
      { titulo: "C" },
      { titulo: "F" },
      { titulo: "Z" }
    ]);
  });
});

//--- de acá hacia abajo estoy probando las funciones que faltan ---


// test de filtro de directores
describe('director1 se encuentra en la lista de directores', () => {
  expect(peliculasDirector()).toEqual([
    { director1: "pelicula1" },
    { director1: "pelicula2" }],
  [{ director2: "pelicula1" },
    { director2: "pelicula2" }]);
});

// test contador y porcentaje
describe("contador", () => {

  it('contador debe ser una función', () => {
    expect(typeof contador).toBe('function');
  });
});

// test de porcentajes por director
describe("porcentajes", () => {

  it('porcentaje por director debe ser una función', () => {
    expect(typeof porcentajesDirector).toBe('function');
  });
});
