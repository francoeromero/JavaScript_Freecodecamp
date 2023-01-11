//Itera números impares con un bucle "for"

//EJEMPLO
//while
const ejemplo = []; 
let i = 0;

while( i < 10){
    ejemplo.push(i);
    i+= 2;
}
console.log(ejemplo);//[0,2,4,6,8]

//for
const ejemplo = []; 

for (let i = 0; i < 10; i += 2){
    ejemplo.push(i);
}
console.log(ejemplo);  //[0,2,4,6,8]

//EJERCICIO

const myArray = [];

//while
let i = 1;

while(i < 11){
    myArray.push(i);
    i += 2;
}
console.log(myArray);

//for 
for(let i = 1; i < 11; i += 2){
    myArray.push(i);
}
console.log(myArray);
