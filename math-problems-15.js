// Problem 15
// Lattice paths
// Starting in the top left corner of a 2×2 grid, and only being able to move
// to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

// Using memoization or caching technique
var cache = {};

const calcPath = (x, y) => {
  const pair = `${x}-${y}`;
  if (pair in cache) {
    return cache[pair];
  }
  if (x == 0 || y == 0) {
    return 1;
  }
  let result = calcPath(x - 1, y) + calcPath(x, y - 1);
  cache[pair] = result;
  return result;
}

console.log(`calcPath(20, 20)`);
console.log(calcPath(20, 20));
