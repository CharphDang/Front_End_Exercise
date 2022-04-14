# lesson9 实战react

1. generator 函数， `yield` 惰性求值

2. react-saga 的使用
    1. 引入 saga `import createSagaMiddleware from "redux-saga";`
    2. 创建saga中间件 `const sagaMiddleware = createSagaMiddleware();`
    3. 应用saga中间件 `applyMiddleware(sagaMiddleware)`
    4. 运行saga中间件 `sagaMiddleware.run(rootSaga);`

3. react-router 的使用
    1. array 配置路由，动态渲染Route
    2. 制作自己的路由守卫，PrivateRoute， 拦截没有权限的路由进loginPage
    3. NavMenu 封装 Link 为单独的菜单组件

4. react-redux
    1. 管理store数据
    2. 增强redux自身，熟练使用connect来提高修饰函数组件