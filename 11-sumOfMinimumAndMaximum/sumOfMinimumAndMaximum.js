function sumOfMinimumAndMaximum(nums) {
  var max = nums[0];
  var min = nums[0];
  nums.forEach(num => {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  })
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;