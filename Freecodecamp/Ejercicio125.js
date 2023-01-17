
// Usa sintaxis de desestructuración para asignar variables desde arreglos

//EJEMPLO
// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);// me muestra a y b como 1, 2

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6]; //con las comas me salteo
// console.log(a, b, c);// me muestra a,b y c como 1, 2, 5  


let a = 8, b = 6;

//asigno el valor de A a B y de B a A
[a, b] = [b, a];
console.log(a, b);