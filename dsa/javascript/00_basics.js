// variables and scope
const x = "immutable";
let y = "mutable";

if (true) {
  let a = "scoped";
  var b = "unscoped";
}

// functions
function normalFunction(a, b) {
  return a + b;
}

const arrowFunction = (a, b) => a + b;

console.log(normalFunction(2, 3)); // 5
console.log(arrowFunction(2, 3)); // 5

// objects and classes
const person = {
  name: "nik",
  greet() {
    return `hello, ${this.name}`;
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

console.log(person.greet()); // hello, nik
const me = new User("nik");
console.log(me.getName()); // nik

// the 'this' keyword
const contextExample = {
  value: 42,
  normal() {
    console.log("normal 'this':", this.value); // refers to contextExample
  },
  arrow: () => {
    console.log("arrow 'this':", this.value); // refers to outer scope
  },
};

contextExample.normal();
contextExample.arrow();

// destructuring
const { name: userName } = person;
const [first, second] = [1, 2];

// spread and rest (...)
const arr = [1, 2];
const newArr = [...arr, 3]; // spread

function sumAll(...args) {
  // rest
  return args.reduce((s, n) => s + n, 0);
}

console.log(userName, first, second); // nik 1 2
console.log(newArr); // [1, 2, 3]
console.log(sumAll(1, 2, 3)); // 6

// array methods (map, filter, reduce)
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const total = nums.reduce((s, n) => s + n, 0);

console.log(doubled, evens, total); // [2, 4, 6, 8, 10], [2, 4], 15

// patterns
function main() {
  // i = row index, j = column index

  const n = 3;
  // * * *
  // * * *
  // * * *
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
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }

  // 1 1 1
  // 2 2 2
  // 3 3 3
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += i + " ";
    }
    console.log(line);
  }

  // 1
  // 2 2
  // 3 3 3
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i + " ";
    }
    console.log(line);
  }

  // 1 2 3
  // 1 2 3
  // 1 2 3
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += j + " ";
    }
    console.log(line);
  }

  // 3 3 3
  // 2 2 2
  // 1 1 1
  for (let i = n; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += i + " ";
    }
    console.log(line);
  }

  // 3 2 1
  // 3 2 1
  // 3 2 1
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = n; j >= 1; j--) {
      line += j + " ";
    }
    console.log(line);
  }

  // 1 2 3
  // 4 5 6
  // 7 8 9
  {
    let count = 1;
    for (let i = 1; i <= n; i++) {
      let line = "";
      for (let j = 1; j <= n; j++) {
        line += count + " ";
        count++;
      }
      console.log(line);
    }
  }

  // 1
  // 2 1
  // 3 2 1
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i; j >= 1; j--) {
      line += j + " ";
    }
    console.log(line);
  }

  // A A A
  // B B B
  // C C C
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += String.fromCharCode(64 + i) + " ";
    }
    console.log(line);
  }

  // A B C
  // A B C
  // A B C
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += String.fromCharCode(64 + j) + " ";
    }
    console.log(line);
  }

}

main();
