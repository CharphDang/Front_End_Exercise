// 使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
const _ = require('lodash/fp');
const __ = require('lodash');

const arr = [1, 2, 1, 2];
// Search from the `fromIndex`.
console.log(_.indexOfFrom(2)(2)(arr)); // Charph-log ;
// => 3

console.log(__.indexOf(arr, 2, 2)); // Charph-log ;
// => 3
