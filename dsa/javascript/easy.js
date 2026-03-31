// Given an array arr[]. The task is to find the largest element and return it.
// Examples:
// Input: arr[] = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.
class Solution {
  largest(arr) {
    let largeNum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (largeNum < arr[i]) {
        largeNum = arr[i];
      }
    }

    return largeNum;
  }
}

// Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
// Examples:
// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: For array [1, 2, 3, 4], the element to be searched is 3. Since 3 is present at index 2, the output is 2.

class Solution {
  search(arr, x) {
    let ans = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return i;
      }
    }

    return ans;
  }
}

// Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].
// Examples:
// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]

class Solution {
  isSubset(a, b) {
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
}

// Given an integer n. Your task is to calculate the sum of all natural numbers from 1 up to n (inclusive). If n is 0, the sum should be 0.

class Solution {
  findSum(n) {
    let sum = 0;
    if (n == 0) return 0;

    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }

    return sum;
  }
}

// Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.
// Examples:
// Input: arr[] = [1, 2, 3, 4, 6], k = 6
// Output: true
// Exlpanation: Since, 6 is present in the array at index 4 (0-based indexing), output is true.

class Solution {
  searchInSorted(arr, k) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > k) return false;

      if (arr[i] == k) return true;
    }
  }
}

// Given an array arr, rotate the array by one position in clockwise direction.
// Examples:
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

class Solution {
  rotate(arr) {
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;
  }
}

// You are given an integer n. You have  to print all numbers from 1 to n.
// Note: You must use recursion only, and print all numbers from 1 to n in a single line, separated by spaces.
// Examples:
// Input: n = 10
// Output: 1 2 3 4 5 6 7 8 9 10
class Solution {
  printNos(n) {
    let res = [];

    function helper(x) {
      if (x === 0) return;
      helper(x - 1);
      res.push(x);
    }

    helper(n);
    console.log(res.join(" "));
  }
}

// Given head of a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.
// Examples :
// Input: head : 1->2->3->4->5
// Output: 5
// Explanation: Length of the linked list is 5, as there
// are 5 nodes present in it.

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

class Solution {
  getCount(head) {
    let count = 0;

    let currNode = head;

    while (currNode != null) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }
}

// Given a number n, return an array containing the first n Fibonacci numbers.
// Note: The first two numbers of the series are 0 and 1.
// Examples:
// Input: n = 5
// Output: [0, 1, 1, 2, 3]

class Solution {
  fibonacciNumbers(n) {
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
}

// reverse arr
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

// Given an array arr[] consisting of positive integers, return the array by removing all duplicate numbers.
// Input: arr[] = [2, 2, 3, 3, 7, 5]
// Output: [2, 3, 7, 5]
// Explanation: After removing the duplicates 2 and 3 we get 2 3 7 5.
class Solution {
  remDuplicate(arr) {
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
}

// Given an unsorted array arr[] of numbers, sort the array in ascending order.
// Input: arr[] = [1, 5, 3, 2]
// Output: [1, 2, 3, 5]
// Explanation: After sorting, array will be like [1, 2, 3, 5].
class Solution {
  sortArr(arr) {
    return arr.sort((a, b) => a - b);
  }
}

// brute force
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([5, 3, 1, 4, 2]));

// Given two integers a and b, You have to compute their LCM and GCD and return an array containing their LCM and GCD.
// Input: a = 5 , b = 10
// Output: [10, 5]
// Explanation: LCM of 5 and 10 is 10, while their GCD is 5.
class Solution {
  lcmAndGcd(a, b) {
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
}

// Given a positive integer, n. Find the factorial of n.
// Input: n = 5
// Output: 120
// Explanation: 1 x 2 x 3 x 4 x 5 = 120
class Solution {
  factorial(n) {
    let ans = 1;
    for (let i = n; i > 0; i--) {
      ans *= i;
    }
    return ans;
  }
}

// Given a positive integer n, determine whether it is odd or even. Return true if the number is even and false if the number is odd.
// Input: n = 15
// Output: false
// Explanation: The number is not divisible by 2, Odd number.
class Solution {
  isEven(n) {
    if (n % 2 == 0) {
      return true;
    }
    return false;
  }
}

// Given two strings txt and pat, return the 0-based index of the first occurrence of the substring pat in txt. If pat is not found, return -1.
// Note: You are not allowed to use the inbuilt function.
// Input: txt = "GeeksForGeeks", pat = "For"
// Output: 5
// Explanation: "For" is present as substring in "GeeksForGeeks" from index 5 (0 based indexing).
class Solution {
  firstOccurence(txt, pat) {
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
}

// You are given an integer array arr[]. The task is to find the sum of it.
// Input: arr[] = [1, 2, 3, 4]
// Output: 10
// Explanation: 1 + 2 + 3 + 4 = 10.
class Solution {
  arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }
}

// Given an integer k and array arr. Your task is to return the position of the first occurrence of k in the given array and if element k is not present in the array then return -1.
// Input: k = 16 , arr = [9, 7, 16, 16, 4]
// Output: 3
// Explanation: The value 16 is found in the given array at positions 3 and 4, with position 3 being the first occurrence.
class Solution {
  search(k, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == k) {
        return i + 1;
      }
    }
    return -1;
  }
}

