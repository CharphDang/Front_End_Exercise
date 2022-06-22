// This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. 
// The order and references of result values are determined by the first array. 
// The iteratee is invoked with one argument:

// 这个方法类似于.difference，不同之处在于它接受iteratee，对数组和值的每个元素调用iteratee来生成比较它们的标准。
// 结果值的顺序和引用由第一个数组决定。使用一个参数调用迭代器
const { differenceBy } = require('lodash/fp');
// * 注意顺序问题，fp模块，
// * 函数置先，数据置后
console.log(differenceBy(Math.floor)([2.1, 1.2])([2.3, 3.4])); // Charph-log
console.log(differenceBy( 'x', [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }])); // Charph-log


const _differenceBy = require('lodash/differenceBy');

// * 数据置先，函数置后
console.log(_differenceBy([2.1, 1.2],[2.3, 3.4],Math.floor)); // Charph-log
console.log(_differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')); // Charph-log