//Definición de una lista con tipo de dato alfanúmerico
const availableCities = new Array("Bogotá", "Lima", "Santiago");
console.log(availableCities);

//Definición de una lista de forma abreviada
const availableCountries = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
console.log(availableCountries);

//Agregar al final del arreglo una ciudad y un país nuevo
availableCountries.push("Uruguay");
availableCities.push("Montevideo");
console.log(availableCountries);
console.log(availableCities);

//Agregando al principio del arreglo una ciudad y un país nuevo
availableCountries.unshift("Ecuador");
availableCities.unshift("Quito");
console.log(availableCountries);
console.log(availableCities);

//Solo mostrar un elemento de la lista
console.log(availableCountries[1]);
console.log(availableCities[1]);

//Borrar elementos de la lista y agregar otros
availableCountries.splice(4, 2, "Venezuela", "Paraguay");
console.log(availableCountries);
