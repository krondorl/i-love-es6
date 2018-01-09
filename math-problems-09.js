// Problem 9
// Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const isPerimeter = (a, b, c) => a + b + c == 1000;

const isArea = (a, b, c) => a * a + b * b == c * c;

const findTriplet = () => {
  let a, b, c;
  for (c = 400; c <= 500; c++) {
    for (a = 1; a <= 500; a++) {
      for (b = 1; b <= 500; b++) {
        if (isPerimeter(a, b, c)) {
          if (isArea(a, b, c)) {
            return a * b * c;
          }
        }
      }
    }
  }
}

console.log(`findTriplet()`);
console.log(findTriplet());
