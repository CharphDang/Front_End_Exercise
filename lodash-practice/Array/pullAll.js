// 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
const _ = require('lodash/fp');

var array = [1, 2, 3, 1, 2, 3];

let res = _.pullAll([2,3])(array);
console.log(array);
// => [ 1, 2, 3, 1, 2, 3 ]
console.log(res);
// => [ 1, 1 ]
