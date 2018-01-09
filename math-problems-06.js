// Problem 6
// Sum square difference
// The sum of the squares of the first ten natural numbers is, 385.
// The square of the sum of the first ten natural numbers is, 3025.
// Hence the difference between the sum of the squares of the first ten natural numbers
// and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

const sumOfSquares = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i * i;
  }
  return sum;
}

const squareOfSums = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum * sum;
}

console.log(`squareOfSums() - sumOfSquares()`);
console.log(squareOfSums() - sumOfSquares());
