// 41. First n elements of the array
const myArray = [1, 2, 3, 4, 5];
function getFirstNElements(arr, n) {
    return arr.slice(0, n); 
  }console.log(getFirstNElements(myArray,3));