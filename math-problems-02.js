// Problem 2
// Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

const fibo = (numMax) => {
  for (var fibArray = [1,2], i = 1, j = 2, k = 0; k < numMax; i = j , j = x, k++ ){
    x = i + j;
    fibArray.push(x);
  }
  return fibArray;
};

const evenFibs = () => {
  let fib = fibo(32);
  return fib
    .filter((x) => x % 2 == 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(`evenFibs()`);
console.log(evenFibs());
