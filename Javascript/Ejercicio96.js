//Itera con el bucle "while" de JavaScript
// Agrega los números de 5 a 0 (inclusivo) en orden descendente a myArray usando un bucle while.

// 1 -  creamos una variable de arreglo vacio
const myArray = [];  

// 2 -  inicializamos con 0 
let i = 0; 

// 3 -  la cantidad de vueltas del bucle
while(i < 4){ 
// 4 -  empuja los valores a un arreglo
    myArray.push(i); 
// 5 -  el contador se suma 1, para seguir el bucle 0, 1, 2, 3, 4 o tambien se pone i++ 
    i = i + 1;
}

// 6- Por ultimo mostramos el resultado en la consola

console.log(myArray);