function* fruits() {
  yield `apple`;
  yield `plum`;
  yield `orange`;
  yield `banana`;
  yield `sour cherry`;
}

function* veggies() {
  yield `broccoli`;
  yield `tomato`;
  yield `carrot`;
}

var fgen = fruits();
var vgen = veggies();

console.log('fruits');
console.log(fgen.next().value);
console.log(fgen.next().value);
console.log(fgen.next().value);
console.log(fgen.next().value);
console.log(fgen.next().value);
console.log('----');
console.log('veggies');
console.log(vgen.next().value);
console.log(vgen.next().value);
console.log(vgen.next().value);
