// * Creates an array of elements split into groups the length of size. 
// * If array can't be split evenly, the final chunk will be the remaining elements.

// import chunk from 'lodash/fp/chunk';
// const chunk = require('lodash/fp/chunk')
const { chunk } = require('lodash/fp');

const arr = ['a', 'b', 'c', 'd'];

console.log(chunk(2, arr)); // Charph-log
console.log(chunk(2)(arr)); // 注意： 柯里化，拆成一个函数一个参数了chunk()()
// => [['a', 'b'], ['c', 'd']]
console.log(chunk(3)(arr)); // Charph-log
// => [['a', 'b', 'c'], ['d']]


const _chunk = require('lodash/chunk');
console.log(_chunk(arr, 3)); // 顺序不能改，也不能柯里化
