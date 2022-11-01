/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let inputNumber = document.getElementById("input-number").value;
  document.getElementById("output-length").value = `${inputNumber} meters = ${Math.round(inputNumber * 3.281 * 1000) / 1000} feet  |  ${inputNumber} feet  = ${Math.round(inputNumber / 3.281 * 1000) / 1000} meters`;
  document.getElementById("output-volume").value = `${inputNumber} liters = ${Math.round(inputNumber * .264 * 1000) / 1000} gallons  |  ${inputNumber} gallons  = ${Math.round((inputNumber / .264) * 1000) / 1000} liters`;
  document.getElementById("output-mass").value = `${inputNumber} kilograms = ${Math.round(inputNumber * 2.204 * 1000) / 1000} pounds  |  ${inputNumber} pounds  = ${Math.round((inputNumber / 2.204) * 1000) / 1000} kilograms`;
})
