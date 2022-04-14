/*
 * @moduleName: 模块名称
 * @Author: D·Chaofeng
 * @LastModifiedBy: D·Chaofeng
 * @Date: 2019-03-07 16:00:52
 * @LastEditTime: 2019-04-13 15:54:31
 */
// // 基类-动物
// function Animal() {

// }

// Animal.prototype = {
//     init: function(name) {
//         this.name = name;
//     },
//     sayName: function() {
//         console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
//     }
// }

// // 子类，狗--继承于动物类
// function Dog() {

// }

// // 创建类的阶段，不会初始化父类的数据，因为Animal是一个空的构造函数
// Dog.prototype = new Animal();
// Dog.prototype.init = function(name, age) {
//     this.name = name;
//     this.age = age;
// };
// Dog.prototype.sayName = function() {
//     console.log(`${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`);
// }

// // 但是这样的话，初始化必须手动调用init
// var dog = new Dog();
// dog.init('大黄', '7');
// dog.sayName();

// 想办法让自动初始化
// 必须达到两个效果，构造类时不要调用init函数和实例化对象时自动调用init函数。看来我们需要在调用空的构造函数时有一个状态标示。
// 4.实现中有constructor属性的指向错误===》修改constructor指向
// 使用Object.defineProperty，还原本身constructor的特性（1、自身指向 2、枚举型）

var initCompleteStatus = false;

// 基类-动物
function Animal() {
  if (initCompleteStatus) {
    this.init.apply(this, arguments);
  }
}

Animal.prototype = {
  init: function(name) {
    this.name = name;
  },
  sayName: function() {
    console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
  }
};
// 默认都是false
Object.defineProperty(Animal.prototype, 'constructor', {
  value: Animal
});
// 子类，狗--继承于动物类
function Dog() {
  if (initCompleteStatus) {
    this.init.apply(this, arguments);
  }
}

// 创建类的阶段，不会初始化父类的数据，因为Animal是一个空的构造函数
initCompleteStatus = false;
Dog.prototype = new Animal();
// 默认都是false
// Object.defineProperty(Dog.prototype, 'constructor', {
//   value: Dog,
//   configurable: false,
//   writable: false,
//   enumerable: false
// });

// data (){
//     return {
//         aa: Object.defineProperty({
//             bb
//         })
//     }
// }

initCompleteStatus = true;
Dog.prototype.init = function(name, age) {
  this.name = name;
  this.age = age;
};
Dog.prototype.sayName = function() {
  console.log(
    `${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`
  );
};

// 引入了全局变量，继续封装，使用匿名自执行函数
var dog = new Dog('大黄', '7');
dog.sayName();
