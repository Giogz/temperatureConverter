// forescast today in kelvin mesuare
const kelvin = 600;
// forescast today in celsius
let celsius = kelvin - 273;
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
// forescast today in farenheit
let farenheit = celsius * (9 / 5) + 32;
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature
farenheit = Math.floor(farenheit);

console.log(`the temperature is ${newton} degrees`);
