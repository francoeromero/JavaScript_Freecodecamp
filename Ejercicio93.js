//Accede a objetos anidados

const myStorage = {
    "car": {
      "inside": { "glove box": "maps","passenger seat": "crumbs"},
      "outside": {"trunk": "jack"}
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

  /*
  Para acceder a los valores anidados por {}  propiedades dentro de subpropiedades y sus valores

  const variable = objeto + . + propiedad + . + subpropiedad + . + {valor};
  
  */