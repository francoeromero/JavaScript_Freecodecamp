
// Prevenir la mutación del objeto

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
 
  //para que el arreglo sea fijo sus valores y no sea modificado tengo que freezarlo
  MATH_CONSTANTS.freeze;


  try {
    MATH_CONSTANTS.PI = 3.14;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
