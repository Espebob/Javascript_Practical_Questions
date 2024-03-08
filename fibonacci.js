// 49. Fibonacci sequence up to n numbers
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  const n = 10;
  const fibonacciSequence = [];
  
  for (let i = 0; i < n; i++) {
    fibonacciSequence.push(fibonacci(i));
  }
  console.log(fibonacciSequence); 