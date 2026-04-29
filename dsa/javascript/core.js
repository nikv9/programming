// find if element x is present in the array and return its index.
// e.g. [1, 2, 3, 4], x = 3 -> 2
function search(arr, x) {
  let ans = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return ans;
}

// return true if k is present in the sorted array.
// e.g. [1, 2, 3, 4, 6], k = 6 -> true
function searchInSorted(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) return false;

    if (arr[i] == k) return true;
  }
}

// find the largest element in an array.
// e.g. [1, 8, 7, 56, 90] -> 90
function largest(arr) {
  let largeNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largeNum < arr[i]) {
      largeNum = arr[i];
    }
  }

  return largeNum;
}

// calculate the sum of all natural numbers from 1 up to n.
// e.g. n = 5 -> 15
function findSum(n) {
  let sum = 0;
  if (n == 0) return 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

// determine whether array b is a subset of array a.
// e.g. a = [11, 7, 1, 13, 21, 3, 7, 3], b = [11, 3, 7, 1, 7] -> true
function isSubset(a, b) {
  let freq = {};

  for (let i = 0; i < a.length; i++) {
    freq[a[i]] = (freq[a[i]] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    if (!freq[b[i]]) return false;
    freq[b[i]]--;
  }

  return true;
}

// rotate the array by one position in clockwise direction.
// e.g. [1, 2, 3, 4, 5] -> [5, 1, 2, 3, 4]
function rotate(arr) {
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;
}

// print numbers from 1 to n using recursion.
// e.g. n = 3 ->
// 1
// 2
// 3
function printNos(n) {
  if (n === 0) return;

  printNos(n - 1);
  console.log(n);
}

// print numbers from 1 to n using recursion.
// e.g. n = 10 -> 1 2 3 4 5 6 7 8 9 10
function printNosHorizontal(n) {
  let res = [];

  function helper(x) {
    if (x === 0) return;
    helper(x - 1);
    res.push(x);
  }

  helper(n);
  console.log(res.join(" "));
}

// find the length of the singly linked list.
// e.g. 1->2->3->4->5 -> 5

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
function getCount(head) {
  let count = 0;

  let currNode = head;

  while (currNode != null) {
    count++;
    currNode = currNode.next;
  }
  return count;
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

// reverse an array.
function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

// remove all duplicate numbers from the array.
// e.g. [2, 2, 3, 3, 7, 5] -> [2, 3, 7, 5]
function remDuplicate(arr) {
  let obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result[result.length] = arr[i];
    }
  }

  return result;
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

// find the factorial of a positive integer n.
// e.g. n = 5 -> 120
function factorial(n) {
  let ans = 1;
  for (let i = n; i > 0; i--) {
    ans *= i;
  }
  return ans;
}

// recursive factorial algorithm.
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

// determine whether a positive integer n is even or odd.
// e.g. n = 15 -> false
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

// return the index of the first occurrence of substring pat in txt.
// e.g. txt = "GeeksForGeeks", pat = "For" -> 5
function firstOccurence(txt, pat) {
  let n = txt.length;
  let m = pat.length;

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (txt[i + j] !== pat[j]) {
        break;
      }
    }
    if (j === m) return i;
  }

  return -1;
}

// find the sum of the integer array.
// e.g. [1, 2, 3, 4] -> 10
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// find position of k in sorted array using binary search.
// e.g. [1, 2, 3, 4, 5], k = 4 -> 3
function binarysearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == k) {
      ans = mid;
      high = mid - 1; // move left to find smaller index
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

// find equilibrium point.
function equilibriumPoint(arr) {
  if (arr.length === 1) {
    return 1;
  }

  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];

    if (leftSum === totalSum) {
      return i + 1;
    }

    leftSum += arr[i];
  }

  return -1;
}

// find duplicates.
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i]) && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }

    seen.add(arr[i]);
  }

  return duplicates.length === 0 ? [-1] : duplicates;
}

// find min and max value.
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

