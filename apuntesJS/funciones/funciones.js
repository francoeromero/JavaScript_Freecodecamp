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


//PARAMETROS DE UNA FUNCION

//1
let num1 = 32;
let num2 = 12;
let resultado = num1 + num2;
document.write(resultado);

//2
let num1 = 32;
let num2 = 12;

function suma(){
    let resultado = num1 + num2;
    document.write(resultado);
}
suma();

//3

function suma(a, b){
    let resultado = a + b;
    document.write(resultado);
    document.write("<br>"); //punto y aparte
}
suma(32, 12);
suma(42, 52);
suma(52, 52);


function suma2(num1, num2){
    let res = num1 + num2;
    return res;
   
}

let elresultado = suma2(21, 43);

document.write(elresultado);:


function saludar(nombre){
    let frase =  ` Hola ${nombre} como estas!!`;
    document.write(frase);
}
saludar("fran");


//----------------------------------------------------------------
// TODAS LAS FORMAS DE CREAR FUNCIONES
//----------------------------------------------------------------


// FUNCION DECLARADA

//Esta es la forma tradicional de crear funciones en JavaScript. Es adecuada para funciones que se van a usar varias veces a lo largo del código y que se van a llamar explícitamente.

function nombreFuncion(parametros) {
    // cuerpo de la función
}

// FUNCION ASIGNADA A UNA VARIABLE

// Esta forma es similar a la forma declarada, pero permite que la función se asigne a una variable para su uso posterior. Es útil para pasar una función como argumento a otra función o para almacenar una función en una variable.

let nombreFuncion = function(parametros) {
    // cuerpo de la función
}

// FUNCION ANONIMA ASIGNADA A UNA VARIABLE

//  Es similar a la forma de función asignada a una variable, pero no tiene nombre. Es útil para funciones que se van a usar solo una vez, como en una expresión de devolución de llamada.

let nombreFuncion = function(parametros) {
    // cuerpo de la función
}



// ========================================================================================================
// FUNCION DE FLECHA(ES6)

// Es una forma más concisa de escribir funciones, especialmente para funciones de una sola línea y para funciones usadas como devoluciones de llamada. También mantiene el contexto lexico del this.

let nombreFuncion = (parametros) => {
    // cuerpo de la función
}
// ========================================================================================================






// FUNCION CONSTRUCTORA USANDO LA PALABRA "NEW"

//  Esta forma de crear funciones se utiliza para crear objetos personalizados mediante la creación de un constructor de objeto y una función constructora.

let nombreFuncion = new Function("parametros", "//cuerpo de la función");