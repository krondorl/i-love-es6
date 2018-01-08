// Arrow functions practice

var add = (a, b) => {
  return a + b;
};

var subtract = (a, b) => {
  return a - b;
};

var multiply = (a, b) => {
  return a * b;
};

var divide = (a, b) => {
  return a / b;
};

var isOdd = (a) => {
  return (a % 2 === 0) ? 'Not an odd number' : 'Odd number';
};

var isEven = (a) => {
  return (a % 2 === 0) ? 'Even number' : 'Not an even number';
};

var isPrime = (a) => {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return a !== 1;
}

var isPalindrome = (str) => {
  return str == str.split('').reverse().join('');
}

var lengthCheck = (str) => {
  return str.length;
}

var dog = () => {
  return 'Bark!';
}

var cat = () => {
  return 'Meow...';
}

var pig = () => {
  return 'Oink, oink.';
}

var duck = () => {
  return 'Quack!';
}

var isDivThree = (n) => (n % 3 == 0);

var isDivFour = (n) => (n % 4 == 0);

console.log('>add(1,2)');
console.log(add(1,2));
console.log('>subtract(5,6)');
console.log(subtract(5,6));
console.log('>multiply(7,7)');
console.log(multiply(7,7));
console.log('>divide(121,7)');
console.log(divide(121,7));
console.log('>isOdd(1)');
console.log(isOdd(1));
console.log('>isEven(8)');
console.log(isEven(8));
console.log('>isPrime(17)');
console.log(isPrime(17));
console.log(`>isPalindrome('29')`);
console.log(isPalindrome('29'));
console.log(`>lengthCheck('apple juice')`);
console.log(lengthCheck('apple juice'));
console.log('>Animal sounds');
console.log(dog());
console.log(cat());
console.log(pig());
console.log(duck());
console.log(`isDivThree(3)`);
console.log(isDivThree(3));
console.log(`isDivFour(5)`);
console.log(isDivFour(5));
