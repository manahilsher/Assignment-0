class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, startIdx = 0, endIdx) {
    if (endIdx == undefined) endIdx = nums.length - 1;
    if (nums.length == 0 || endIdx < startIdx) return false;
    var middle = Math.floor((startIdx + endIdx) / 2);
    if (nums[middle] == target) return true;
    if (target < nums[middle]) {
      return this.binarySearch(nums, target, startIdx, middle - 1);
    } else if (target > nums[middle]) {
      return this.binarySearch(nums, target, middle + 1, endIdx);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;