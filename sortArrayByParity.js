// Given an integer array nums, move all the even integers at the beginning of the 
// array followed by all the odd integers.

//Return any array that satisfies this condition.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let newArray = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            newArray.unshift(nums[i])
        }
        else if (nums[i] % 1 === 0) {
            newArray.push(nums[i])
        }
    }
    return newArray

};