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
  } return element;
};
