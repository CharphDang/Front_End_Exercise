// * Creates a new array concatenating array with any additional arrays and/or values.

const { concat } = require('lodash/fp');

const arr = ['a', 'c', 'd'];

 // 注意： 柯里化，没个函数只传一个参数
console.log(concat(arr)([6,7]));
// => [ 'a', 'c', 'd', 6, 7 ]

console.log(concat(arr, [6,7,[8]]));
// => [ 'a', 'c', 'd', 6, 7, [ 8 ] ]

const  _concat  = require('lodash/concat');
console.log(_concat(arr, 8,[6,7]));
