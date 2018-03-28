// Problem 20 
// Factorial digit sum
// n! means n × (n − 1) × ... × 3 × 2 × 1
//
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10!
// is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!

const bigInt = require("big-integer");

// Returns a String, because JS can't handle large numbers
// and also we need to process it more.
const calculateFactorialString = () => {
  var factorialNumber = bigInt(1);
  for (let i = 1; i <= 100; i++) {
    factorialNumber = bigInt(factorialNumber).multiply(i);
  }
  return factorialNumber.toString();
}

const calculateSumOfDigits = (str) => {
  var powerDigitSum = 0;
  str.split('').map((letter) => {
    powerDigitSum += parseInt(letter);
  });
  return powerDigitSum;
}

const finalSum = () => {
  return calculateSumOfDigits(calculateFactorialString());
}

console.log(`Calculating finalSum()...`);
console.log(finalSum());
