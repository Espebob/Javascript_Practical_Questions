// 15. Reverse the order of elements in the array
function reverseArray(array) {
    // Use the built-in reverse() method to reverse the array in place
    return array.reverse();
}

// Given array
var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];

// Call the function to reverse the array
var reversedArray = reverseArray(array);

// Output the reversed array
console.log("Reversed Array:", reversedArray);