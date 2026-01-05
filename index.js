class Solution {
  rotate(arr) {
    // store last element
    const last = arr[arr.length - 1];

    // shift elements to the right
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    // put last element at first position
    arr[0] = last;
  }
}
let arr = [1, 2, 3, 4, 5];
new Solution().rotate(arr);
console.log(arr); // [5, 1, 2, 3, 4]
