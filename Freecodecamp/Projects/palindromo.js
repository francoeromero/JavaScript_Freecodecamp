function palindrome(str) {
  //convierto la cadena en minuscula
  let cadena = str.toLowerCase();
  //elimino los caracteres que no son alfanumericos
  cadena = cadena.match(/[a-z0-9]/g);
  //comparo la cadena original con su version invertida
  return cadena.join('') === cadena.reverse().join('');
}

let resultado = palindrome("eye");
console.log(resultado);