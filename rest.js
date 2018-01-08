function one(...theArgs) {
  console.log(theArgs.length);
}

one(1);
one(1, 2);
one(1, 2, 3);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function one_sum(...theArgs) {
  console.log(theArgs.reduce(reducer));
}

console.log('---');
one_sum(1);
one_sum(1, 2);
one_sum(1, 2, 3);

function double_length(...theArgs) {
  console.log(theArgs.length * 2);
}

function triple_length(...theArgs) {
  console.log(theArgs.length * 3);
}

console.log('---');
double_length(1, 2, 3);
triple_length(1, 2, 3, 4);
