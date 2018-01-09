// Problem 5
// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder. What is the smallest positive number
// that is evenly divisible by all of the numbers from 1 to 20?

const checkDivisors = (n) => {
  const divisorNumbers = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ];
  let divisors = [],
      allDivisors = false;

  divisorNumbers.forEach((divisor) => {
    divisors.push(n % divisor == 0);
  });

  if (divisors.every((isDivisor) => isDivisor == true)) {
    allDivisors = true;
  } else {
    allDivisors = false;
  }
  return allDivisors;
}

const loopDivisors = () => {
  let n = Math.pow(10, 8)*2;
  console.log(`Start at ${n}`);
  while (!checkDivisors(n)) {
    n += 20;
  }
  if (checkDivisors(n)) {
    return `Found: ${n}`;
  } else {
    return `Not found.`;
  }
}

console.log(loopDivisors());
