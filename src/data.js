// export const example = () => {
//   return 'example';
// };

// export const example = () => {
//  return 'example';
// };
//crear una funcion
// Función de filtrado por tipos de pokemon y debilidades
export const filter = (arr, property, condition) => {
  const element = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let index = 0; index < arr[i][property].length; index += 1) {
      if (arr[i][property][index] === condition) {
        element.push(arr[i]);
      }
      // console.log(condition)
    }
  }
  return element;
};
// Función de filtrado por frecuencia de pokemon y debilidades
export const filtroFrecuencia = (frec, propiedad, condicion) => {
  const frecuenc = [];
  for (let i = 0; i < frec.length; i++) {
    //console.log(frec[i], "frecuena")
    if (frec[i][propiedad] === condicion) {
      frecuenc.push(frec[i]);
    }
    // console.log(frecuenc,"frecu");
  }
  return frecuenc;
};

// ------------------------------------


// export const filtroGeneracion = (generation,data) => {
//   const generateCanto= [];
//   const generateJhoto= [];
 
//   for (let i = 0; i < data.length; i++) {
//     console.log(data['generation']['name'])
//     // console.log(gener[i], "gener")
//     // console.log(propie, "propie")
//     // console.log(condicio, "condicio")

//     if (generation.name==="kanto") {
//       // generateCanto.push(generacion[i]);
     
//     } else{ 
      
//       generateJhoto.push(generation[i]);
//   }
 
//   // return generate;
// }
// console.log(generateCanto);
// console.log(generateJhoto)
// };