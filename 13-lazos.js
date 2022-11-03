const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuesto = 190;

let i = 0;
while (precioCiudad[i] > presupuesto && i < availableCities.length) {
  i++;
}

if (i == availableCities.length) {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log("Puedes comprar pasaje para: " + availableCities[i]);
}
