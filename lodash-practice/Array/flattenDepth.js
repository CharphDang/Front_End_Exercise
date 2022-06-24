const _ = require('lodash/fp');

const arr = [1, [2, [3, [4]], 5]]
const result1 = _.flattenDepth(1)(arr);
const result2 = _.flattenDepth(2)(arr);
const result3 = _.flattenDepth(3)(arr);
console.log(result1) // Charph-log
console.log(result2) // Charph-log
console.log(result3) // Charph-log