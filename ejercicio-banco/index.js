class Cliente {
  nombreCliente;
  rutCliente;
}

class CuentaCorriente {
  numero;
  #saldo;
  agencia;

  constructor() {
    this.#saldo = 0;
    this.numero = "";
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
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Tobby";
cliente1.rutCliente = "13804050";

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
