// 26. Calculate factorial of a number
function calculateFactorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
  console.log(calculateFactorial(5));