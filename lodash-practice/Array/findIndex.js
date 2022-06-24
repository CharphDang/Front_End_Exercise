const _ = require('lodash/fp');

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'fred', active: true }
];

const isEqual = user => item => item.user === user;
// * functional programming
const index1 = _.findIndex(isEqual('fred'))(users);
console.log(index1, 'index1');
// => 1
users[index1].user = 'new name';
console.log(users); // change origin data