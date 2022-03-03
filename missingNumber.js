// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0
    for (let i = 0; i <= nums.length; i++) {
        sum = sum + i
        if (i < nums.length) {
            sum = sum - nums[i]
        }
    }
    return sum
};