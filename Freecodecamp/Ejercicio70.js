//Comparaciones con el operador lógico "or"
function testLogicalOr(val) {
 
  if (val < 10 || val > 20) {
    return "Outside";
  }  
   return "Inside";
} 

testLogicalOr(15);  