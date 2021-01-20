// Two Sum	https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let k = 1; k <= nums.length; k++) {
      if (target - nums[k] === nums[i]) {
        return [k, i];
      }
    }
  }
}
