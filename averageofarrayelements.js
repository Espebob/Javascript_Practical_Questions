// 8. Average of numbers in an array
const array =[1,2,3,4,5,6,7,8,9,10];
function calculateAverage(arr)
{
    let sum = 0;
    for (const element of arr) 
    {
      sum += element;
    }
    
    return sum / arr.length;
  }
  console.log(calculateAverage(array));