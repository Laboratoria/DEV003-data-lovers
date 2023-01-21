import { ordenadorAZ, titleList, peliculasDirector } from '../src/data.js';


describe("ordenadorAZ", () => {
  
  it('returns `example`', () => {
    expect(ordenadorAZ([{ titulo: "C" },
      { titulo: "Z" },
      { titulo: "F" }
    ])).toEqual([{ titulo: "C" },
      { titulo: "F" },
      { titulo: "Z" }
    ]);
  });
});