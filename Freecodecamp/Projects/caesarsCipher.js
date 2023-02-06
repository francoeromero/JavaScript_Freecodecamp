function rot13(str) {
    //convierto la cadena de entrada a mayuscula
    str = str.toUpperCase();
  
    //reemplazo cada letra de la cadena con su equivalente en rot13
    return str.replace(/[A-Z]/g, rot13);
  
  //funcion interna para generar el equivalente rot13 de una letra
    function rot13(correspondance) {
      //obtengo el codigo de caracter de la letra actual
      const charCode = correspondance.charCodeAt();
      //Desplazo el codigo de carácter de la letra actual
      //si el resultado todavia esta dentro del rango A-Z, devuelvo
      //si no. da una vuelta y devuelve la letra correspondiente
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
      
    }
  }
  rot13("SERR PBQR PNZC");