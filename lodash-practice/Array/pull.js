// 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
const _ = require('lodash/fp');

var array = [1, 2, 3, 1, 2, 3];

let res = _.pull(3)(array);
console.log(array);
// => [ 1, 2, 3, 1, 2, 3 ]
console.log(res);
// => [ 1, 2, 1, 2 ]
