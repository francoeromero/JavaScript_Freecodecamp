//Verifica las propiedades de un objeto

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
      return "Not Found";
    }
   }

 

  /*

Para verificar si existe x propiedad dentro de un objeto se aplica: 

NombreObjeto.hasOwnProperty( propiedadObjeto ); 
  
  */