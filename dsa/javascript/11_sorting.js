// Sorting

// e.g. [1, 5, 3, 2] -> [1, 2, 3, 5]
function sortArrayAscending(arr) {
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
