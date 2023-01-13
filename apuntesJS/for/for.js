
// for (inicial; condicional; incremento o decremento){}

for (let i = 0; i < 6; i++){
    if(i == 4){
        continue; // esto es para saltear el 4
    }
    document.write(i + "<br> <p>hola</p>");
}// 0 1 2 3 5 6  

//           6       1
for (let j = 6; j > 0; j--){

    document.write(j + "<br> <p>contador j</p>");
}//6 5 4 3 2 1 

//del        1  al  6        
for (let q = 0; q < 6; q++){

    document.write(q + "<br> <p>contador q</p>");
}//1 2 3 4 5 6