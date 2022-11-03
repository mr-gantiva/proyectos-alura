//TIPOS DE DATOS

//Alfanúmericos
/*let nombrePasajero = "Pedro Silva";
nombrePasajero = "Ramon Silva";
console.log(nombrePasajero);*/

//Númerico
let valorBoleto = 1000;
const tasaEmbarquePorcentaje = 60 / 100;
var gestionAgencia = 100;
console.log(valorBoleto);

//Lógicos (true, false)
let boletoActivo = true;
console.log(boletoActivo);

//OPERACIONES ARITMETICAS

//Suma
let totalBoletos =
  valorBoleto + valorBoleto * tasaEmbarquePorcentaje + gestionAgencia;
console.log(totalBoletos);

//Concatenación de textos
let nombrePasajero = "Leonardo";
let apellidoPasajero = "LaCruz";

let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompleto);

let pasaporte = parseInt("1000") + parseFloat("10");
let multiplicacion = parseInt("1000") / parseFloat("10");

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);
