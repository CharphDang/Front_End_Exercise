// 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。

const _ = require('lodash/fp');

const arr = [
  ['fred', 30],
  ['barney', 40]
];
console.log(_.fromPairs(arr)); // Charph-log
console.log(_.fromPairs(arr)); // Charph-log
// => { 'fred': 30, 'barney': 40 }