// find unique value.
function findUniqueValues(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      result.push(arr[i]);
    }
  }

  return result;
}

// find the missing number from range 0 to n in array.
function missingNumberSum(array, n) {
  const totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;

  for (let i = 0; i < array.length; i++) {
    arrSum += array[i];
  }

  return totalSum - arrSum;
}

// find the missing number in an array.
function missingNumberXor(array, n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result ^= i;
  }

  for (let i = 0; i < array.length; i++) {
    result ^= array[i];
  }

  return result;
}

// find all pairs with a given sum.
function pairSum(arr, target) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

// rotate array.
function rotateArrayLeft(arr, pos) {
  let count = 1;

  while (count <= pos) {
    const first = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = first;
    count++;
  }

  return arr;
}

// swap alternate elements.
function swapAlternateElements(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

// check if two strings are anagrams.
function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const first = a.split("").sort().join("");
  const second = b.split("").sort().join("");

  return first === second;
}

// check if a string is a palindrome.
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return 0;
    }

    left++;
    right--;
  }

  return 1;
}

// reverse a string.
function reverseStringManual(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

function reverseStringBuiltIn(str) {
  return str.split("").reverse().join("");
}

function reverseWordByDot(str) {
  return str.split(".").reverse().join(".");
}

function reverseWordsInSentence(str) {
  let result = "";
  let i = str.length - 1;

  while (i >= 0) {
    while (i >= 0 && str[i] === " ") {
      i--;
    }

    const end = i;
    if (end < 0) {
      break;
    }

    while (i >= 0 && str[i] !== " ") {
      i--;
    }

    if (result.length > 0) {
      result += " ";
    }

    result += str.slice(i + 1, end + 1);
  }

  return result;
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

// hashmap (map) operations.
function createHashMapExample() {
  const hashMap = new Map();
  hashMap.set("India", 130);
  hashMap.set("Nepal", 3);
  hashMap.set("Aus", 10);
  hashMap.set("Aus", 50);
  return hashMap;
}

function searchHashMapKey(hashMap, key) {
  return hashMap.has(key);
}

function searchHashMapValue(hashMap, value) {
  return Array.from(hashMap.values()).includes(value);
}

function deleteHashMapKey(hashMap, key) {
  hashMap.delete(key);
  return hashMap;
}

// hashset implementation.
function createHashSetExample() {
  const hashSet = new Set();
  hashSet.add(3);
  hashSet.add(1);
  hashSet.add(3);
  hashSet.add(5);
  hashSet.add(9);
  return hashSet;
}

function searchHashSetValue(hashSet, value) {
  return hashSet.has(value);
}

function deleteHashSetValue(hashSet, value) {
  hashSet.delete(value);
  return hashSet;
}

// sort the array in ascending order.
// e.g. [1, 5, 3, 2] -> [1, 2, 3, 5]
function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

// bubble sort algorithm.
function bubbleSortAlgo(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

// insertion sort algorithm.
function insertionSortAlgo(arr) {
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = key;
  }

  return result;
}

// selection sort algorithm.
function selectionSortAlgo(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    const temp = result[i];
    result[i] = result[minIndex];
    result[minIndex] = temp;
  }

  return result;
}

// find leaders in an array.
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

// maximum subarray sum (kadane's algorithm).
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

// sort an array of 0s, 1s, and 2s (dutch national flag algorithm).
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

// find subarray with a given sum.
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

// find all triplets with a given sum.
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

// binary tree implementation and traversal.
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

// height-balanced binary tree check.
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

// valid bst check.
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

// identical binary trees check.
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

// left view of a binary tree.
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

// spiral (zigzag) level order traversal of a binary tree.
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

// graph representation using adjacency list.
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

// graph implementation using adjacency list (object-based).
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

// max heap implementation.
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

// min heap implementation.
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

// subset generation
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

// greedy coin change algorithm.
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

// dynamic programming fibonacci algorithm.
function fibonacciDP(n) {
  const fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}
