// 43. Sorting array in ascending order
const myArray = [1, 2, 3, 4, 510, 2,9,8];
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b); // Ascending sort
  }console.log(sortNumbers(myArray));