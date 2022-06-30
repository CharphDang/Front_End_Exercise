// 这个方法类似于_.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。
const _ = require('lodash/fp');

var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
const res = _.pullAllWith(_.isEqual)([{ 'x': 3, 'y': 4 }])(array);
console.log(array);
console.log(res) // Charph-log
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
