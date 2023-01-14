//Utiliza recursión para crear una cuenta regresiva


//EJEMPLO 

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n); // PUSHEA
    return countArray;
  }
}
console.log(countup(5)); //MUESTRA [1, 2, 3, 4, 5]


//EJERCICIO

function countdown(n) {
  if (n < 1) {
      return [];
  }
  else {
      const countArray = countdown(n - 1);
      countArray.unshift(n); // UNSHIFT 
      return countArray;
  }
}
console.log(countdown(5));// MUESTRA [5, 4, 3, 2, 1]