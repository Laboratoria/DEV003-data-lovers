import {
  getData,
  createCharEl,
  charFilters,
  sortMe,
  calculo,
} from "../src/data.js";

describe("getData", () => {
  it("is a function", () => {
    expect(typeof getData).toBe("function");
  });

  it("returns `getData`", () => {
    expect(getData()).toBe("getData");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
