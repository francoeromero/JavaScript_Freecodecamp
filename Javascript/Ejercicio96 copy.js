//Itera con el bucle "while" de JavaScript
// Agrega los números de 5 a 0 (inclusivo) en orden descendente a myArray usando un bucle while.


const myArray = []; 
let i = 5; //6 vueltas, [0, 1, 2, 3, 4, 5]
while(i >= 0){ 
    myArray.push(i); //pusheo al arreglo los valores
    i = i - 1; // i--
}

console.log(myArray); //mostramos en consola