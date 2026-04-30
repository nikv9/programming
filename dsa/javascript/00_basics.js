// common ways to define and run code in javascript.
function normalFunctionExample(a, b) {
  return a + b;
}

const arrowFunctionExample = (a, b) => {
  return a + b;
};

class ClassExample {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

const objectMethodExample = {
  add(a, b) {
    return a + b;
  },
};

let directCodeExample = 10 + 20;

console.log(normalFunctionExample(2, 3));
console.log(arrowFunctionExample(2, 3));
console.log(new ClassExample(10).getValue());
console.log(objectMethodExample.add(2, 3));
console.log(directCodeExample);

// patterns
function main() {
  const n = 4;
  // i = row index, j = column index

  // * * * *
  // * * * *
  // * * * *
  // * * * *
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += "* ";
    }
    console.log(line);
  }

  // *
  // * *
  // * * *
  // * * * *
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }

  // 1111
  // 2222
  // 3333
  // 4444
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += i;
    }
    console.log(line);
  }

  // 1
  // 22
  // 333
  // 4444
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i;
    }
    console.log(line);
  }

  // 1234
  // 1234
  // 1234
  // 1234
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += j;
    }
    console.log(line);
  }

  // 4444
  // 3333
  // 2222
  // 1111
  for (let i = n; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += i;
    }
    console.log(line);
  }

  // 4321
  // 4321
  // 4321
  // 4321
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = n; j >= 1; j--) {
      line += j;
    }
    console.log(line);
  }

  // 1 2 3 4
  // 5 6 7 8
  // 9 10 11 12
  // 13 14 15 16
  {
    let count = 1;
    for (let i = 1; i <= n; i++) {
      let line = "";
      for (let j = 1; j <= n; j++) {
        line = line + count + " ";
        count++;
      }
      console.log(line);
    }
  }

  // 1
  // 2 1
  // 3 2 1
  // 4 3 2 1
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i; j >= 1; j--) {
      line += j + " ";
    }
    console.log(line);
  }

  //  AAAA
  //  BBBB
  //  CCCC
  //  DDDD
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      const x = String.fromCharCode("A".charCodeAt(0) + i - 1);
      line += x;
    }
    console.log(line);
  }

  // ABCD
  // ABCD
  // ABCD
  // ABCD
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      const letter = String.fromCharCode("A".charCodeAt(0) + j - 1);
      line += letter;
    }
    console.log(line);
  }
}

main();

