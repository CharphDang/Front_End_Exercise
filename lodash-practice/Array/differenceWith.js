// This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values.
// The order and references of result values are determined by the first array.
// The comparator is invoked with two arguments: (arrVal, othVal).

const { differenceWith, isEqual } = require('lodash/fp');

const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 }
];

// * 注意顺序问题，fp模块，
// * 函数置先，数据置后
console.log(differenceWith(isEqual)(objects)([{ x: 1, y: 2 }])); // Charph-log
console.log(differenceWith(isEqual)(objects, [{ x: 1, y: 2 }])); // Charph-log

console.log(differenceWith(isEqual, objects, [{ x: 1, y: 2 }])); // Charph-log
