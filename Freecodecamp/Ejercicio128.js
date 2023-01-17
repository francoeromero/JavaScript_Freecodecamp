
//Crea cadenas usando plantillas literales

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {


  // se esta pasando como argumento al la función makeList el valor del arreglo failure del objeto result. La función itera sobre este arreglo y utiliza la sintaxis de plantilla literal con comillas invertidas para generar las cadenas de elementos lista, cada una de estas cadenas contiene el texto de cada elemento del arreglo y tiene un atributo class con el valor text-warning. La función makeList devuelve el arreglo de cadenas de elementos lista generado utilizando un ciclo for of para iterar sobre cada elemento del arreglo failure pasado como argumento.
    const failureItems = [];
  for (const failure of arr) {
    failureItems.push(`<li class="text-warning">${failure}</li>`);
  }


  return failureItems;
}

const failuresList = makeList(result.failure);