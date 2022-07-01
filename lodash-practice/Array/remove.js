// 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。
// predicate（断言） 会传入3个参数： (value, index, array)。

const _ = require('lodash/fp');

var array = [1, 2, 3, 4];
var evens = _.remove(function(n) {
  return n % 2 == 0;
})(array);
 
console.log(evens);
// => [1, 3]
