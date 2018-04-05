// Problem 16
// Power digit sum
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?

const bigInt = require("big-integer");

const powerNumber = bigInt(2).pow(1000).toString();

const calculatePowerNumber = () => {
  var powerDigitSum = 0;

  powerNumber.split('').map((letter) => {
    powerDigitSum += parseInt(letter);
  });
  return powerDigitSum;
}

console.log(`calculatePowerNumber()`);
console.log(calculatePowerNumber());
