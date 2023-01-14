// let free = false;

// const validarCliente = (time)=>{
//     let edad = prompt("Cual es tu edad?: ");
//     if(edad >= 18){
//         if(time >= 2 && time <= 8 && free = false){
//             alert("podes pasar");
//             free = true;
//         }
//         else{
//             alert("podes pasar pero pagas entrada")
//         }
//     }else {
//         alert("no podes pasar")
//     }
// }

// validarCliente(23);
// validarCliente(2);
// validarCliente(4);
// validarCliente(0.4);
// validarCliente(2);
// validarCliente(5);
// validarCliente(6);
// validarCliente(7);

// EJERCICIO
/*Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir
al otro dia comienza las clases.

En su curso en total son 19 alumnos, pero surgio un problema que complico :
se rompio el sistema de registros de ausencia y durante los proximos 30 dias nose podran hacer registros de datos de ningun tipo.

-Crear minisistema que nos permita registrar los alumnos que estan presentes(P) y ausentes (A) en clase

-pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes)

-Se puede tener max de 10% de ausencia por semestre, si se tienen mas aclarar que esta reprobado

*/

let seguir;
let p = 0;
let a = 0;

do{
presente = prompt("ingrese si esta presente con p o ausente con a");

if(presente == "a"){
    alert("ausente");
    a++;
}
else if(presente == "p"){
    alert("presente");
    p++;
}

seguir = prompt("Quieres seguir tomando lista a los alumnos?");

}while(seguir == 's');

document.write("cantidad de ausentes: " + a + "<br>");
document.write("cantidad presentes: " + p);