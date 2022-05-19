// Given a string, return the index of the first duplicate value - if there are no duplicates return -1

function containsDupes(string) {
    // const letters = {
    //     'a': 0,
    //     'b': 1,
    //     'c': 2,
    // };
    const map = {};
    for (let i = 0; i < string.length; i++) {
        const letter = string[i]; // a
        if (letter in map) { // does a exist in letters?
            return map[letter]; // return index
        } else {
            map[letter] = i; // set the value of key c to index
        }
    }
    return -1;
}
console.log(containsDupes("bacad"))