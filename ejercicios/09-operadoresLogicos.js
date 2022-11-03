//Operadores de comparación
const ciudadDestino = "Santiago";
const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

//Operadores lógicos
// Y (AND) - O (OR) - NO (NOT)
//AND = &&
//OR = ||
//NOT = !

const edadPasajero = 19;
const viajaAcompanhado = false;

//Evaluar condición
console.log("---VALIDACION CON AND---");
console.log(`Verificando pasajes para ${ciudadDestino}`);

if (
  availableCities.indexOf(ciudadDestino) >= 0 &&
  (edadPasajero >= 18 || viajaAcompanhado)
) {
  console.log("Pasaje disponible para venta");
} else {
  console.log("Ciudad no disponible para viajar");
}
//Aplicación lógica negativa
if (
  !(
    availableCities.indexOf(ciudadDestino) >= 0 &&
    (edadPasajero >= 18 || viajaAcompanhado)
  )
) {
  console.log("Ciudad no disponible para viajar");
} else {
  console.log("Pasaje disponible para venta");
}

const valorPasaje = "1000";

if (valorPasaje == 1000) {
  console.log("El pasaje vale: " + valorPasaje);
}
