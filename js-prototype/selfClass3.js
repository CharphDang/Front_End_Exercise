/*
 * @moduleName: 模块名称
 * @Author: D·Chaofeng
 * @LastModifiedBy: D·Chaofeng
 * @Date: 2019-03-07 16:51:39
 * @LastEditTime: 2019-04-13 16:17:06
 */
// var initCompleteStatus = false;

// // 基类-动物
// function Animal() {
//   if (initCompleteStatus) {
//     this.init.apply(this, arguments);
//   }
// }

// Animal.prototype = {
//   init: function(name) {
//     this.name = name;
//   },
//   sayName: function() {
//     console.log(this.name, "--------基类>>>>>>>>Animal中的方法");
//   }
// };
// // 默认都是false
// Object.defineProperty(Animal.prototype, "constructor", {
//   value: Animal
// });
// // 子类，狗--继承于动物类
// function Dog() {
//   if (initCompleteStatus) {
//     this.init.apply(this, arguments);
//   }
// }

// // 创建类的阶段，不会初始化父类的数据，因为Animal是一个空的构造函数
// initCompleteStatus = false;
// Dog.prototype = new Animal();
// // 默认都是false
// Object.defineProperty(Dog.prototype, "constructor", {
//   value: Dog
// });
// initCompleteStatus = true;
// Dog.prototype.init = function(name, age) {
//   this.name = name;
//   this.age = age;
// };
// Dog.prototype.sayName = function() {
//   console.log(
//     `${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`
//   );
// };

// // 引入了全局变量，继续封装，使用匿名自执行函数
// var dog = new Dog("大黄", "7");
// dog.sayName();

// // 引入了全局变量，继续封装，使用匿名自执行函数

var Class = (function() {
  // 标识类的初始化是否完成，如果完成，便可以调用init进行初始化构造函数
  var initCompleteStatus = false;
  // 定义正则，边界为_super完整的字符串则是真
  var reg = /\b_super\b/;

  function parentClass() {
    if (initCompleteStatus) {
      this.init.apply(this, arguments);
    }
  }

  parentClass.extend = function(props) {
    function childClass() {
      if (initCompleteStatus) {
        this.init.apply(this, arguments);
      }
    }
    initCompleteStatus = false;
    var _super = this.prototype; // 父级类的原型
    // 保存父级的所有属性为子类的原型，并重置constructor
    childClass.prototype = new parentClass();
    Object.defineProperty(childClass.prototype, 'constructor', {
      value: childClass
    });
    initCompleteStatus = true;
    // 自身属性的赋值
    for (var name in props) {
      if (typeof props[name] === 'function' && reg.test(props[name])) {
        childClass.prototype[name] = (function(name, fn) {
          return function() {
            console.dir(Object.toString.call(fn));
            var temp = this._super;
            this._super = _super[name];
            // 拿到函数返回值
            var result = fn.apply(this, arguments);
            this._super = temp;
            // 将返回值返回
            return result;
          };
        })(name, props[name]);
      } else {
        childClass.prototype[name] = props[name];
      }
    }
    childClass.extend = arguments.callee;
    return childClass;
  };
  return parentClass;
})();

var Animal = Class.extend({
  init: function(name) {
    this.name = name;
  },
  sayName: function() {
    console.log(this.name, '--------基类>>>>>>>>Animal中的方法');
  }
});

var Dog = Animal.extend({
  init: function(name, age) {
    this.name = name;
    this.age = age;
  },
  _super: function() {},
  sayName: function() {
    this._super();
    console.log(
      `${this.name}(${this.age})----------子类>>>>>>>>>>>Dog类中的方法`
    );
  }
});
// 检验功能
var dog = new Dog('大黄', '7');
dog.sayName();
