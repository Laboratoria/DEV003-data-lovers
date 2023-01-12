import { filtroData, ordenar } from '../src/data.js';

//pruebas filtro
describe('filtroData', () => {
  it('es una funcion', () =>{
    expect(typeof filtroData).toEqual('function')
  })
  it('deberia retornar el pokemon con el elemento "pokemons"', () => {
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
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      },
      "spawn-chance": "0.69",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "resistant": [
        "water",
        "electric",
        "grass",
        "fighting",
        "fairy"
      ],
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ],
      "quick-move": [
        {
          "name": "vine whip",
          "type": "grass",
          "base-damage": "7",
          "energy": "6",
          "move-duration-seg": "0.6"
        },
        {
          "name": "tackle",
          "type": "normal",
          "base-damage": "5",
          "energy": "5",
          "move-duration-seg": "0.5"
        }
      ],
      "special-attack": [
        {
          "name": "sludge bomb",
          "type": "poison",
          "base-damage": "80",
          "energy": "-50",
          "move-duration-seg": "2.3"
        },
        {
          "name": "seed bomb",
          "type": "grass",
          "base-damage": "55",
          "energy": "-33",
          "move-duration-seg": "2.1"
        },
        {
          "name": "power whip",
          "type": "grass",
          "base-damage": "90",
          "energy": "-50",
          "move-duration-seg": "2.6"
        }
      ],
      "egg": "2 km",
      "buddy-distance-km": "3",
      "evolution": {
        "candy": "bulbasaur candy",
        "next-evolution": [{
          "num": "002",
          "name": "ivysaur",
          "candy-cost": "25",
          "next-evolution": [{
            "num": "003",
            "name": "venusaur",
            "candy-cost": "100"
          }]
        }]
      }
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
      "pokemon-rarity": "normal",
      "type": [
        "fire"
      ],
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      },
      "spawn-chance": "0.253",
      "stats": {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      },
      "resistant": [
        "fire",
        "grass",
        "ice",
        "bug",
        "steel"
      ],
      "weaknesses": [
        "water",
        "ground",
        "rock"
      ],
      "quick-move": [
        {
          "name": "ember",
          "type": "fire",
          "base-damage": "10",
          "energy": "10",
          "move-duration-seg": "1"
        },
        {
          "name": "scratch",
          "type": "normal",
          "base-damage": "6",
          "energy": "4",
          "move-duration-seg": "0.5"
        }
      ],
      "special-attack": [
        {
          "name": "flame charge",
          "type": "fire",
          "base-damage": "70",
          "energy": "-33",
          "move-duration-seg": "3.8"
        },
        {
          "name": "flame burst",
          "type": "fire",
          "base-damage": "70",
          "energy": "-50",
          "move-duration-seg": "2.6"
        },
        {
          "name": "flamethrower",
          "type": "fire",
          "base-damage": "70",
          "energy": "-50",
          "move-duration-seg": "2.2"
        }
      ],
      "egg": "2 km",
      "buddy-distance-km": "3",
      "evolution": {
        "candy": "charmander candy",
        "next-evolution": [{
          "num": "005",
          "name": "charmeleon",
          "candy-cost": "25",
          "next-evolution": [{
            "num": "006",
            "name": "charizard",
            "candy-cost": "100"
          }]
        }]
      }
    }];
    const condicion = "grass";
    expect(filtroData(pokemons, condicion)).toEqual({
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
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      },
      "spawn-chance": "0.69",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "resistant": [
        "water",
        "electric",
        "grass",
        "fighting",
        "fairy"
      ],
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ],
      "quick-move": [
        {
          "name": "vine whip",
          "type": "grass",
          "base-damage": "7",
          "energy": "6",
          "move-duration-seg": "0.6"
        },
        {
          "name": "tackle",
          "type": "normal",
          "base-damage": "5",
          "energy": "5",
          "move-duration-seg": "0.5"
        }
      ],
      "special-attack": [
        {
          "name": "sludge bomb",
          "type": "poison",
          "base-damage": "80",
          "energy": "-50",
          "move-duration-seg": "2.3"
        },
        {
          "name": "seed bomb",
          "type": "grass",
          "base-damage": "55",
          "energy": "-33",
          "move-duration-seg": "2.1"
        },
        {
          "name": "power whip",
          "type": "grass",
          "base-damage": "90",
          "energy": "-50",
          "move-duration-seg": "2.6"
        }
      ],
      "egg": "2 km",
      "buddy-distance-km": "3",
      "evolution": {
        "candy": "bulbasaur candy",
        "next-evolution": [{
          "num": "002",
          "name": "ivysaur",
          "candy-cost": "25",
          "next-evolution": [{
            "num": "003",
            "name": "venusaur",
            "candy-cost": "100"
          }]
        }]
      }
    });
  })
});

// pruebas ordenar
describe('ordenar', () => {
  it('es una funcion', () => {
    expect(typeof ordenar).toEqual("function")
  });
  it('debe organizar los pokemon de la Z a la A', () => {
    const data = [{name:"bulbasaur"}, {name:"ivysaur"},{name:"venusaur"},{name:"charmander"}]
    const orden = "zA";
    expect(ordenar(data, orden)).toEqual([{name:"venusaur"}, {name:"ivysaur"},{name:"charmander"},{name:"bulbasaur"}], "zA");
  })
  it('debe organizar los pokemon de la A a la Z', () => {
    const data = [{name:"bulbasaur"}, {name:"ivysaur"},{name:"venusaur"},{name:"charmander"}]
    const condicion = "aZ";
    expect(data, condicion).toEqual([{name:"bulbasaur"}, {name:"charmander"},{name:"ivysaur"},{name:"venusaur"}], "aZ");
  })
});

// pruebas multiplicador
/*
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */