function one(n = 1) {
  return n;
}

function two(n = 2) {
  return n;
}

function three(n = 3) {
  return n;
}

function four(n = 4) {
  return n;
}

var five = (n = 5) => n;

var six = (n = 6) => n;

console.log('three');
console.log(three());
console.log('four');
console.log(four());
console.log('five');
console.log(five());
console.log('six');
console.log(six());
