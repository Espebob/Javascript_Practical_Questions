// 40. Squares each element in the array
const myArray = [1, 2, 3, 4, 5];
function squareElements(arr) {
    return arr.map(num => num * num); 
  }
  console.log(squareElements(myArray));