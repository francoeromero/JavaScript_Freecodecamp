
// Muta un arreglo declarado con const


const s = [5, 7, 2];
function editInPlace() {
 
  //a una constante de arreglo podemos cambiar sus valores 
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;


 
}
editInPlace();