# redux

1. 函数组件中使用hook API，可以和类组件一样，有自己的state 以及 生命周期
2. 限制
    - 必须在函数组件中使用（或者自定义hook）
    - 必须在函数的最外层声明（原因是因为fiber单链表的结构）
3. 知识点
    - useState
    - useMemo
    - useCallback
    - useEffect
    - useRef
    - useReducer
    - useLayoutEffect
    - 以use开头的自定义hook
4. useLayoutEffect和useEffect类似
    - useEffect 是在浏览器完成布局与绘制之后，在一个延迟事件中被调用（异步）
    - useLayoutEffect  是 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。（同步）
5. useMemo 和 useCallback 区别
    - useMemo是缓存其参数（函数）的执行结果值
    - useCallback 是缓存其参数（函数）本身， useCallback 一般配合 pureComponent 或者 React.Memo() 来使用。内部shouldComponent有props的浅对比，进行确认是否需要更新


5. useReducer 中 dispatch 并不支持异步

6. 解决了什么问题
    - 在组件之间复用状态逻辑难
        - 自定义hook可以轻松实现state的复用状态。
    - 复杂组件变得难以理解
        - 高阶组件
    - 难以理解的class
        - this的工作机制
        - 语法

        