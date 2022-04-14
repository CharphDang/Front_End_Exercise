/*
 * @moduleName: 在创建Dog构造函数和原型时，就对Animal进行了实例化，这是不合适的。
 * @Author: D.chaofeng
 * @Date:   2019-03-05 20:09:47
 * @Last Modified by:   D.chaofeng
 * @Last Modified time: 2019-03-05 21:10:44
 */

// // 基类-动物
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sayName = function() {
//     console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
// }
// // 子类，狗--继承于动物类
// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // 将Dog的原型指向Animal的一个实例
// Dog.prototype = new Animal();
// // 因为Animal的实例可以调用Animal原型中的方法, 所以Dog的实例也可以调用Animal原型中的所有属性。
// Dog.prototype.sayName = function() {
//     console.log(`${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`);
// }
// var dog = new Dog('大黄', '7');
// dog.sayName();

// 解决第一个缺点
// 1.在创建Dog构造函数和原型时，就对Animal进行了实例化，这是不合适的。但另一方面，我们又必须依赖于这种机制来实现继承。 
// 解决办法：不在构造函数中初始化数据，而是提供一个原型方法（比如init）来初始化数据。
// 基类-动物
function Animal() {

}

Animal.prototype = {
    init: function(name) {
        this.name = name;
    },
    sayName: function() {
        console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
    }
}

// 子类，狗--继承于动物类
function Dog() {

}

// 创建类的阶段，不会初始化父类的数据，因为Animal是一个空的构造函数
Dog.prototype = new Animal();
Dog.prototype.init = function(name, age) {
    this.name = name;
    this.age = age;
};
Dog.prototype.sayName = function() {
    console.log(`${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`);
}

// 但是这样的话，初始化必须手动调用init
var dog = new Dog();
dog.init('大黄', '7');
dog.sayName();


// 想办法让自动初始化