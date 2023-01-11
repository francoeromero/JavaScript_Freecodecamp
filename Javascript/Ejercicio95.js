//Colección de discos
/*Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.

Empiezas con una función updateRecords la cual toma un objeto literal, records, que contiene el álbum musical de la colección, un id, prop (como artist o tracks), y value. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.

    1-  Tu función siempre debe devolver el objeto de colección de registros completo.

    2-  Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.

    3-  Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.

    4-  Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.

    5-  Si value es una cadena vacía, elimina esa propiedad prop del álbum.
    Nota: Se usa una copia del objeto recordCollection para las pruebas. */



const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
        // 2 si la propiedad es diferente a 'tracks' y el valor es diferente a una cadena vacia
    if(prop != 'tracks' && value != ''){
        records[id][prop] = value; //agrego nueva propiedad y su valor, record seria toda la funcion id luego la propiedad le doy el valor, que seria el valor asignado. Si se ejecutaria se agrega la nueva propiedad 'artist' = 'ABBA'  dentro del album '5439'
    } 
     // 3 si la propiedad es tracks y el album no tiene la propiedad 'tracks'
     //records es todo el objeto y dentro de [id] son los albums 
     //hasOwnProperty significa "existe la propiedad .. " y lo que esta dentro, es lo que va a buscar si existe
    //  hasOwnProperty, es booleano, si encuentra la propiedad es True sino es False. Entonces se pone  == false para decir "si no se encontro en el objeto la propiedad 'tracks"
    else if (prop == 'tracks' && records[id].hasOwnProperty('tracks') == false){
      records[id][prop] = []; // voy a crear una propiedad 'tracks' que tenga un arreglo vacio 'tracks' : []
      records[id][prop].push(value); //agrego el valor a ese arreglo vacio 
    } 
     // 4 Si prop es tracks y value no es una cadena vacía
    else if (prop == 'tracks' && value != ''){
        records[id][prop].push(value); //el push agrega al final, y agrego un valor al arreglo   
    } 
     // 5 Si value es una cadena vacía
    else if(value == ''){
        delete records[id][prop]; //borramos la propiedad
    }


    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');