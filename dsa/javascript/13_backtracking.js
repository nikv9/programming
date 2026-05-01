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
