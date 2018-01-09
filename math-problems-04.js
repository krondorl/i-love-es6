// Problem 4
// Largest palindrome product
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (n) => {
  let str = n.toString();
  return str == str.split('').reverse().join('');
};

const largestPalindromeProduct = () => {
  let palindromes = [];
  for (let x = 100; x <= 999; x++) {
    for (let y = 100; y <= 999; y++) {
      let prod = x*y;
      if (isPalindrome(prod)) {
        palindromes.push(prod);
      }
    }
  }
  palindromes = palindromes.sort((a, b) => a - b);
  return palindromes[palindromes.length - 1];
};

console.log(`largestPalindromeProduct()`);
console.log(largestPalindromeProduct());
