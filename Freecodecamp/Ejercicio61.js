// Comparación con el operador de estricta igualdad
function testStrict(val) {
  if (val === 7) { // Cambia esta línea
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);