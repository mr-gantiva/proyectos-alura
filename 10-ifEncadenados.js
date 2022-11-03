const ciudadDestino = "Lima";
const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 19;
let viajaAcompanhado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
/*
if (edadPasajero >= 18 || viajaAcompanhado) {
  if (availableCities.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta");
  } else {
    console.log("Ciudad no disponible para viajar");
  }
} else {
  if (edadPasajero >= 16 && ciudadDestino == "Lima") {
    console.log("Pasaje disponible para la venta");
  } else {
    console.log("Pasajero no cumple las reglas");
  }
}
*/
if (edadPasajero >= 18 || viajaAcompanhado) {
  if (availableCities.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta");
  } else {
    console.log("Ciudad no disponible para viajar");
  }
}
if (edadPasajero >= 16 && ciudadDestino == "Lima") {
  console.log("Pasaje disponible para la venta");
} else {
  console.log("Pasajero no cumple las reglas");
}
