// let str = "";
// for (let i = 1; i < 11; i++) {
//   str += i + "";
// }
// console.log(i);

function fibon(n = 2) {
  let a = 0,
    b = 1;
  if (n === 1) return [0];
  let arr = [];
  arr = [a, b];

  for (let i = 2; i < n; i++) {
    let sum = a + b;
    arr.push(sum);
    a = b;
    b = sum;
  }
  return arr;
}

fibon();
