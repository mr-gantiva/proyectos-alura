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

  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("Valor a depositar no es valido");
    }
  }

  retiroEnCuenta(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Tobby";
cliente1.rutCliente = "13804050";

const CuentaCorriente1 = new CuentaCorriente();
CuentaCorriente1.numero = "12365895";
CuentaCorriente1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Iván";
cliente2.rutCliente = "44599731";

const CuentaCorriente2 = new CuentaCorriente();
CuentaCorriente2.numero = "26588946";
CuentaCorriente2.agencia = 1001;

const cliente3 = new Cliente();
cliente3.nombreCliente = "Ana";
cliente3.rutCliente = "1689876";

const CuentaCorriente3 = new CuentaCorriente();
CuentaCorriente3.numero = "98947689";
CuentaCorriente3.agencia = 1001;

console.log("Saldo inicial: " + CuentaCorriente2.saldo);
CuentaCorriente2.depositoEnCuenta(100);
console.log("Depositado: " + CuentaCorriente2.saldo);

CuentaCorriente2.retiroEnCuenta(400);
console.log("Saldo después del retiro : " + CuentaCorriente2.saldo);

CuentaCorriente2.depositoEnCuenta(1000);
console.log("Saldo después del deposito : " + CuentaCorriente2.saldo);
