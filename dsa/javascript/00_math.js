// calculate the sum of all natural numbers from 1 up to n.
// e.g. n = 5 -> 15
function sumOfNaturalNumbers(n) {
  let sum = 0;
  if (n == 0) return 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

// determine whether a positive integer n is even or odd.
// e.g. n = 15 -> false
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

// bitwise method to check if a number is even.
function isEvenBitwise(n) {
  return (n & 1) === 0;
}

// find the factorial of a positive integer n.
// e.g. n = 5 -> 120
function factorial(n) {
  let ans = 1;
  for (let i = n; i > 0; i--) {
    ans *= i;
  }
  return ans;
}

// return an array containing the first n fibonacci numbers.
// e.g. n = 5 -> [0, 1, 1, 2, 3]
function fibonacciNumbers(n) {
  let a = 0,
    b = 1;

  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let arr = [a, b];

  for (let i = 2; i < n; i++) {
    let sum = a + b;
    arr.push(sum);
    a = b;
    b = sum;
  }

  return arr;
}

// compute the lcm and gcd of two integers.
// e.g. a = 5, b = 10 -> [10, 5]
function lcmAndGcd(a, b) {
  let x = a,
    y = b;

  // GCD using Euclidean Algorithm
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  let gcd = x;
  let lcm = (a * b) / gcd;

  return [lcm, gcd];
}
