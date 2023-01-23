import { titleList, ordenadorAZ, peliculasDirector, contador, porcentajesDirector } from '../src/data.js';
// import mockdata from './mockdata.js';
// jest.mock("./data/ghibli/ghibli.js", () => ({
//   ghibli: mockdata
// }), { virtual: true });

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
describe("filtro directores", () => {
  
  it('array lista peliculas por director', () => {
    expect(peliculasDirector("Hayao Miyazaki", [
      {
        title: 'title',
        director: 'Hayao Miyazaki',
        producer: 'producer',
        release_date: '2022'
      },
      {
        title: 'title2',
        director: 'Juan',
        producer: 'producer2',
        release_date: '2011'
      }
    ])).toEqual([        
      {
        title: 'title',
        director: 'Hayao Miyazaki',
        producer: 'producer',
        release_date: '2022'
      },
    ])
  })
});

// describe('director1 se encuentra en la lista de directores', () => {
//   expect(peliculasDirector("Hayao Miyazaki").length).toEqual(9)
// });

// test contador y porcentaje
describe("contador", () => {

  it('contador de películas', () => {
    expect(typeof contador).toBe('function');
  });
});

// test de porcentajes por director
describe("porcentajes", () => {

  it('porcentajes de películas por director', () => {
    expect(typeof porcentajesDirector).toBe('function');
  });
});
