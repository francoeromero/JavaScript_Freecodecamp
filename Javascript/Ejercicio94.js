//Accede a arreglos anidados

const myPlants = [
    {
      type: "flowers",
      list: ["rose","tulip","dandelion"]
    },

    {
      type: "trees",
      list: ["fir","pine","birch"]
    }
  ];
  
  const secondTree = myPlants[1].list[1]; // estoy accediendo al valor "pine" que se encuentra en la propiedad list, como es segundo se pone 1 porque arrancamos de cero

  /*
  
  Para acceder a arreglos, es en corchetes y enumerando a cada propiedad y valor desde el 0
  

  */