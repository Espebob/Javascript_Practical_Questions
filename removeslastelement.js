// 42. Removes last element of the array
const myArray = [1, 2, 3, 4, 5];
function removeLastElement(arr) {
    return arr.slice(0, -1); 
  }console.log(removeLastElement(myArray));