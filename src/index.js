module.exports = function getZerosCount(number) {
  // your implementation
  let count = 0;
  while (number > 0) {
    number /= 5;
    count += Math.floor(number);
  }
  return count;
}
