// Problem 18 
// Maximum path sum I
// By starting at the top of the triangle below and moving to adjacent numbers
// on the row below, the maximum total from top to bottom is 23.
//
// 3
// 7 4
// 2 4 6
// 8 5 9 3
//
// That is, 3 + 7 + 4 + 9 = 23.
//
// Find the maximum total from top to bottom of the triangle below:
//
// NOTE: As there are only 16384 routes, it is possible to solve this problem
// by trying every route. However, Problem 67, is the same challenge
// with a triangle containing one-hundred rows; it cannot be solved by brute force,
// and requires a clever method! ;o)

let triangle = [
  [75,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [95,64,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [17,47,82,0,0,0,0,0,0,0,0,0,0,0,0],
  [18,35,87,10,0,0,0,0,0,0,0,0,0,0,0],
  [20,4,82,47,65,0,0,0,0,0,0,0,0,0,0],
  [19,1,23,75,3,34,0,0,0,0,0,0,0,0,0],
  [88,2,77,73,7,63,67,0,0,0,0,0,0,0,0],
  [99,65,4,28,6,16,70,92,0,0,0,0,0,0,0],
  [41,41,26,56,83,40,80,70,33,0,0,0,0,0,0],
  [41,48,72,33,47,32,37,16,94,290,0,0,0,0,0],
  [53,71,44,65,25,43,91,52,97,51,14,0,0,0,0],
  [70,11,33,28,77,73,17,78,39,68,17,57,0,0,0],
  [91,71,52,38,17,14,91,43,58,50,27,29,48,0,0],
  [63,66,4,68,89,53,67,30,73,16,69,87,40,31,0],
  [4,62,98,27,23,9,70,98,73,93,38,53,60,4,23]
];

// Let's try a smaller one to make a draft version
let smallTriangle = [
  [1,0,0],
  [2,3,0],
  [4,5,6],
];

// Reducing algorithm
// WIP, not working yet :(
const calcTriangle = (triangle) => {
  let reduceRow = 0;
  let newRow = [];

  if (triangle.length >= 3) {
    reduceRow = triangle.length - 2;
  } else {
    reduceRow = 1;
  }

  while (reduceRow >= 1) {
    newRow = [];
    for (let col = 0; col <= reduceRow; col++) {
      let a     = triangle[reduceRow][col];
      let left  = triangle[reduceRow + 1][col];
      let right = triangle[reduceRow + 1][col + 1];
      if (left > right) {
        newRow.push(a + left);
      } else {
        newRow.push(a + right);
      }
    }
    triangle.splice(reduceRow, 2);
    triangle.push(newRow);
    console.log(newRow);
    reduceRow--;
  }

  // Last reduction
  let a     = triangle[0][0];
  let left  = newRow[0];
  let right = newRow[1];
  if (left > right) {
    return a + left;
  } else {
    return a + right;
  }
}

console.log(calcTriangle(triangle));
