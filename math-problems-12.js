// Problem 12
// Highly divisible triangular number
// The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
// The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// Let us list the factors of the first seven triangle numbers:
// 1: 1
// 3: 1,3
// 6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
//
// What is the value of the first triangle number to have over
// five hundred divisors?

// Too slow brute force:
//
// const divisors = (num) => {
//   if (num < 3) { return false; }
//   let divisorsArray = [1];
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       divisorsArray.push(i);
//     }
//   }
//   divisorsArray.push(num);
//   return divisorsArray;
// };
//
// const divisorsLength = (divisorsArray) => {
//   return divisorsArray.length;
// };
//
// const makeTriangle = (n) => {
//   let triangle = 0;
//   for (let i = 1; i <= n; i++) {
//     triangle += i;
//   }
//   return triangle;
// }

// const findTriangleFaster = () => {
//   for (let i = 0, seed = 35000; i < 100; i++, seed++) {
//     let triangle = makeTriangle(seed);
//     let divCount = divisorsLength(divisors(triangle));
//     console.log(`triangle = ${triangle}, divisors count = ${divCount}`);
//   }
// };

// findTriangleFaster();

// Too slow for Node.js, brute force
//
// const findThatTriangleNumber = () => {
//   let n = 10031,
//       tri = 50305465;
//   while (!divisorsLength(divisors(tri))) {
//     tri += n;
//     n++;
//     console.log(`tri = ${tri}, n = ${n}`);
//   }
//   return tri;
// };

// console.log(`findThatTriangleNumber()`);
// console.log(findThatTriangleNumber());

const divisorsNew = (n) => {
  let numberOfFactors = 0;
  for (let i = 1; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
    if (n % i == 0) {
      numberOfFactors += 2;
    } else {
      continue;
    }
  }
  return numberOfFactors;
}

const findTriangle = () => {
  let x = 1;
  for (let y = 2; y < 1000000; y++) {
    x += y;
    if (divisorsNew(x) >= 500) {
      console.log(`Found triangle number: ${x}`);
      break;
    }
  }
}

console.log(`Searching for triangle...`);
findTriangle();
