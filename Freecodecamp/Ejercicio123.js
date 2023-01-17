
// Usa sintaxis de desestructuración para asignar variables desde objetos

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// esta línea de código esta creando dos variables "highToday" y "highTomorrow" y esta asignando a cada una el valor de la propiedad del objeto "HIGH_TEMPERATURES" con el nombre "today" y "tomorrow" 

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;


//esquema

// const {propiedad: nuevaVariable, propiedad: nuevaVariable} = variableConSuPropiedadesyValores