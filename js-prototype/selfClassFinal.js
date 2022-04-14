/*
 * @moduleName:
 * @Author: D.chaofeng
 * @Date:   2019-03-05 20:09:47
 * @Last Modified by:   D.chaofeng
 * @Last Modified time: 2019-03-05 20:11:53
 */

// 函数中的this是在运行时决定的，而不是函数定义时
// prototype：每个【函数】都有一个默认的prototype属性。
// 向Array的原型中添加扩展方法后，当使用for-in循环数组时，这个扩展方法也会被循环出来。
// constructor始终指向创建当前对象的构造函数
var Class = (function() {
  var initCompleteFlag = false;
  function ParentClass() {} // 最初父类是一个空函数
  ParentClass.extend = function(props) {
    // var _super = ParentClass.prototype; // 保存父级的原型,失败，因为这样写，永远是function ParentClass() {}自己声明的父类的原型
    var _super = this.prototype; // 保存父级的原型，成功，使用this来，会挂钩到当前类的原型上
    function ChildClass() {
      // 当类的初始化完成，才可以调用init
      if (initCompleteFlag && this.init) {
        this.init.apply(this, arguments);
      }
    }
    initCompleteFlag = false;
    ChildClass.prototype = new ParentClass(); // 继承父类
    initCompleteFlag = true;
    // 重定向constructor
    Object.defineProperty(ChildClass.prototype, "constructor", {
      value: ChildClass
    });

    for (var name in props) {
      // 基本的满足了，需要满足访问父级方法
      // ChildClass.prototype[name] = props[name];
      if (
        typeof props[name] === "function" &&
        typeof _super[name] === "function" &&
        /\b_super\b/.test(props[name])
      ) {
        // 这里是方法内部如果有访问_super，认为子类在访问父级方法
        ChildClass.prototype[name] = (function(name, fn) {
          return function() {
            var temp = this._super;
            this._super = _super[name];
            // 方法可能有返回值，保存返回值，后面返回去
            var result = fn.apply(this, arguments);
            // 恢复this._super的指向
            this._super = temp;
            return result;
          };
        })(name, props[name]);
      } else {
        ChildClass.prototype[name] = props[name];
      }
    }
    ChildClass.extend = arguments.callee; // 每个子类都有一个extent方法。
    return ChildClass;
  };
  return ParentClass;
})();
