// 45. Sum of even numbers in the array
const myArray = [1, 2, 3, 4,5];
function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0); 
  }console.log(sumEvenNumbers(myArray));