// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

const { drop } = require('lodash/fp');

const objects = [1,2,3];

// * 注意顺序问题，fp模块，
// * 函数置先，数据置后

console.log(drop(0)(objects)); // Charph-log
// => [1, 2, 3]
console.log(drop(1)(objects)); // Charph-log
// => [2, 3]
console.log(drop(2)(objects)); // Charph-log
// => [3]
console.log(objects, 'objects') // Charph-log
// no change
