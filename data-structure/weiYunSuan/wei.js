//  多用于授权和鉴权

// 定义一些权限

const VISITOR = 1<<1

const VIP_USER = 1<<2

const OPERATOR = 1<<3

const ADMIN = 1<<4

// 授权 ｜

const user = ADMIN

// 鉴权 &

console.log(user & VISITOR) // Charph-log
console.log(user & VIP_USER) // Charph-log
console.log(user & OPERATOR) // Charph-log
console.log(user & ADMIN) // Charph-log
