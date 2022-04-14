# React 面试相关

### 触发组件更新的方式有几种？

3**种**

1. ReactDom.render();
  - init渲染的时候， 走的是非批量更新
  - update的时候，是批量异步更新
2. setState();
3. forceUpdate();



**Update 过程**

```
1. const update = createUpdate(); // 创建update

2. 添加参数或者更改tag
	 update.payload = 
	 update.tag = ForceUpdate (默认是setState)

3. enquequeUpdate(current, update) // 入队列

5. scheduleUpdateOnFiber(current); // 执行更新

6. scheduleUpdateOnFiber内部有一个特殊判断；ExecutionContext === NoContext 时，内部走同步更新。
	这里就是为什么当setTimeout 或者 原生事件触发后， 调用setState()，然后立刻打印state的值，发现是同步的原因。  因为setTimeout 异步真正运行setState的时候，ExecutionContext 已经重置为0，同步更新。 而原生事件，触发，是压根没在react认识的Context中， ExecutionContext依然是0
```

### diff 算法

1. react 比较是深度优先遍历， 先比较根节点A，如果可以复用，再去比较它的childB，如果能复用，继续比较B的childC。
2. 只在同级比较，跨层级的不考虑复用，直接删除新增
3. 比较的时候，只有key和type都相同的情况下，才视为可复用。