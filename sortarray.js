// 16. Sort and modify an array
// Given array
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

// a. Function to sort array in ascending order
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// b. Modify array to display last 3 and first 3 numbers in front of the sorted array
function modifyArray(arr) {
    var sortedArray = sortAscending(arr);
    var firstThree = sortedArray.slice(0, 3);
    var lastThree = sortedArray.slice(-3);
    return lastThree.concat(sortedArray, firstThree);
}

// c. Display first 3 numbers from the sorted array
function displayFirstThree(arr) {
    var sortedArray = sortAscending(arr);
    return sortedArray.slice(0, 3);
}

// Testing
console.log("Original Array:", someNumbers);
console.log("Sorted Array:", sortAscending(someNumbers));
console.log("Modified Array:", modifyArray(someNumbers));
console.log("First 3 numbers from Sorted Array:", displayFirstThree(someNumbers));