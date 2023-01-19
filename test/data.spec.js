import { ordenadorAZ } from '../src/data.js';


describe("ordenadorAZ", () => {
  
  it('returns `example`', () => {
    expect(ordenadorAZ([{ titulo: "Castle In the Sky" },
      { titulo: "Z" },
      { titulo: "F" }
    ])).toEqual([{ titulo: "Castle In the Sky" },
      { titulo: "F" },
      { titulo: "Z" }
    ]);
  });
});


