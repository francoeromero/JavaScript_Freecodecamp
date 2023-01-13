// Reemplaza bucles usando recursión

//Estructura de funcion recursiva

function funcionRecursiva(parametro) {
  if (condicionDeParada) {
      // código para el caso base
  } else {
      // código para el caso recursivo
      funcionRecursiva(nuevoParametro);
  }
}

//EJERCICIO 

function sum(arr, n) {
  if (n <= 0) { // condición de parada, se detiene la recursión si n es menor o igual a 0
      return 0;
  } else {
      return arr[n - 1] + sum(arr, n - 1); // se retorna el valor en el indice n-1 del arreglo mas la llamada recursiva a la función sum con los parametros arr y n-1
  }
}
console.log(sum([1, 2, 3, 4, 5], 3)); // 6