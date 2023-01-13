//Anida bucles "for"
//El objetivo del ejercicio es devolver todos los valores del sub arreglo en consola
//EJEMPLO:

const arr = [
  [1, 2], [3, 4], [5, 6]
];
// Declaración de un arreglo bidimensional llamado "arr" con 3 subarreglos

for (let i = 0; i < arr.length; i++) {

  // Ciclo for que recorre los subarreglos del arreglo principal, 
  //el valor inicial de "i" es 0, la condición de parada es que "i" sea menor al largo del arreglo principal (arr.length) 
  //y en cada iteración se incrementa en 1

  for (let j = 0; j < arr[i].length; j++) {

    //ciclo for que recorre los elementos dentro del subarreglo actual, 
    //el cual esta siendo accedido con el índice "i" del ciclo externo
    // el valor inicial de "j" es 0, la condición de parada es que "j" sea menor al largo del subarreglo actual (arr[i].length) 
    //y en cada iteración se incrementa en 1

    console.log(arr[i][j]);

    // imprime en consola el valor del elemento en la posición i,j del arreglo bidimensional "arr"
  }
}

/*
arr.length -------Arreglo
arr[i].length-----Sub-Arreglo

*/


//EJERCICIO:

function multiplyAll(arr) {
  // Declaración de una función llamada "multiplyAll" que toma un parámetro "arr"
  let product = 1;
  // Declaración de una variable "product" con un valor inicial de 1
  
  for(let i = 0; i < arr.length ; i++){
    // Ciclo for que recorre los subarreglos del arreglo principal,
    // el valor inicial de "i" es 0, la condición de parada es que "i" sea menor al largo del arreglo principal (arr.length)
    // y en cada iteración se incrementa en 1
    for(let j = 0; j < arr[i].length; j++){
      // ciclo for que recorre los elementos dentro del subarreglo actual, 
      //el cual esta siendo accedido con el índice "i" del ciclo externo
      // el valor inicial de "j" es 0, la condición de parada es que "j" sea menor al largo del subarreglo actual (arr[i].length)
      // y en cada iteración se incrementa en 1
      product *= arr[i][j];
      // en cada iteración del ciclo interno se multiplica el valor actual de product con el valor del elemento en la posición i,j del arreglo bidimensional "arr"
    }
  }
  return product;
}
  // se retorna el valor
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  /*
  El resultado de la función multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) sería 5040. El producto final se calcula multiplicando todos los elementos de cada subarreglo dentro del arreglo principal.

1 * 2 = 2
2 * 3 = 6
6 * 4 = 24
24 * 5 = 120
120 * 6 = 720
720 * 7 = 5040

Es importante mencionar que si el arreglo principal estuviera vacío o no contuviera ningun subarreglo el resultado sería 1 debido a que se estableció el valor inicial de product como 1.
  
  */




/*
 ---------------------------------------------------------------
 EJEMPLO MAS SIMPLE
  ---------------------------------------------------------------


Ejemplo 

let sum = 0;
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    sum += i * j;
  }
}
console.log(sum);
// El resultado sería 36 (1*1 + 1*2 + 1*3 + 2*1 + 2*2 + 2*3 + 3*1 + 3*2 + 3*3











 */

