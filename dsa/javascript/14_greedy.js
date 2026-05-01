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
