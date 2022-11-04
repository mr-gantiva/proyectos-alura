//Importación de las clases
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Tobby", "13804050");

const cliente2 = new Cliente("Ana", "18678796");

const CuentaCorriente1 = new CuentaCorriente(cliente1, "1", "001");

const CuentaCorriente2 = new CuentaCorriente(cliente2, "2", "002");

console.log(cliente1);
console.log(cliente2);

console.log(CuentaCorriente1.getCliente);
console.log(CuentaCorriente2.getCliente);

/*
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
console.log("El saldo actual de Tobby es " + saldoTobby);*/
