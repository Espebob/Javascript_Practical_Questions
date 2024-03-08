// 6. Greatest value in an array
const array =[1,2,3,4,5,6,7,8,9,10];
function findMax(arr) {
    let max = arr[0];
    for (const element of arr) {
      if (element > max) {
        max = element;
      }
    }
    return max;
  }
  console.log(findMax(array));   

  //or simply do this:
  //let array = [1,2,3,4,5,6,7,8,9,10];
//let max = Math.max(...array);
//console.log(max);