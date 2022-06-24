const _ = require('lodash/fp');

const arr = [1, [2, [3, [4]], 5]]
const result = _.flatten(arr);
console.log(result) // Charph-log