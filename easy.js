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
    // code here
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
    // your code here
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
    // code here
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
