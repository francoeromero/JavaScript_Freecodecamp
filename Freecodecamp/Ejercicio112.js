//Utiliza recursión para crear una cuenta regresiva


//EJEMPLO 

function countup(n) {
  // Si n es menor a 1, se devuelve un arreglo vacío
  if (n < 1) {
    return [];
  } 
  // Llama recursivamente a la función countup con el argumento n - 1
  else {
    const countArray = countup(n - 1);
   // Añade el valor de n al final del arreglo countArray
    countArray.push(n); // PUSHEA
  // Devuelve el arreglo countArray
    return countArray;
  }
}
console.log(countup(5)); //MUESTRA [1, 2, 3, 4, 5]


//EJERCICIO

function countdown(n) {
  // Si n es menor a 1, se devuelve un arreglo vacío
  if (n < 1) {
      return [];
  }
  // Añade el valor de n al principio del arreglo countArray
  else {
      const countArray = countdown(n - 1);
      // Añade el valor de n al principio del arreglo countArray
      countArray.unshift(n); // UNSHIFT 
       // Devuelve el arreglo countArray
      return countArray;
  }
}
console.log(countdown(5));// MUESTRA [5, 4, 3, 2, 1]