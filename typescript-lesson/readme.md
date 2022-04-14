# Ts 的入门编程

**本地调试运行均使用ts-node 来运行ts文件，所以请务必先安装相关的依赖**

`npm i ts-node typescript -g`

然后运行`ts-node filename.ts`



### `base` 目录下是 基础的练习，包含部分功能的小练习题

- **基础类型**

- **类型断言**，推荐使用as，因为`jsx`中只识别`as`语法

  ```typescript
  let personName: string = 'xiaoming';
  let len:number = (personName as string).length;
  ```

- **接口**， 如果存在两个相同命名的interface，内部属性定义会被合并

  - 可选属性
  - 只读属性
  - 任意属性
  - 函数属性

- **高级类型**

  - 类型别名 `type StringType = string`
  - 联合类型 `number | string`
  - 交叉类型 `number & any`

- **操作符**
  - `typeof`
  - `keyof`
  - `in`
- **泛型**
  - 泛型约束 `extends`
  - 泛型推断 `infer`

### `utils` 目录下是 `ts` 内置的功能

- **工具泛型**
  - Partial
  - Pick
  - ...

