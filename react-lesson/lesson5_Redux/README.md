# redux

1. 实现自己的redux， 包含 {createStore, applyMiddleware, combineReducers}

2. 知识点
    - 闭包原理，将变量封存在函数的上下文当中。 createStore, applyMiddleware都用到的此原理。
    - 只要用订阅函数，必然提供返回值（取消订阅的函数）
    - applyMiddleware 中利用到compose函数， currying函数的概念
    - 函数式编程
        1. 组合函数 compose 实现原理
            ```js
                function compose(...funcs) {
                    if (funcs.length === 0) {
                        return arg => arg;
                    }
                    if (funcs.length === 1) {
                        return funcs[0];
                    }
                    return funcs.reduce((a, b) => args => a(b(args)));
                }
                function f1(str) {
                    str = str + ' f1增强';
                    return next => {
                        console.log('f1f1f1');
                        return action => {
                            console.log('f1', next);
                            console.log('f1 action', action);
                            next(action);
                        };
                    };
                }
                function f2(str) {
                    str = str + ' f2增强';
                    return next => {
                        console.log('f2f2f2');
                        return action => {
                            console.log('f2', next);
                            console.log('f2 action', action);

                            next(action);
                        };
                    };
                }
                function f3(str) {
                    str = str + ' f3增强';
                    return next => {
                        console.log('f3f3f3');
                        return action => {
                            console.log('f3', next);
                            console.log('f3 action', action);

                            next(action);
                        };
                    };
                }

                const newF = [f1, f2, f3].map(f => f(8));
                const dispatch = function (action) {
                    console.log('dispatch', action);
                };

                const newDispatch = compose(...newF)(dispatch);
                console.log(newDispatch, '返回f1f2f3加强过后的dispatch');
                console.log('-------开始触发加强版的dispatch-----------');
                newDispatch(111);
                console.log('-------加强版的dispatch执行完毕-----------');
                // next 就是通过闭包留存下来的变量，每个中间件中的next都是下一个中间件里面定义的函数
            ```
        2. 柯里化 Currying 实现原理
            ```js
                // 模拟柯里化函数
                function curry (fun) {
                    //取名字是为了下面实参小于形参的时候进行调用
                    // args参数是数组的形式，需要用...展开
                    return function curryFn(...args) {
                        //判断实参和形参的个数是否相同
                        if(args.length < fun.length){
                            return function () {
                                // 在这里需要等待剩余参数的传递，如果剩余函数的参数个数加上之前的参数个数等于形参，那么就返回fun
                                // 第一部分参数在args里面，第二部分参数在arguments里面，要将两个合并并且展开
                                return curryfn(...args.concat(Arrary.from(arguments)))
                            }
                        }
                        // 实参的个数大于等于形参的个数
                        return fun(...args)
                    }
                }

                // 参数是一个的为一元函数，两个的是二元函数
                // 柯里化可以把一个多元函数转化成一元函数
                function getSum (a, b, c) {
                    return a + b + c
                }
                // 定义一个柯里化函数
                const curried = curry(getSum)

                // 如果输入了全部的参数，则立即返回结果
                console.log(curried(1, 2, 3)) // 6

                //如果传入了部分的参数，此时它会返回当前函数，并且等待接收getSum中的剩余参数
                console.log(curried(1)(2, 3)) // 6
                console.log(curried(1, 2)(3)) // 6
            ```
            
