function fibonacci(num) {
// your code here
	if (num <= 1) {
    return num;
  }

  const fib = new Array(num + 1);
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[num];
}

module.exports = fibonacci;
