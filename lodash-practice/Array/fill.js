// 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。


const { fill } = require('lodash/fp');

// * fp方式不会更改原数组
const arr =[4, 6, 8, 10];
console.log(fill(1, 3, '*')(arr)); // Charph-log
// => [ 4, '*', '*', 10 ]
console.log(arr, 'arr'); // Charph-log
// => [ 4, 6, 8, 10 ] arr


// ! 普通方式会更改原数组
const _fill = require('lodash/fill');
const arr2 = [4, 6, 8, 10]
console.log(_fill(arr2, '*', 1, 3)) // Charph-log;
// => [ 4, '*', '*', 10 ]
console.log(arr2,'arr2') // Charph-log;
// => [ 4, '*', '*', 10 ] arr2