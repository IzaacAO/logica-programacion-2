const prompt = require("prompt-sync")();

const cero = -273.15;
 
function celsiusAFahrenheit(celsius) {
  return redondear(celsius * 9 / 5 + 32);
}
 
function celsiusAKelvin(celsius) {
  return redondear(celsius + 273.15);
}
 
function redondear(valor) {
  return Number(valor.toFixed(2));
}
 
function validarNumero(texto) {
  const limpio = texto.trim().replace(",", "."); 
  if (limpio === "") return null;              
  const numero = Number(limpio);
  if (typeof numero !== "number" || !Number.isFinite(numero)) return null;
  return numero;
}
 
function solicitarTemperatura() {
  while (true) {
    const entrada = prompt("Ingresa la temperatura en grados Celsius: ");
 
    if (entrada === null) {
      return null; 
    }
 
    const celsius = validarNumero(entrada);
 
    if (celsius === null) {
      console.log("Error: debes ingresar un valor numérico (ej. 45 o 14.5).");
      continue;
    }
 
    if (celsius < cero) {
      console.log("Error: la temperatura no puede ser menor al cero absoluto (-273.15 °C).");
      continue;
    }
 
    return celsius;
  }
}
 
function iniciar() {
  const celsius = solicitarTemperatura();
 
  if (celsius === null) {
    console.log("No se ingresó ninguna temperatura. Programa finalizado.");
    return;
  }
 
  console.log(`Entrada: ${celsius} °C`);
  console.log(`Grados Kelvin: ${celsiusAKelvin(celsius)}`);
  console.log(`Grados Fahrenheit: ${celsiusAFahrenheit(celsius)}`);
}
 
iniciar();