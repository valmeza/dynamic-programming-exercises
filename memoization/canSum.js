/**
 * 
 * Write a function `canSum(targetSum, numbers)` that takes in a
 * targetSum and an array of numbers as arguments.
 * 
 * The function should return a boolean indicating weather or not it
 * is possible to generate the targetSum using numbers from the array.
 * 
 * You may use an element of the array as many times as needed.
 * 
 * You may assume that all input elements are non negative.
 * 
 */

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let number of numbers) {
        const remainder = targetSum - number;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        } 
        // do not return false until we loop through all possibilities.
    }

    memo[targetSum] = false;
    return false;
};


console.log(canSum(7, [5, 3, 5, 7])) // true;
console.log(canSum(7, [2, 4])) // false;
console.log(canSum(7, [2, 3])) // true;
console.log(canSum(8, [2, 3, 5])) // true;
console.log(canSum(300, [7, 14])) // false;