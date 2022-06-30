const _ = require('lodash/fp');

var array = [5, 10, 15, 20];
var evens = _.pullAt([1,2])(array);
 
console.log(array);
// => [5, 10, 15, 20]
 
console.log(evens);
// => [10, 20]
