
//Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

//se esta desestructurando el objeto stats y se esta obteniendo solo los valores de max y min, para luego utilizarlos en la función.

const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));

