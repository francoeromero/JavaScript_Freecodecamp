
// Usa sintaxis de desestructuración para asignar variables desde objetos anidados

// ESQUEMA
// const {propiedadPrincipal {propiedadSecundaria: variableNueva, propiedadSecundaria: variableNueva }} = OBJETO

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

//asigne las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST. Utilizando esta sintaxis, se esta desestructurando el objeto LOCAL_FORECAST y accediendo a las propiedades de today para asignar esos valores a las nuevas variables lowToday y highToday.

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;