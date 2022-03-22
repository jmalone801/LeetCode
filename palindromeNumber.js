// Given an integer x, return true if x is palindrome integer.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let newX = x.toString()
    for (let i = 0; i < Math.floor(newX.length / 2); i++) {
        if (newX[i] !== newX[newX.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(isPalindrome(1221))
console.log(isPalindrome(1234))