// 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。

const _  = require('lodash/fp');
console.log(_.initial([1, 2, 3])) // Charph-log
// => [1, 2]