// 它是从右到左遍历array的元素。
const _ = require('lodash/fp');

// Search from the `fromIndex`.
let res = _.lastIndexOfFrom(7,2)([1, 2, 4, 7]);
console.log(res) // Charph-log
// => -1

res = _.lastIndexOfFrom(7,4)([1, 2, 4, 7]);
console.log(res) // Charph-log
// => -3