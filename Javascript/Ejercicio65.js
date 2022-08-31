//Comparación con el operador "mayor que"
function testGreaterThan(val) {
  if (val > 100 ) {  // Cambia esta línea
    return "Over 100";
  }

    if (val > 10) {  // Cambia esta línea
      return "Over 10";
    }

    return "10 or Under";
    }

testGreaterThan(10);