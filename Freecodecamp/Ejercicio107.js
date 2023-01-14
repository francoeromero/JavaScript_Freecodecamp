//Genera números enteros aleatorios dentro de un rango

function randomRange(myMin, myMax) {
 
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ;
 
}

console.log(randomRange(2, 4));


/*
formula 

para sacar rangos min y max 

Math.floor(Math.random() * (max - min + 1)) + min

*/