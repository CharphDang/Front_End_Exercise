/*
 * @moduleName: 模块名称
 * @Author: D·Chaofeng
 * @LastModifiedBy: D·Chaofeng
 * @Date: 2019-03-08 11:08:54
 * @LastEditTime: 2019-03-08 11:10:19
 */
function counter() {
  var that = this;
  this.timer = setInterval(() => {
    console.log(this === that);
  }, 1000);
}
var b = new counter();
console.log(b.timer);
