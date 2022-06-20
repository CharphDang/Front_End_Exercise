// * Creates an array with all falsey values removed.
// * The values false, null, 0, "", undefined, and NaN are falsey.

const { compact } = require('lodash/fp');

const arr = ['a', '', 'c', 0, false, null, undefined, NaN,'d'];

 // 注意： 柯里化，没个函数只传一个参数
console.log(compact(arr));
// => [ 'a', 'c', 'd' ]