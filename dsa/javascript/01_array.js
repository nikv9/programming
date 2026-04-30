// Array

// find the sum of the integer array.
// e.g. [1, 2, 3, 4] -> 10
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// e.g. [1, 8, 7, 56, 90] -> 90
function findLargestElement(arr) {
  let largeNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largeNum < arr[i]) {
      largeNum = arr[i];
    }
  }

  return largeNum;
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

// reverse an array.
function reverseArray(arr) {
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

// swap alternate elements.
function swapAlternateElements(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

// rotate the array by one position in clockwise direction.
// e.g. [1, 2, 3, 4, 5] -> [5, 1, 2, 3, 4]
function rotateArrayByOne(arr) {
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;
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

// remove all duplicate numbers from the array.
// e.g. [2, 2, 3, 3, 7, 5] -> [2, 3, 7, 5]
function removeDuplicateValues(arr) {
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
