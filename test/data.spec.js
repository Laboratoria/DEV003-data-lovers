//import {example, anotherExample} from '../src/data/harrypotter'; //aquí llamamos a la data de Laboratoria
import { 
  buscarPersonajesPorCasa, 

   
} from '../src/data.js'; //aquí llamamos a las funciones que hicimos nosotras

document.body.innerHTML = "<div id='mensajeUsuario'></div>"

//const dataHarryPotter = data.characters
//const // aquí van los arrays


describe('Buscar', () => {
 

  it('debe retornar un personaje', () => {
    expect(buscarPersonajesPorCasa([{name:"Harry Potter",house:"Gryffindor"}],"Gryffindor")).toEqual(["Harry Potter"]);
  });
  it('debe retornar un personaje', () => {
    expect(buscarPersonajesPorCasa([{name:"Severus Snape",house:"Slytherin"}],"Slytherin")).toEqual(["Severus Snape"]);
  });
  it('debe retornar un personaje', () => {
    expect(buscarPersonajesPorCasa([{name:"Luna Lovegood",house:"Ravenclaw"}],"Ravenclaw")).toEqual(["Luna Lovegood"]);
  });
});


//describe('anotherExample', () => {
//it('is a function', () => {
//expect(typeof anotherExample).toBe('function');
//});

//it('returns `anotherExample`', () => {
// expect(anotherExample()).toBe('OMG');
//});
//});
