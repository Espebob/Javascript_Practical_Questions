// 39. Check value presence
const myArray = [1, 2, 3, 4, 5];
function isPresent(arr, value) {
    return arr.includes(value);
  }console.log(isPresent(myArray,1));
  console.log(isPresent(myArray,10));