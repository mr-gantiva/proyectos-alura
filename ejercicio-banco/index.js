//Importación de las clases
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente();
cliente1.nombreCliente = "Tobby";
cliente1.rutCliente = "13804050";

const cliente2 = new Cliente();
cliente2.nombreCliente = "Ana";
cliente2.rutCliente = "18678796";

const CuentaCorriente1 = new CuentaCorriente();
CuentaCorriente1.numero = "1";
CuentaCorriente1.agencia = "001";
CuentaCorriente1.setCliente = cliente1;

const CuentaCorriente2 = new CuentaCorriente();
CuentaCorriente2.numero = "2";
CuentaCorriente2.agencia = "002";
CuentaCorriente2.setCliente = cliente2;

console.log(CuentaCorriente1.getCliente);

let saldo = CuentaCorriente1.verSaldo();
console.log("El saldo actual es " + saldo);

saldo = CuentaCorriente1.depositoEnCuenta(1000);
console.log("El saldo actual es " + saldo);

saldo = CuentaCorriente1.retiroEnCuenta(400);
console.log("El saldo actual es " + saldo);

saldo = CuentaCorriente1.depositoEnCuenta(20);
console.log("El saldo actual es " + saldo);

CuentaCorriente1.transferenciasEntreCuentas(100, CuentaCorriente2);

const saldoAna = CuentaCorriente2.verSaldo();
console.log("El saldo actual de Ana es " + saldoAna);

const saldoTobby = CuentaCorriente1.verSaldo();
console.log("El saldo actual de Tobby es " + saldoTobby);
