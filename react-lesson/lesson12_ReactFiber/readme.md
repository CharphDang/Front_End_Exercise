# Fiber

### 为什么需要fiber?

> Fiber 是 React 16 中新的协调引擎。它的主要目的是使 Virtual DOM 可以进行增量式渲染。

React的killer feature： virtual dom

1.  对于大型项目，组件树会很大，这个时候递归遍历的成本就会很高，会造成主线程被持续占用，结果就是主线程上的布局、动画等周期性任务就无法立即得到处理，造成视觉上的卡顿，影响用户体 验。
2.  任务分解的意义 解决上面的问题 
3.  增量渲染（把渲染任务拆分成块，匀到多帧）
4.  更新时能够暂停，终止，复用渲染任务 
5.  给不同类型的更新赋予**优先级** 
6.  并发方面新的基础能力  
7.  **更流畅**



### 什么是fiber?

 A Fiber is work on a Component that needs to be done or was done. There can be more than one per component. 

 **fiber是指组件上将要完成或者已经完成的任务，每个组件可以一个或者多个**。





### 实现fiber

**`window.requestIdCallback(callback, [, optioins])`**

`window.requestIdleCallback(deadline=>{})`方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主 事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先 进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout ，则有可能为了在超时前执行 函数而打乱执行顺序。

`deadline` 有两个参数：

- timeRemaining(): 当前帧还剩下多少时间
- didTimeout: 是否超时



1. render 方法是入口， 在其中预设wipRoot为传进来的container， nextUnitOfWork也是它。

2. requestIdleCallback的回调函数workLoop中，会获取nextUnitOfWork，然后执行当前单元任务，并返回下一个单元任务。

3. **执行单元任务`performUnitOfWork`：** 

   1. 先将当前节点解析为fiber节点

      ```
      1. 如果是原生节点，则需要创建stateNode
      2. 否则，协调它的children，生成fiber节点
      	- 生成自身的child（children中的第一个）
      	- 生成child中的sibling（节点的下一个兄弟节点）
      ```

      

   2. 根据解析好的fiber节点，返回下一个fiber节点

      ```js
      // * 返回下一个fiber节点 （王朝的故事，继承王位）
      let fiber = workInProgress;
      
      if (fiber.child) {
          return fiber.child;
      }
      
      while (fiber) {
          if (fiber.sibling) {
              return fiber.sibling;
          }
          fiber = fiber.return;
      }
      ```

      

4. **解析fiber节点**

   1. children是string的时候，直接返回
   2. 遍历children，并将解析为fiber节点
