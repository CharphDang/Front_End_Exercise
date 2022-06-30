// 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。

const _ = require('lodash/fp');
var array = ['a', 'b', 'c', 'd'];


let res=_.nth(1)(array);
console.log(res) // Charph-log
// => 'b'
 
res=_.nth(-2)(array);
console.log(res) // Charph-log
// => 'c';
