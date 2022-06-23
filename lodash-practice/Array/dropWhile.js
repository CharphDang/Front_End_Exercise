// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

const { dropWhile } = require('lodash/fp');

const objects = [1, 2, 3];

// * 注意顺序问题，fp模块，
// * 函数置先，数据置后

console.log(dropWhile(item => item === 1)(objects)); // Charph-log
// => [1, 2]

console.log(dropWhile(item => item === 2)(objects)); // Charph-log
// => [1, 2, 3]


const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(dropWhile({active: true})(users)); // Charph-log
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]

console.log(dropWhile({active: false})(users)); // Charph-log
// => [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false }
// ]

console.log(dropWhile({ 'user': 'barney' })(users)); // Charph-log
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
