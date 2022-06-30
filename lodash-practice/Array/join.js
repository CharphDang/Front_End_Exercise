const _ = require('lodash/fp');

const res = _.join('~')(['a', 'b', 'c']);
console.log(res) // Charph-log
// => 'a~b~c'
