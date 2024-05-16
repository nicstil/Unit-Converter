/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("inputNumber");
const convertBtn = document.getElementById("convert");
const lengthText = document.getElementById("lengthConversion");
const volumeText = document.getElementById("volumeConversion");
const massText = document.getElementById("massConversion");

convertBtn.addEventListener("click", convertNumber);

function convertNumber() {
  let inputValue = Number(input.value);
  let metersToFeet = inputValue * 3.281;
  let feetToMeters = inputValue / 3.281;
  let litersToGallons = inputValue * 0.264;
  let gallonsToLiters = inputValue / 0.264;
  let kilosToPounds = inputValue * 2.204;
  let poundsToKilos = inputValue / 2.204;

  lengthText.textContent = `${inputValue} meters = ${metersToFeet.toFixed(
    2
  )} feet | ${inputValue} feet = ${feetToMeters.toFixed(2)} meters`;

  volumeText.textContent = `${inputValue} liters = ${litersToGallons.toFixed(
    2
  )} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(2)} liters`;

  massText.textContent = `${inputValue} kilos = ${kilosToPounds.toFixed(
    2
  )} pounds | ${inputValue} pounds = ${poundsToKilos.toFixed(2)} kilos`;
}
