// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.

// 使用 SameValueZero 创建不包含在其他给定数组中的数组值数组以进行相等比较。结果值的顺序和引用由第一个数组确定。
const { difference } = require('lodash/fp');

console.log(difference([2, 1], [2, 3])); // Charph-log
console.log(difference([2, 1, 4])([2, 3])); // Charph-log
console.log(difference([2, 1])([1])); // Charph-log
