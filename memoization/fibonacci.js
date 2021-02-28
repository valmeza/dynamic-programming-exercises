/** 
 * 
 * Write a function `fib(n)` that takes in a number as an argument
 * The function should return the n-th number of the Fibonacci sequence.
 * The 1st and 2nd number of the sequence is 1.
 * To generate the next number of the sequence, we sum the previous two.
 * ----n: 1, 2, 3, 4, 5, 6, 7
 * fib(n):1, 1, 2, 3, 5, 8, 13
 * 
 * const fib = (n) => {
 *  if (n <= 2) return 1;
 *  return fib(n - 1) + fib(n - 2);
 * };
 * 
 * The above is correct but when you ask for the 50th number its slow.
 * 
 * memoization
 * js object, keys will be arg to function, value will then be the return value.
 * 
*/

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));