let n = 4;

let count = 1;

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += i + j + " ";
  }
  console.log(line);
}

// for (let i = n; i >= 1; i--) {
//   let line = "";
//   for (let j = n; j >= 1; j--) {
//     line += j;
//   }
//   console.log(line);
// }
