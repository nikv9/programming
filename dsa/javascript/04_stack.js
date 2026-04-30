// Stack

// basic operations of stack.
class ArrayStack {
  constructor() {
    this.list = [];
  }

  isEmpty() {
    return this.list.length === 0;
  }

  push(data) {
    this.list.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.list.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.list[this.list.length - 1];
  }
}

// stack using linkedlist.
class LinkedStackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new LinkedStackNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  isEmpty() {
    return this.head === null;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const top = this.head;
    this.head = this.head.next;
    return top.data;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.head.data;
  }
}

// parenthesis checker.
function isParenthesisBalanced(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const current = str.charAt(i);

    if (current === "(" || current === "[" || current === "{") {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();
      if (
        (current === ")" && top !== "(") ||
        (current === "]" && top !== "[") ||
        (current === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// sort a stack.
function sortStack(stack) {
  if (stack.length === 0) {
    return stack;
  }

  const num = stack.pop();
  sortStack(stack);
  insertIntoSortedStack(stack, num);
  return stack;
}

function insertIntoSortedStack(stack, num) {
  if (stack.length === 0 || stack[stack.length - 1] < num) {
    stack.push(num);
    return;
  }

  const top = stack.pop();
  insertIntoSortedStack(stack, num);
  stack.push(top);
}

// stack using queue.
class StackUsingQueues {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(value) {
    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }

    this.q1.push(value);

    while (this.q2.length !== 0) {
      this.q1.push(this.q2.shift());
    }
  }

  pop() {
    if (this.q1.length === 0) {
      return -1;
    }

    return this.q1.shift();
  }
}

// two stacks in a single array.
class TwoStacksInArray {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1;
    this.top2 = size;
  }

  push1(value) {
    if (this.top1 + 1 === this.top2) {
      return;
    }

    this.top1++;
    this.arr[this.top1] = value;
  }

  push2(value) {
    if (this.top2 - 1 === this.top1) {
      return;
    }

    this.top2--;
    this.arr[this.top2] = value;
  }

  pop1() {
    if (this.top1 === -1) {
      return -1;
    }

    return this.arr[this.top1--];
  }

  pop2() {
    if (this.top2 === this.size) {
      return -1;
    }

    return this.arr[this.top2++];
  }
}
