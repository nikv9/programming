// Leaders in an Array
function leadersInArray(arr) {
  const result = [];
  let rightMax = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= rightMax) {
      result.push(arr[i]);
      rightMax = arr[i];
    }
  }

  return result.reverse();
}

// Maximum Subarray Sum (Kadane's Algorithm)
function maxSubarraySum(arr) {
  let currentSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

// Sort an Array of 0s, 1s, and 2s (Dutch National Flag Algorithm)
function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      const temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      const temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }

  return arr;
}

// Find Subarray with a Given Sum
function subarraySum(arr, target) {
  const prefixMap = new Map();
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === target) {
      return [1, i + 1];
    }

    if (prefixMap.has(currentSum - target)) {
      return [prefixMap.get(currentSum - target) + 2, i + 1];
    }

    if (!prefixMap.has(currentSum)) {
      prefixMap.set(currentSum, i);
    }
  }

  return [-1];
}

// Find All Triplets with a Given Sum
function tripletSum(arr, target) {
  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          triplets.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return triplets;
}

// Parenthesis Checker
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

// Detect Loop in Linked List
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

// Finding Middle Element in a Linked List
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

// Nth Node from End of Linked List
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

// Remove Duplicate Element from Sorted Linked List
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

// Reverse a Linked List
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

// Sort a Stack
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

// Stack using Queue
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

// Two Stacks in a Single Array
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

// Queue using Stack
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

// Binary Tree Implementation and Traversal
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeBuilder {
  constructor() {
    this.idx = -1;
  }

  buildTree(nodes) {
    this.idx++;

    if (nodes[this.idx] === -1) {
      return null;
    }

    const newNode = new TreeNode(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }
}

function inorderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  inorderTraversal(root.left, result);
  result.push(root.data);
  inorderTraversal(root.right, result);
  return result;
}

function preorderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  result.push(root.data);
  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);
  return result;
}

function postorderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);
  result.push(root.data);
  return result;
}

function levelOrderTraversal(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length !== 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      level.push(current.data);

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    result.push(level);
  }

  return result;
}

// Height-Balanced Binary Tree Check
function isBalanced(root) {
  return treeHeight(root) !== -1;
}

function treeHeight(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = treeHeight(root.left);
  if (leftHeight === -1) {
    return -1;
  }

  const rightHeight = treeHeight(root.right);
  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

// Valid BST Check
function isValidBST(root) {
  let prev = null;

  function inorder(node) {
    if (node === null) {
      return true;
    }

    if (!inorder(node.left)) {
      return false;
    }

    if (prev !== null && node.data <= prev.data) {
      return false;
    }

    prev = node;
    return inorder(node.right);
  }

  return inorder(root);
}

// Identical Binary Trees Check
function isIdentical(root1, root2) {
  if (root1 === null || root2 === null) {
    return root1 === root2;
  }

  return (
    root1.data === root2.data &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
}

// Left View of a Binary Tree
function leftView(root) {
  const list = [];
  collectLeftView(root, list, 0);
  return list;
}

function collectLeftView(root, list, level) {
  if (root === null) {
    return;
  }

  if (level === list.length) {
    list.push(root.data);
  }

  collectLeftView(root.left, list, level + 1);
  collectLeftView(root.right, list, level + 1);
}

// Spiral (Zigzag) Level Order Traversal of a Binary Tree
function findSpiral(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  const queue = [root];
  let reverse = true;

  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    if (reverse) {
      result.push(...level.reverse());
    } else {
      result.push(...level);
    }

    reverse = !reverse;
  }

  return result;
}

// Graph Representation Using Adjacency List
class GraphEdge {
  constructor(src, dest) {
    this.src = src;
    this.dest = dest;
  }
}

function createAdjacencyList(graph) {
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  graph[0].push(new GraphEdge(0, 2));
  graph[1].push(new GraphEdge(1, 2));
  graph[1].push(new GraphEdge(1, 3));
  graph[2].push(new GraphEdge(2, 0));
  graph[2].push(new GraphEdge(2, 1));
  graph[2].push(new GraphEdge(2, 3));
  graph[3].push(new GraphEdge(3, 1));
  graph[3].push(new GraphEdge(3, 2));

  return graph;
}

// Graph Implementation Using Adjacency List (Object-Based)
class AdjacencyListGraph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  printGraph() {
    const result = [];
    const vertices = Object.keys(this.vertices);

    for (const vertex of vertices) {
      result.push(`${vertex} -> ${this.vertices[vertex].join(", ")}`);
    }

    return result;
  }
}

// Max Heap Implementation
class MaxHeap {
  constructor(size) {
    this.maxsize = size;
    this.size = 0;
    this.heap = new Array(this.maxsize + 1).fill(0);
    this.heap[0] = Number.MAX_VALUE;
  }

  parent(index) {
    return Math.floor(index / 2);
  }

  leftChild(index) {
    return 2 * index;
  }

  rightChild(index) {
    return 2 * index + 1;
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = temp;
  }

  downHeapify(index) {
    if (index >= this.size / 2 && index <= this.size) {
      return;
    }

    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if (
      this.heap[index] < this.heap[leftIndex] ||
      this.heap[index] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        this.swap(index, leftIndex);
        this.downHeapify(leftIndex);
      } else {
        this.swap(index, rightIndex);
        this.downHeapify(rightIndex);
      }
    }
  }

  upHeapify(index) {
    const temp = this.heap[index];

    while (index > 0 && temp > this.heap[this.parent(index)]) {
      this.heap[index] = this.heap[this.parent(index)];
      index = this.parent(index);
    }

    this.heap[index] = temp;
  }

  insert(element) {
    this.size++;
    this.heap[this.size] = element;
    this.upHeapify(this.size);
  }

  extractMax() {
    const max = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.size--;
    this.downHeapify(1);
    return max;
  }
}

// Min Heap Implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  heapifyUp(index) {
    let currentIndex = index;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[this.parent(currentIndex)]
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    const leftIndex = this.leftChild(currentIndex);
    const rightIndex = this.rightChild(currentIndex);
    let smallest = currentIndex;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallest]
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    ) {
      smallest = rightIndex;
    }

    if (smallest !== currentIndex) {
      this.swap(currentIndex, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  getMin() {
    return this.heap[0];
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }
}

// Subset Generation (Iterative and Backtracking) Algorithm
function printSubsetsIterative(nums) {
  const subsets = [];
  const totalSubsets = Math.pow(2, nums.length);

  for (let i = 0; i < totalSubsets; i++) {
    const subset = [];

    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) !== 0) {
        subset.push(nums[j]);
      }
    }

    subsets.push(subset);
  }

  return subsets;
}

function printSubsetsBacktracking(nums) {
  const subsets = [];

  function backtrack(start, subset) {
    subsets.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  }

  backtrack(0, []);
  return subsets;
}

// Greedy Coin Change Algorithm
function coinChange(coins, amount) {
  const sortedCoins = [...coins].sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < sortedCoins.length; i++) {
    while (amount >= sortedCoins[i]) {
      amount -= sortedCoins[i];
      count++;
    }
  }

  if (amount !== 0) {
    return -1;
  }

  return count;
}

// Dynamic Programming Fibonacci Algorithm
function fibonacciDP(n) {
  const fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}
