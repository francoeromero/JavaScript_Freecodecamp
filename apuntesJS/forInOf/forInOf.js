
let animales = ["gato", "perro", "elefante", "jirafa", "leopardo", "ave"];

//la diferencia entre in y of, es que in te muestra el numero de posicion y el of te muestra el valor  
//La diferencia entre for-in y for-of es que for-in recorre las propiedades de un objeto, mientras que for-of recorre los valores de un arreglo o un objeto iterable.



for(let animal in animales){ //creamos una variable, aplicamos in y llamamos al objeto animales
    document.write(animal + "<br>"); // si quisiera mostrar el valor cambio a: document.write(animales[animal])
} // te muestra 0 1 2 3 4 5 

for(let animal of animales){
    document.write(animal + "<br>");
} // te muestra gato perro elefante jirafa leopardo ave


//OTRO EJEMPLO

//________________________________________________
//in ---> toma solo la propiedad, guarda la posicion
//________________________________________________

const obj = {name: "John", age: 30, city: "New York"};

for (const key in obj) {
  console.log(key); // imprime "name", "age", "city" que son las propiedades del objeto NO los valores
}

//________________________________________________
//of ---> recorre todo, guarda el valor de la posicion
//________________________________________________

//1
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value); // imprime 1, 2, 3 
}

//2

const palabra = "hello";
for (const letras of palabra) {
    console.log(letras); // "h", "e", "l", "l", "o"
}

//3

const obj = {a: 1, b: 2, c: 3};

for (const [key, value] of Object.entries(obj)) {

    console.log(`${key} = ${value}`); // "a = 1", "b = 2", "c = 3"
}