
const Cel= document.getElementById("C");
const boton = document.getElementById("btn");
const resultado = document.getElementById("resultado");

function calcular(){

const texto = Cel.value.trim();
  const celsius = Number(texto);

  if (texto === "" || !Number.isFinite(celsius)) {
    resultado.textContent = "Error: ingresa un valor numérico.";
    return;
  }

  const fahr = celsius * 1.8 + 32;
  const kelvin = celsius + 273.15;

  resultado.innerHTML= 
   `Grados Kelvin: ${kelvin}<br>` +
    `Grados Fahrenheit: ${fahr}`;


}
boton.addEventListener("click", calcular);