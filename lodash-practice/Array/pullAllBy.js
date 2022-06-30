// 这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。
// iteratee 会传入一个参数： (value)。

const _ = require('lodash/fp');

var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

const res = _.pullAllBy('x')([{ x: 1 }, { x: 3 }],array);
console.log(array);
console.log(res); // Charph-log
// => [{ 'x': 2 }]
