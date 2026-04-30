// Queue

// basic operation of queue.
class BasicQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// queue using linkedlist.
class LinkedQueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  enqueue(data) {
    const newNode = new LinkedQueueNode(data);

    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    const front = this.head.data;
    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    return front;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.head.data;
  }
}


// queue using stack.
class QueueUsingStacks {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(value) {
    this.s1.push(value);
  }

  pop() {
    if (this.s1.length === 0) {
      return -1;
    }

    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }

    const answer = this.s2.pop();

    while (this.s2.length !== 0) {
      this.s1.push(this.s2.pop());
    }

    return answer;
  }
}

