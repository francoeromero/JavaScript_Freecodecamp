//Utiliza la función "parseInt" con Radix (Base)

function convertToInteger(str) {
  return parseInt(str, 2) //esto convierte un numero binario a entero
}

console.log(convertToInteger("10011")); //me muestra 19

/*

parseInt(str, 2) para convertir el número binario a un número entero, especificando como segundo argumento que se esta trabajando con una base numérica de 2 (binario). El valor devuelto será el número entero convertido.
*/