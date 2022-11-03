class Cliente {
  nombreCliente;
  rutCliente;
  numeroCuenta;
  saldoCuenta;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "Tobby";
cliente1.rutCliente = "13804050";
cliente1.numeroCuenta = "12365895";
cliente1.saldoCuenta = 1000;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Iván";
cliente2.rutCliente = "44599731";
cliente2.numeroCuenta = "26588946";
cliente2.saldoCuenta = 3000;

const cliente3 = new Cliente();
cliente3.nombreCliente = "Ana";
cliente3.rutCliente = "1689876";
cliente3.numeroCuenta = "98947689";
cliente3.saldoCuenta = 4000;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
