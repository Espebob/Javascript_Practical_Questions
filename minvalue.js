// 7. Smallest number in an array
const array =[1,2,3,4,5,6,7,8,9,10];
function findMin(arr) {
    let min = arr[0];
    for (const element of arr) {
      if (element < min) {
        min = element;
      }
    }
    return min;
  }
  console.log(findMin(array));   

  //or simply do this:
  //let array = [1,2,3,4,5,6,7,8,9,10];
//let min = Math.min(...array);
//console.log(min);