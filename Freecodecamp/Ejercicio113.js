//Usa recursión para crear un rango de números


function rangeOfNumbers(startNum, endNum) {
  // Si startNum es igual a endNum, se devuelve un arreglo con el valor de startNum
  if (startNum === endNum) {
    return [startNum];
  } 
  // Si startNum es diferente a endNum
  else {
    // Llama recursivamente a la función rangeOfNumbers con el argumento endNum - 1
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    // Añade el valor de endNum al final del arreglo rangeArray
    rangeArray.push(endNum);
    // Devuelve el arreglo rangeArray
    return rangeArray;
  }
}
console.log(rangeOfNumbers(2,5));