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
describe("filtro directores", () => {
  
  it('películas por director', () => {
    expect(peliculasDirector()).toEqual([
      { director1: "película1" },
      { director2: "película2"},
      { director3: "pelicula1"}
    ]);
  });
});

// test contador y porcentaje
describe("contador por director", () => {
  
  it('contador por director', (listaPeliculas) => {
    expect(contador()).toEqual(listaPeliculas.length);
  });
});

// test de porcentajes por director
describe("porcentajes", () => {
  
  it('porcentajes por director', (porDirector, totales) => {
    expect(porcentajesDirector()).toEqual(
      (porDirector * 100) / totales
    )});
});
