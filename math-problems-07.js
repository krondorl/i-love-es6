// Problem 7
// 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const getPrimes = (max) => {
    let sieve = [],
        i,
        j,
        primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

console.log(getPrimes(104700).length);

const isFinalLength = (thatArray) => {
  return thatArray.length == 10001;
}

const findPrime = () => {
  let n = 104700;
  while (!isFinalLength(getPrimes(n))) {
    n++;
  }
  if (isFinalLength(getPrimes(n))) {
    let thatArray = getPrimes(n);
    return `Found: ${thatArray[thatArray.length - 1]}`;
  }
  return `Not found.`;
}

console.log(findPrime());
