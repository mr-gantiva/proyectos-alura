const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const availableCountries = [
  "Colombia",
  "Perú",
  "Chile",
  "Brasil",
  "Argentina",
  "Uurguay",
  "Venezuela",
];

const numberOfCities = availableCities.length;
console.log(`En la lista de ciudades tenemos ${numberOfCities} elementos`);
console.log(
  `En la lista de paises tenemos ${availableCountries.length} elementos`
);

//Remover el primer elemento
availableCities.shift();
console.log(availableCities);
console.log(
  `En la lista de paises tenemos ${availableCities.length} elementos`
);

//Remover el último elemento
availableCities.pop();
console.log(availableCities);
console.log(
  `En la lista de paises tenemos ${availableCities.length} elementos`
);

//Filtro de elementos de la lista
const filterByCountry = availableCountries.filter((e) => e.length > 6);
console.log(filterByCountry);

//Convertir una lista en una cadena de caracteres
console.log(availableCountries.join("-"));

//Ordenar la lista
console.log(availableCountries.sort());
console.log(availableCountries);

//Conociendo la posición
console.log(`Perú esta en la posición: ${availableCountries.indexOf("Perú")}`);

//Unificar dos listas
const listOfCountriesAndCities = availableCountries.concat(availableCities);
console.log(listOfCountriesAndCities);
console.log(availableCountries);
