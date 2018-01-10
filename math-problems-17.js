// Problem 17
// Number letter counts
// If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out
// in words, how many letters would be used?
//
// NOTE: Do not count spaces or hyphens. For example,
// 342 (three hundred and forty-two) contains 23 letters
// and 115 (one hundred and fifteen) contains 20 letters.
// The use of "and" when writing out numbers is in compliance
// with British usage.

const numbersLookup = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'onethousand'
}

const convertTwoDigits = (n) => {
  if (n >= 1 && n <= 20) {
    return numbersLookup[n];
  }
  if (n >= 21 && n <= 99) {
    const firstNumber  = parseInt(n.toString()[0], 10) * 10;
    const secondNumber = parseInt(n.toString()[1], 10);
    return numbersLookup[firstNumber] + numbersLookup[secondNumber];
  }
  return 'error';
}

const convertNumber = (n) => {
  if (n == 1000) {
    return numbersLookup[n];
  }
  if (n >= 1 && n <= 99) {
    return convertTwoDigits(n);
  }
  if (n >= 100 && n <= 999) {
    const firstNumber  = parseInt(n.toString()[0], 10);
    const secondNumber = parseInt(n.toString()[1], 10) * 10;
    const thirdNumber  = parseInt(n.toString()[2], 10);
    const lastTwoDigits = secondNumber + thirdNumber;
    if (n % 100 == 0) {
      return numbersLookup[firstNumber] + numbersLookup[100];
    }
    return numbersLookup[firstNumber] +
      numbersLookup[100] +
      'and' +
      convertTwoDigits(lastTwoDigits);
  }
  return 'error';
};

const calculateLetterSum = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    sum += convertNumber(i).length;
  }
  return sum;
}

console.log(`calculateLetterSum()`);
console.log(calculateLetterSum());
