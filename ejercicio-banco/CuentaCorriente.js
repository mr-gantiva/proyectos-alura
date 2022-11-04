export class CuentaCorriente {
  cliente;
  numero;
  agencia;
  #saldo;

  constructor() {
    this.cliente = null;
    this.numero = "";
    this.agencia = "";
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
