// Problem 3
// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const primeFactors = (num) => {
  let primeArray = [];
  for (i = 2; i <= num; i++) {
    if (num % i == 0 ) {
      if (isPrime(num)) {
        num /= i;
        primeArray.push(i);
      }
    }
  }
  return primeArray;
};

const largestPrimeFactor = (n) => {
  let pf = primeFactors(n);
  if (pf.length > 1) {
    return pf[pf.length - 1];
  }
  return pf[0];
};

// console.log(`largestPrimeFactor(600851475143)`);
// console.log(largestPrimeFactor(600851475143));
// console.log(largestPrimeFactor(727));

// WIP, needs fixing...
