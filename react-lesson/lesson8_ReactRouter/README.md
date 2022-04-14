# lesson8 - react-router的应用和实现


## 知识点 
1. 基本使用
    > react-router中奉行一切皆组件的思想，都以组件形式存在
    - 路由器-Router、
    - 链接-Link、
    - 路由-Route、
    - 独占-Switch、
    - 重定向-Redirect

2. 404页面
    设定一个没有path的路由在路由列表最后面，表示一定匹配
    ```jsx
        {/* 添加Switch表示仅匹配一个*/}
        <Switch>
            {/* 根路由要添加exact，实现精确匹配 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPage} />
            <Route path="/search/:id" component={Search} />
            <Route render={() => <h1>404</h1>} />
        </Switch>
    ```
3. Route渲染内容的三种方式
    - children：func
        > 有时候，不管location是否匹配，你都需要渲染一些内容，这时候你可以用children。
        > 除了不管location是否匹配都会被渲染之外，其它工作方法与render完全一样。
    - render：func
        > 但是当你用render的时候，你调用的只是个函数。但是它和component一样，能访问到所有的`routeProps`。
    - component: component
        > 只在当location匹配的时候渲染。警告：不要使用内联函数的方式，详情查看注意事项！

**注意**
当你用 component 的时候，Route会用你指定的组件和React.createElement创建一个新的[React
element]。这意味着当你提供的是一个内联函数的时候，每次render都会创建一个新的组件。这会导
致不再更新已经现有组件，而是直接卸载然后再去挂载一个新的组件。因此，当用到内联函数的内联渲
染时，请使用render或者children。

### 实现要点

- `Context.Provider` 是可以嵌套的， `Context.Consumer` 使用的时候，获取的`context`为就近原则。
- `Redirect, Prompt` 内部实现，使用 `LifeCycle` 生命周期组件来渲染


