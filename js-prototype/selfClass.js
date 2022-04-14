/*
 * @moduleName: 个人版实现继承
 * @Author: D.chaofeng
 * @Date:   2019-03-04 17:45:54
 * @Last Modified by:   D.chaofeng
 * @Last Modified time: 2019-03-05 20:11:57
 */

// 基类-动物
function Animal(name) {
  this.name = name;
}

// Animal.a = 'a';

Animal.prototype.sayName = function() {
  console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
};
// 子类，狗--继承于动物类
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// 将Dog的原型指向Animal的一个实例
Dog.prototype = new Animal();
// 因为Animal的实例可以调用Animal原型中的方法, 所以Dog的实例也可以调用Animal原型中的所有属性。
Dog.prototype.sayName = function(argument) {
  console.log(
    `${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`
  );
};
var dog = new Dog('大黄', '7');
dog.sayName();

// 上面的缺点
// 1.在创建Dog构造函数和原型时，就对Animal进行了实例化，这是不合适的。
// 2.Dog的构造函数没法调用父类Animal的构造函数，导致在Dog构造函数中对name属性的重复赋值。
// 3.Dog中的函数会覆盖Animal中的同名函数，没有重载的机制（和上一条是一个类型的问题）。
// 4.实现中有constructor属性的指向错误。
// 5.过于具象化，单一职责，不够通用。
