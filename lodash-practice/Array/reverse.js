// 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推

const _ = require('lodash/fp');

var array = [1, 2, 3];
 
const res = _.reverse(array);
 
console.log(res);
// => [3, 2, 1]
