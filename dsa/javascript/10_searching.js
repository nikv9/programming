// linear search implementation.
function linearSearch(arr, x) {
  let ans = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return ans;
}
// console.log(linearSearch([1, 2, 3], 2));

// return true if k is present in the sorted array.
// e.g. [1, 2, 3, 4, 6], k = 6 -> true
const searchInSortedArray = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) return false;

    if (arr[i] == k) return true;
  }
};

// find position of k in sorted array using binary search.
// e.g. [1, 2, 3, 4, 5], k = 4 -> 3
function binarySearch(arr, k) {
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

// return the index of the first occurrence of substring pat in txt.
// e.g. txt = "GeeksForGeeks", pat = "For" -> 5
function findFirstOccurrence(txt, pat) {
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
