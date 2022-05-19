// Given 2 sorted arrays of positive integers, return 1 sorted array containing the integers in both arrays

function sortArray(arr1, arr2) {
    let newArr = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else {
            newArr.push(arr2[j])
            j++
        }
    }
    if(i >= arr1.length){
        newArr.push(...arr1.slice(j))
    } else if(j >= arr2.length) {
        newArr.push(...arr2.slice(i))
    }
    return newArr
}