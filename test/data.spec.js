import {
  getData,
  createCharEl,
  charFilters,
  sortMe,
  calculo,
} from "../src/data.js";
import data from "../src/data/harrypotter/data.js";

const dummyData = [
  {
    name: "African prince",
    gender: "Male",
    house: null,
  },
  {
    name: "Avery I",
    gender: "Male",
    house: "Slytherin",
  },
  {
    name: "Cadwallader",
    gender: "Male",
    house: "Hufflepuff",
  },
  {
    name: "Euan Abercrombie",
    gender: "Male",
    house: "Gryffindor",
  },
  {
    name: "Hermione Granger",
    gender: "Female",
    house: "Gryffindor",
  },
  {
    name: "Stewart Ackerley",
    gender: "Male",
    house: "Ravenclaw",
  },
];

describe("getData", () => {
  it("is a function", () => {
    expect(typeof getData).toBe("function");
  });

  it("returns character array", () => {
    const findCharacters = getData(data.characters);
    expect(findCharacters).toBe(findCharacters);
  });
});

describe("charFilters", () => {
  it("is a function", () => {
    expect(typeof charFilters).toBe("function");
  });

  it("returns `filter data by gender female`", () => {
    const charFound = charFilters(dummyData, "Female", "Gryffindor");
    expect(charFound[0].name).toBe("Hermione Granger");
  });

  it("returns `filter data by gender male`", () => {
    const charFound = charFilters(dummyData, "Male", "Gryffindor");
    expect(charFound[0].name).toBe("Euan Abercrombie")
  });
});

describe("sortMe", () => {
  it("is a function", () => {
    expect(typeof sortMe).toBe("function");
  });

  it("is a function", () => {

    const arrTest = [{name:"hola"}, {name:'test'}, {name:"adios"}]
   
    sortMe(arrTest)

    expect(arrTest).toEqual([ {name:"adios"}, {name:"hola"}, {name:'test'}]);

  });

 
});

describe("calculo", () => {
  it("is a function", () => {
    expect(typeof calculo).toBe("function");
  });

  it("returns total female characters", () => {
    const totalFemales = calculo(dummyData, ["Female", "Gryffindor"]);
    expect(totalFemales).toBe("Hay 1 mujeres Gryffindor de 6 personajes");
  });
});

describe("createCharEl", () => {
  it("is a function", () => {
    expect(typeof createCharEl).toBe("function");
  });
});
