import { filtroData, ordenar, estadisticaFiltro, calcular } from '../src/data.js';

//pruebas filtro
describe('filtroData', () => {

  it('es una funcion', () =>{
    expect(typeof filtroData).toEqual('function')
  })
  it('deberia retornar el pokemon con el elemento "grass"', () => {
    const pokemons = [{
      "num": "001",
      "name": "bulbasaur",
      "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    }, {
      "num": "004",
      "name": "charmander",
      "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      },
      "type": [
        "fire"
      ],
    },
    {
      "num": "002",
      "name": "ivysaur",
      "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
    {
      "num": "003",
      "name": "venusaur",
      "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    }];

    const condicion = "grass";
    const orden = filtroData(pokemons, condicion);
    expect(orden.length).toEqual(3)
    expect(orden[0].name).toEqual('bulbasaur');
    expect(orden[1].name).toEqual('ivysaur');
    expect(orden[2].name).toEqual('venusaur');
    
  });
});

// pruebas ordenar
describe('ordenar', () => {
  it('es una funcion', () => {
    expect(typeof ordenar).toEqual("function")
  });
  it('debe organizar los pokemon de la Z a la A', () => {
    const data = [{name:"bulbasaur", num:"001"}, {name:"ivysaur", num:"002"},{name:"venusaur", num:"003"},{name:"charmander", num:"004"}]
    expect(ordenar(data, "zA")).toEqual([{name:"venusaur", num:"003"}, {name:"ivysaur", num:"002"},{name:"charmander", num:"004"},{name:"bulbasaur", num:"001"}]);
  })
  it('debe organizar los pokemon de la A a la Z', () => {
    const data = [{name:"bulbasaur", num:"001"}, {name:"ivysaur", num:"002"},{name:"venusaur", num:"003"},{name:"charmander", num:"004"}]
    expect(ordenar(data, "aZ")).toEqual([{name:"bulbasaur", num:"001"}, {name:"charmander", num:"004"},{name:"ivysaur", num:"002"},{name:"venusaur", num:"003"}]);
  })
  it('debe organizar los pokemon de menor a mayor por ID o num', () => {
    const data = [{name:"bulbasaur", num:"001"}, {name:"ivysaur", num:"002"},{name:"venusaur", num:"003"},{name:"charmander", num:"004"}]
    expect(ordenar(data, "ascendente")).toEqual([{name:"bulbasaur", num:"001"},{name:"ivysaur", num:"002"},{name:"venusaur", num:"003"},{name:"charmander", num:"004"}]);
  })
  it('debe organizar los pokemon de mayor a menor por ID o num', () => {
    const data = [{name:"bulbasaur", num:"001"}, {name:"ivysaur", num:"002"},{name:"venusaur", num:"003"},{name:"charmander", num:"004"}]
    expect(ordenar(data, "descendente")).toEqual([{name:"charmander", num:"004"}, {name:"venusaur", num:"003"}, {name:"ivysaur", num:"002"}, {name:"bulbasaur", num:"001"}]);
  })
});
 
// pruebas filtro para estadistica
describe('estadisticaFiltro', () => {
 
  it('es una funcion', () =>{
    expect(typeof estadisticaFiltro).toEqual('function')
  })
  it('deberia retornar el pokemon con la region "Kanto"', () => {
    const pokemons = [{
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    }, {
      "num": "004",
      "name": "charmander",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      },
      "type": [
        "fire"
      ],
    },
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
    {
      "num": "003",
      "name": "venusaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    }];
 
    const condicion = "kanto";
    const orden = estadisticaFiltro(pokemons, condicion);
    expect(orden.length).toEqual(4)
    expect(orden[0].name).toEqual('bulbasaur');
    expect(orden[1].name).toEqual('charmander');
    expect(orden[2].name).toEqual('ivysaur');
    expect(orden[3].name).toEqual('venusaur');
  });
});

//pruebas calcular
describe('calcular', () => {

  it('es una funcion', () =>{
    expect(typeof calcular).toEqual('function')
  })
  it('deberia retornar el numero de pokemones en la data', () => {
    const pokemonsKanto = [{
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    }, {
      "num": "004",
      "name": "charmander",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      },
      "type": [
        "fire"
      ],
    },
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
    {
      "num": "003",
      "name": "venusaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      },
      "type": [
        "grass",
        "poison"
      ],
    }];

    const calculo = calcular(pokemonsKanto);
    expect(calculo).toEqual(Math.round((pokemonsKanto.length*100)/251));
  });
});