//Genera números enteros aleatorios con JavaScript




function randomWholeNum() {


    return Math.floor(Math.random() * 10) 
  }
  
console.log(randomWholeNum()); //muestra numeros enteros desde el 0 al 19 randoms 




/*
__________________________________
FORMULA PARA GENERAR UN RANGO DE NUMEROS ESPECIFICOS RANDOMS

max y min son los limites del rango de numero por ejemplo entre 3 y 9 

Math.floor(Math.random() * (max - min + 1)) + min;
____________________________________
OTRA FORMULA 
max es el numero limite, por ejemplo quiero que me de numeros randoms hasta el 20, entonces (20-1) = 19, estaria multiplicando por 19 

Math.floor(Math.random() * (max-1));
____________________________________
Math.floor() se utiliza para redondear hacia abajo un número decimal a su entero más cercano, mientras que Math.random() se utiliza para generar un número aleatorio decimal entre 0 y 1.

*/



