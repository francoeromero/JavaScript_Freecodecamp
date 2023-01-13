//Itera con los bucles "for" de JavaScript

//EJEMPLO Y DIFERENCIA ENTRE WHILE Y FOR
const ejemplo = [];
//WHILE
let i = 0; //A
while(i < 5){ //B
    ejemplo.push(i);
    i++;//C
}
console.log(ejemplo); // ejemplo = [0,1,2,3,4]
//FOR
for(let = 0; i < 5; i++){
    ejemplo.push(i);
}
console.log(ejemplo); // ejemplo = [0,1,2,3,4]

//EJERCICIO
//while
const myArray = []; //[1, 2, 3, 4, 5]

let i = 1;
while(i <= 5){
    myArray.push(i);
    i++;
}
console.log(myArray); // myArray = [1, 2, 3, 4, 5]

//for
const myArray = [];

for(let i = 1; i <= 5 ; i++){
    myArray.push(i);
}
console.log(myArray);// myArray = [1, 2, 3, 4, 5]






/*
ESTRUCTURA FOR

 for (a; b; c)

a- es la sentencia de inicialización
b- es la sentencia condicional
c- es la expresión final

EJEMPLO:

a - inicializamos con i = 0 e iteramos 

b - mientras nuestra condición i < 5 es verdadera. 

c - Incrementaremos i por 1 en cada iteración de bucle con i++ como nuestra expresión final.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray ahora tendrá el valor [0, 1, 2, 3, 4].

*/