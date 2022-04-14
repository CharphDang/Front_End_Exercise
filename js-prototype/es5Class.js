/*
 * @moduleName: Simple JavaScript Inheritance 
 * @Author: D.chaofeng
 * @Date:   2019-03-04 11:51:04
 * @Last Modified by:   D.chaofeng
 * @Last Modified time: 2019-03-04 17:44:34
 */

var Class = require('./class.js');
console.log(Class);
// 基类-动物
var Animal = Class.extend({
    // init是构造函数，起到contructor的作用
    init: function(name) {
        this.name = name;
    },
    sayName: function() {
        console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
    }
});

var animal = new Animal('小动物');
animal.sayName();

// 子类，狗--继承于动物类
var Dog = Animal.extend({
    // init是构造函数
    init: function(name, age) {
        //  在构造函数中调用父类的构造函数
        this._super(name);
        this.age = age;
    },
    sayName: function() {
        // 调用父类方法
        this._super();
        // 写子类自己的方法
        console.log(`${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`);
    }
});

var dog = new Dog('大黄', '7');
dog.sayName();