class Cliente {
  nombreCliente;
  rutCliente;
}

class CuentaCorriente {
  numero;
  saldo;
  agencia;

  depositoEnCuenta(valor) {
    this.saldo += valor;
  }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Tobby";
cliente1.rutCliente = "13804050";

const CuentaCorriente1 = new CuentaCorriente();
CuentaCorriente1.numero = "12365895";
CuentaCorriente1.saldo = 1000;
CuentaCorriente1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Iván";
cliente2.rutCliente = "44599731";

const CuentaCorriente2 = new CuentaCorriente();
CuentaCorriente2.numero = "26588946";
CuentaCorriente2.saldo = 3000;
CuentaCorriente2.agencia = 1001;

const cliente3 = new Cliente();
cliente3.nombreCliente = "Ana";
cliente3.rutCliente = "1689876";

const CuentaCorriente3 = new CuentaCorriente();
CuentaCorriente3.numero = "98947689";
CuentaCorriente3.saldo = 4000;
CuentaCorriente3.agencia = 1001;

console.log("Saldo anterior: " + CuentaCorriente2.saldo);
CuentaCorriente2.depositoEnCuenta(100);
console.log("Saldo actual: " + CuentaCorriente2.saldo);
