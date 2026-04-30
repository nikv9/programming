// LinkedList

// find the length of the singly linked list.
// e.g. 1->2->3->4->5 -> 5

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function getLinkedListLength(head) {
  let count = 0;

  let currNode = head;

  while (currNode != null) {
    count++;
    currNode = currNode.next;
  }
  return count;
}


// basic linked list operations.
class BasicListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class BasicLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    const newNode = new BasicListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addLast(data) {
    const newNode = new BasicListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }

  toArray() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.data);
      current = current.next;
    }

    return values;
  }
}


// detect loop in linked list.
class HardListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectLoop(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// finding middle element in a linked list.
function getMiddle(head) {
  if (head === null) {
    return -1;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

// nth node from end of linked list.
function getNthFromLast(head, n) {
  if (head === null) {
    return -1;
  }

  let count = 0;
  let temp = head;

  while (temp !== null) {
    temp = temp.next;
    count++;
  }

  if (count < n) {
    return -1;
  }

  count -= n;
  let current = head;

  for (let i = 0; i < count; i++) {
    current = current.next;
  }

  return current.value;
}

// remove duplicate element from sorted linked list.
function removeDuplicatesFromSortedList(head) {
  if (head === null) {
    return null;
  }

  let current = head;

  while (current !== null && current.next !== null) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// reverse a linked list.
function reverseListIterative(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}

function reverseListRecursive(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseListRecursive(head.next);
  const headNext = head.next;
  headNext.next = head;
  head.next = null;
  return newHead;
}

