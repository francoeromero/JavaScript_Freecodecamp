// Permanece en Linea

function nextInLine(arr, item) {
 
    arr.push(item);
    return arr.shift(); 
    
    }
    
    // Configuración
    const testArr = [1, 2, 3, 4, 5];
    
    // Muestra el código
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));