function sumOfAllOddNumbers(nums) {
  var count = 0;
  nums.forEach(num => {
    if (num % 2 == 1) {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;