// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const romanNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let sum = 0
    let newS = s.split("")

    for (var i = newS.length - 1; i > -1; i--) {
        if (romanNum[newS[i]] > romanNum[newS[i - 1]]) {
            sum += romanNum[newS[i]] - romanNum[newS[i - 1]]
            i--
        } else {
            sum += romanNum[newS[i]]
        }
    }
    return sum
};
// console.log(romanToInt("XI"))