// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }

};