# React

### 虚拟DOM





#### 什么是Virtual DOM？

Virtual DOM： 用来一组JS对象来描述真实的DOM节点，并且我们希望这组js对象能和真实的DOM节点达到同步。



#### 为什么要使用Virtual DOM?

真实DOM节点操作很慢，轻微的操作都可能导致整个页面重新排版，非常耗性能。

相对于DOM对象，js对象处理起来更快，而且更简单。通过diff算法对比新旧vdom之间的差异，可以批量的、最小化的执行真实DOM操作，从而提高性能。



#### 在哪里使用了？

React中用jsx语法描述视图，~~在`react 17.0` 之前，babel处理将jsx处理转换为React.createElement(...)形式，~~ 该函数将生成vdom来描述真实DOM。将来如果状态变化，vdom将作出相应变化，再通过diff算法对比新老vdom区别，从而作出最终的真实DOM操作。



**! 注意：** reactDom.render 和 Component 中的render方法没关系，只是名字雷同而已。



### React 17 vs React 16 vs pre

- 16.8.0 之前，
    - 函数组件无状态

- 16.8.0 
    - 新特性，hook API

- 17.0.0
    - jsx的babel转义更新，不依赖React.createElement()
    - react事件是合成事件，委托到container上, 不再是document了







#### jsx 的区别

React17 以前，如果要使用jsx，就必须引入`import React from 'react'`，因为jsx被babel编译后生成的就是React.createElement(...)形式,它依赖于React。

React17 之后，jsx的编译被剥离出去，不再依赖React变量了。而是自动从React的package中引入新的入口函数并调用。另外此次升级并不会改变jsx语法，旧的jsx转换也将继续工作。





### React vs Vue diff

React 中`diff` 使用的是单链表

Vue 中 `diff` 使用的是数组