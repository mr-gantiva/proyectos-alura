const availableCities = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuesto = 400;
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

let ciudadSeleccionada = "";

for (let i = 0; i < datos.length && ciudadSeleccionada == ""; i++) {
  if (datos[i].precio <= presupuesto) {
    ciudadSeleccionada = datos[i].ciudad;
  }
}

if (ciudadSeleccionada == "") {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}
