function sumOfNumsWithinARange(nums, start, end) {
  var count = 0;
  nums.forEach(num => {
    if (num >= start && num <= end) {
      count ++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;