function pairSum(nums, target) {
  if (nums.length < 2) {
    throw new Error("length of nums array is 1 or lower");
  }
  
  var map = {};
  for (var i=0; i < nums.length; i++) {
    if((target - nums[i]) in map) {
      return true;
    }
    map[nums[i]] = target - nums[i];
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;