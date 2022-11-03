const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuesto = 190;
const datos = [
  {
    ciudad: "Bogotá",
    precio: "500",
  },
  {
    ciudad: "Lima",
    precio: "400",
  },
  {
    ciudad: "Santiago",
    precio: "380",
  },
  {
    ciudad: "Montevideo",
    precio: "200",
  },
];

let i = 0;
while (i < datos.length && datos[i].precio > presupuesto) {
  i++;
}

if (i == datos.length) {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log("Puedes comprar pasaje para: " + datos[i].ciudad);
}
