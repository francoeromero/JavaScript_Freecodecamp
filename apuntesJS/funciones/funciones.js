//estructura esquematica

function nombreFuncion(parametros) {
    // cuerpo de la función
    // puede incluir declaraciones, operaciones, etc.
    return valorDeRetorno;
  }


function saludar(){

    let respuesta = prompt("Hola fran como fue tudia? ");
    return document.write("retornosadsd");
    
    if(respuesta == "bien" || respuesta == "normal" || respuesta == "muy bien"){
        alert("me alegro");
    } 
    else{
        alert("una pena")
    }
}

let saludo = saludar(); // llamas a la funcion
document.write(saludo);

//RETURN : para que te devuelva un valor 


function sum(a, b) {
    let result = a + b;
    return result; //termina la ejecución de la función y devuelve el valor de la variable result
  }
  let total = sum(2, 3); // El valor devuelto se puede asignar a una variable, reemplazando (a, b) en este caso se guarda en la variable total.
  console.log(total); // devuelve 5 en consola 


