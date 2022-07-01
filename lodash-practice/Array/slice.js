// 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。
// 左闭右开
const _ =require('lodash/fp');

const arr = [1,2,3,4,5,6,7]

let res = _.slice(1,5)(arr);

console.log(res) // Charph-log

res = _.slice(3)(4)(arr);

console.log(res) // Charph-log