// Given a sorted array arr[] and an integer k, find the position(0-based indexing) at which k is present in the array using binary search. If k doesn't exist in arr[] return -1.
// Note: If multiple occurrences are there, please return the smallest index.
// Input: arr[] = [1, 2, 3, 4, 5], k = 4
// Output: 3
// Explanation: 4 appears at index 3.
class Solution {
  binarysearch(arr, k) {
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
}

// Problems from ds.docx and algo.docx

// Equilibrium Point
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

// Find Duplicates
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

// Find Min and Max Value
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

// Find Unique Value
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

// Find the Missing Number in an Array
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

function missingNumberSum(array, n) {
  const totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;

  for (let i = 0; i < array.length; i++) {
    arrSum += array[i];
  }

  return totalSum - arrSum;
}

// Find All Pairs with a Given Sum
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

// Search an Element and Print Its Index
function searchElementIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Reverse Array
function reverseArrayDoc(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

// Rotate Array
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

// Swap Alternate Elements
function swapAlternateElements(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

// Check if Two Strings are Anagrams
function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const first = a.split("").sort().join("");
  const second = b.split("").sort().join("");

  return first === second;
}

// Check if a String is a Palindrome
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

// Reverse a String
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

// Reverse a Word
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

// Basic Linked List Operations
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

// Basic Operations of Stack
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

// Stack using Linkedlist
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

// Basic Operation of Queue
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

// Queue using Linkedlist
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

// Queue using Array
class ArrayQueue {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
    this.rear = -1;
  }

  isEmpty() {
    return this.rear === -1;
  }

  enqueue(data) {
    if (this.rear === this.size - 1) {
      return;
    }

    this.rear++;
    this.arr[this.rear] = data;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    const front = this.arr[0];

    for (let i = 0; i < this.rear; i++) {
      this.arr[i] = this.arr[i + 1];
    }

    this.rear--;
    return front;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.arr[0];
  }
}

// HashMap (Map) Operations
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

// HashSet Implementation
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

// Binary Search Algorithm
function binarySearchAlgo(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Linear Search Algorithm
function linearSearchAlgo(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Find Missing Number in Sequence
function findMissingNumInSequence(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }

  for (let i = 1; i <= arr.length + 1; i++) {
    sum2 += i;
  }

  return sum2 - sum1;
}

// Bubble Sort Algorithm
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

// Insertion Sort Algorithm
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

// Selection Sort Algorithm
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

// Recursive Factorial Algorithm
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

// Recursive Number Printing Algorithm
function printNumbersRecursive(n) {
  const result = [];

  function helper(num) {
    if (num === 0) {
      return;
    }

    helper(num - 1);
    result.push(num);
  }

  helper(n);
  return result;
}
