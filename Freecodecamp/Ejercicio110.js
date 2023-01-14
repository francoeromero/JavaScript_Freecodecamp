//Usa el operador condicional (ternario)

//EJEMPLO 

function ejemplo(a, b) {
  if(a > b) {
    return "A es mas grande que B";
  }
  else {
    return "B es mas grande que A";
  }
}

//OTRA FORMA DE HACER CONDICIONAL 

function ejemplo(a, b) {
  return a > b ? "A es mas grande que B" : "B es mas grande que A";
}

//EJERCICIO
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal"; // pongo 3 iguales para que se haga estricto si es igual o no los valores a y b
}

console.log(checkEqual(1, 2)); // me muestra Not equal, porque no es igual 