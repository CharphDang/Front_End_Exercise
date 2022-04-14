/*
 * @moduleName: es6中class的使用
 * @Author: D.chaofeng
 * @Date:   2019-03-04 09:32:20
 * @Last Modified by:   D.chaofeng
 * @Last Modified time: 2019-03-04 17:02:52
 */
// 基类-动物
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
  }
  sayHello() {
    console.log('aaa');
  }
}

let animal = new Animal('小动物');
animal.sayName();

// 子类，狗--继承于动物类
class Dog extends Animal {
  static a = 'a';
  //   constructor(name, age) {
  //     // console.dir(super); // Uncaught SyntaxError: 'super' keyword unexpected here
  //     super(name); // 创建了子类自身的this
  //     this.age = age;
  //   }
  //   age = 'age';
  sayName() {
    // console.dir(super.constructor);
    // 调用父类方法
    this.sayHello();
    super.sayName();
    // 写子类自己的方法
    console.log(
      `${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法11111`
    );
  }
}

let dog = new Dog('大黄', '7');
dog.sayName();
