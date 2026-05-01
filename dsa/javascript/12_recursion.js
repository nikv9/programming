// print numbers from 1 to n using recursion.
// e.g. n = 3 ->
// 1
// 2
// 3
function printNumbersVertical(n) {
  if (n === 0) return;

  printNumbersVertical(n - 1);
  console.log(n);
}

// print numbers from 1 to n using recursion.
// e.g. n = 10 -> 1 2 3 4 5 6 7 8 9 10
function printNumbersHorizontal(n) {
  let res = [];

  function helper(x) {
    if (x === 0) return;
    helper(x - 1);
    res.push(x);
  }

  helper(n);
  console.log(res.join(" "));
}



// recursive factorial algorithm.
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}




