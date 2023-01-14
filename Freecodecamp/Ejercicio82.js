
///Conteo de cartas

let count = 0; // Declaración de la variable global count con un valor inicial de 0

function countCards(card) {
  // switch statement para determinar el valor de la carta
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; // Aumenta el conteo en 1
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // Reduce el conteo en 1
      break;
    // no se hace nada si es 7, 8 o 9
    case 7:
    case 8:
    case 9:
      break;
  }
  // if statement para determinar si la apuesta es alta o baja
  if (count > 0) {
    return count + " Bet"; // Devuelve el conteo actual y la cadena "Bet" si el conteo es positivo
  } else {
    return count + " Hold"; // Devuelve el conteo actual y la cadena "Hold" si el conteo es 0 o negativo
  }
}