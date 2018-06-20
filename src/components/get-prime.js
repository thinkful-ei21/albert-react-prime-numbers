const getPrimeNumbers = function(n) {
  let primeNumbers = [1];

  if (n === 0) {
    return 0;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (j === i) {
        primeNumbers.push(i);
      } else if (i % j) {
        continue;
      } else {
        break;
      }
    }
  }

  return primeNumbers;
};

module.exports = getPrimeNumbers;
