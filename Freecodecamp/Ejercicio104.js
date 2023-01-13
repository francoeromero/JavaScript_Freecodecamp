//Búsqueda de perfiles


const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Recorre el arreglo de contactos
  for (let i = 0; i < contacts.length; i++) {
    // Verifica si el nombre dado corresponde al nombre del contacto
    if (contacts[i].firstName === name) {
      // Verifica si la propiedad dada existe en el contacto
      if (contacts[i].hasOwnProperty(prop)) {
        // Si ambos son verdaderos, entonces devuelve el valor de esa propiedad
        return contacts[i][prop];
      } else {
        // Si prop no corresponde a ninguna propiedad válida del contacto, devuelve la cadena "No such property"
        return "No such property";
      }
    }
  }
  // Si name no corresponde a ningún contacto, devuelve la cadena "No such contact"
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes")); // ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Harry", "number")); // "0994372684"
console.log(lookUpProfile("Sherlock", "age")); // "No such property"
console.log(lookUpProfile("Bob", "likes")); // "No such contact"