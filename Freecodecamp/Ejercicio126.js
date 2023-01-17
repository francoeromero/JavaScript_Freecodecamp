
// Desestructuración vía elementos rest
function removeFirstTwo(list) {
    // omito los dos primeros utilizando la coma para saltearme, luego los 3 puntos suspensivo es el resto 
    const [,, ...shorterList] = list;
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

//fin ejercicio








  //ejemplo de rest

let colores = ["rojo", "verde", "azul", "amarillo"];
let [primerColor, ...otrosColores] = colores;