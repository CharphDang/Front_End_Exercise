const _ = require('lodash/fp');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
const result = _.intersectionWith( _.isEqual)(objects, others,);
console.log(result) // Charph-log
// => [{ 'x': 1, 'y': 2 }]
