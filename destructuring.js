var x = 10;
var y = 22;

console.log('x = ', x);
console.log('y = ', y);
[x, y] = [y, x];

console.log('after destrucuring swap');
console.log('x = ', x);
console.log('y = ', y);

[x, y] = [1, 2];

console.log('after value assignment');
console.log('x = ', x);
console.log('y = ', y);
