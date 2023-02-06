function convertToRoman(num) {
    // Si "num" no es un número, regresa "NaN".
    if (isNaN(num))
        return NaN;
    // Convierto "num" a una cadena y divide los dígitos.
    var digits = String(+num).split(""),
    // Creo un arreglo con los valores romanos correspondientes a cada dígito.
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],
    // Declaro una variable para almacenar el número romano final.
    roman = "",
    // Declaro una variable para controlar un ciclo.
    i = 3;
    // Un ciclo "while" que se ejecutará mientras "i" sea mayor o igual a 0.
    while (i--)
        // Agrego el último dígito indexado en "key" a "roman".
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    // Regreso "M" repetido el número de veces indicado por los dígitos restantes
    // en "digits", concatenado con "roman".
    return Array(+digits.join("") + 1).join("M") + roman;
}

// Llamo a la función "convertToRoman" con un argumento de 36.
convertToRoman(36);