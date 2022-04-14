# rc-field-form

1. antd4 中表单实现原理

2. 细节：
    - 数据存储： Class FormStore 中
    - 优势：某个input更改值时，只用重新渲染必要关联的组件，不用渲染整个form表单

3. 知识点：
    - `HOC` 高阶组件， `Form` `Field` 都属于高阶组件
    - `React.cloneElement`，用来克隆reactDom的方法，并且对其克隆副本进行扩展它的props
    - `useForm` 自定义hook
    - `React.useRef`， hook方法，函数组件或自定义hook中使用
    - `React.forwardRef` 和 `React.useImperativeHandle(ref, createHandle)`
        - 专门处理ref的转发， 针对类组件使用，两者组合使用
        - `React.forwardRef` 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中
        - `React.useImperativeHandle(ref, createHandle)` 可以让你在使用 ref 时自定义暴露给父组件的实例值