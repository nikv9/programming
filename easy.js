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
