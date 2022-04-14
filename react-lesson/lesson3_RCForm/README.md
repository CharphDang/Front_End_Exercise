# rc-form

1. antd3 中表单实现原理

2. 细节：
    - 数据存储： Form state 中
    - 弊端： 某个input值发生改变的时候，整个form表单都要重新渲染，性能开销大

3. 知识点：
    - `HOC` 高阶组件， createForm 就是用来生成一个高阶组件
    - 装饰器的写法的使用： `@createForm`
    - `React.cloneElement`，用来克隆reactDom的方法，并且对其克隆副本进行扩展它的props