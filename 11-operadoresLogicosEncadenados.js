const ciudadDestino = "Lima";
const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 19;
let viajaAcompanhado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (
  availableCities.indexOf(ciudadDestino) >= 0 &&
  edadPasajero >= 18 &&
  tienePasaporte &&
  !estaCasado
) {
  console.log("Paquete de solteros disponible para la venta");
} else {
  console.log(
    "Ciudad no disponible para viajar o pasajero no cumple las condiciones"
  );
}
