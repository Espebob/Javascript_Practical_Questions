// 44. Checks if all element in the array are positive
const myArray = [1, 2, 3, 4, 5,-1];
function isAllPositive(arr) {
    return arr.every(num => num > 0); 
  }console.log(isAllPositive(myArray));