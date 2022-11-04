import { Cliente } from "./Cliente.js";
export class CuentaCorriente {
  #cliente;
  numero;
  agencia;
  #saldo;

  set setCliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  get getCliente() {
    return this.#cliente;
  }

  constructor(cliente, numero, agencia) {
    this.setCliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = 0;
  }

  //Metodos
  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retiroEnCuenta(valor) {
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferenciasEntreCuentas(valor, cuentaDestino) {
    this.retiroEnCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
