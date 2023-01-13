//Usa objetos para hacer búsquedas

// Configuración
function phoneticLookup(val) {
    let result = "";
  
    // Cambia solo el código debajo de esta línea
    
  const lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
};

    result = lookup[val]; 
  
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  console.log(phoneticLookup("charlie"));  // console.log(nombreFuncion (propiedadObjeto) )  va a encontrar el valor de la propiedad
