//Importación de las clases
import { CuentaCorriente } from "./CuentaCorriente.js";

/*const cliente1 = new Cliente();
cliente1.nombreCliente = "Tobby";
cliente1.rutCliente = "13804050";*/

const CuentaCorriente1 = new CuentaCorriente();
CuentaCorriente1.numero = "12365895";
CuentaCorriente1.agencia = 1001;

let saldo = CuentaCorriente1.verSaldo();
console.log("El saldo actual es " + saldo);

saldo = CuentaCorriente1.depositoEnCuenta(1000);
console.log("El saldo actual es " + saldo);

saldo = CuentaCorriente1.retiroEnCuenta(400);
console.log("El saldo actual es " + saldo);

saldo = CuentaCorriente1.depositoEnCuenta(20);
console.log("El saldo actual es " + saldo);
