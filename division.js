// 4. Division of 2 numbers (handle division by zero)
function division(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero";
    }
    return a / b;
  }
  console.log(division(2,3));