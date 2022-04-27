// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

var maxSubArray = function (nums) {
    // Checks if nums is empty
    if (!nums) return;
    // Checks if theres only 1 item in array
    if (nums.length === 1) return nums[0];
    // Gives a starting point
    let result = nums[0];
    // Loops through array
    for (let i = 1; i < nums.length; i++) {
        // Checks if current index or current index plus previous index is the greater number
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        // Checks if result or indec ends up being greater numbers
        result = Math.max(result, nums[i]);
    }
    return result;
}