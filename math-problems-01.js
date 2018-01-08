// Problem 1
// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const mod3 = (x) => (x % 3 == 0);
const mod5 = (x) => (x % 5 == 0);

const multiples = (x) => {
  if (x < 1) { return 0; }
  let mults = [];
  for (let i = 1; i < x; i++) {
    if (mod3(i) || mod5(i)) {
      mults.push(i)
      console.log(`${i}, `);
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = mults.reduce(reducer);
  return sum;
}

console.log(`Math problems 01`);
console.log(`multiples(1000)`);
console.log(multiples(1000));
