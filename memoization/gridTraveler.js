/**
 * 
 * Say that you are a traveler on a 2D grid. You begin in the 
 * top-left corner and your goal is to travel to the bottom-right
 * corner. you may only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with 
 * dimensions m * n?
 * 
 */


const gridTraveler = (m, n, memo = {}) => {
    // are the arguments in the memo
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

    return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
