// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

const { dropRight } = require('lodash/fp');

const objects = [1, 2, 3];

// * 注意顺序问题，fp模块，
// * 函数置先，数据置后

console.log(dropRight(0)(objects)); // Charph-log
// => [1, 2, 3]

console.log(dropRight(1)(objects)); // Charph-log
// => [1, 2]

console.log(dropRight(2)(objects)); // Charph-log
// => [1]

console.log(dropRight(3)(objects)); // Charph-log
// => []

console.log(dropRight(5)(objects)); // Charph-log
// => []
