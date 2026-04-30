// String

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
