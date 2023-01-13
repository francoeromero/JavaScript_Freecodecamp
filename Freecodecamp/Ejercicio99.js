// Cuenta hacia atrás con un bucle "for"

//EJEMPLO
// while
const ejemplo = []; //[10, 8, 6, 4, 2]
let i = 10;
while (i > 0){
    ejemplo.push(i);
    i -= 2;
}
console.log(ejemplo);
// for
const ejemplo = [];
for (let i = 10; i > 0; i -= 2){
    ejemplo.push(i);
}
console.log(ejemplo);

// EJERCICIO
// while
const myArray = []; //[9, 7, 5, 3, 1]

let i = 9;
while(i > 0){
    myArray.push(i);
    i -= 2;
}
console.log(myArray);

// for
const myArray = []; //[9, 7, 5, 3, 1]

for (let i = 9; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray);