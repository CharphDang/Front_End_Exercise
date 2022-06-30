// 这个方法类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。
// 结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。

const _ = require('lodash/fp');

const a = _.intersectionBy( Math.floor)([2.1, 1.2], [4.3, 2.2]);
console.log(a) // Charph-log
// => [2.1]
 
// The `_.property` iteratee shorthand.
const b =_.intersectionBy('x')([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]);
console.log(b) // Charph-log
// => [{ 'x': 1 }]
