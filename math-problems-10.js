// Problem 10
// Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

sumPrimesList = () => {
  let primes = [];
  for (let i = 2; i < 2000000; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce((acc, currVal) => acc + currVal);
}

console.log(`sumPrimesList()`);
console.log(sumPrimesList());
