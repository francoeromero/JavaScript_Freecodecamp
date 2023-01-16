//-------------------------------------------------------
// ES6
//-------------------------------------------------------
// Compara el alcance de las palabras clave "var" y "let"


function checkScope() { 
  let i = 'function scope'; // cambio de var a let 

  if (true) {
    let i = 'block scope'; // aca faltaba agregar let, porque estamos creando una variable nueva con el mismo nombre i, para entender que la palabra clave let dentro de un bloque, una declaración o expresión. Su alcance está limitado a ese bloque, declaración o expresión.
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
