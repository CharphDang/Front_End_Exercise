// 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
const _ = require('lodash/fp');

console.log(_.intersection([2,1],[4,2],[1,2])) // Charph-log