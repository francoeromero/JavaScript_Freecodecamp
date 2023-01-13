//Itera a través de un arreglo con un bucle "for"


//EJEMPLO
let ejemplo = [9, 10, 11, 12];
let total = 0;

for (let i = 0; i < ejemplo.length; i++){
    total += ejemplo[i];
}
console.log(total); // esto daria 42, porque esta sumando a 9,10,11,12

// ejemplo.length ---> traducido es como decir "la cantidad de valores en el ejemplo seria 4"




const myArr = [2, 3, 4, 5, 6];

for (let i = 0; i < myArr.lenght; i++){ // la cantidad de vueltas del bucle lo define la cantidad de valores del arreglo en este caso el arreglo es [2, 3, 4, 5, 6]
    total += myArr[i]; // agrego cada valor i por cada vuelta
}



// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);