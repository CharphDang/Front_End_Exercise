// TypeScript 中有一个 ReadOnly<T> 工具泛型，它的功能是将 T 的所有属性变成只读属性
;(() => {
  interface Person {
    name: string
    age: number
  }

  const jack: Readonly<Person> = {
    name: 'jack Ma',
    age: 17
  }
  jack.name = 'jack'
  // error, name 属性为只读
  type MyReadOnly<T, K extends keyof T> = {
    readonly [P in K]: T[P]
  } &
    T

  // * 泛型设置默认值
  type MyP<T extends keyof Person = keyof Person> = MyReadOnly<Person, T>
  // * 不传值，全部readonly
  const my1: MyP = {
    name: 'jack Ma',
    age: 17
  }
  my1.name = '1'
  my1.age = 1
  // * 传值， 传入的为readonly
  const my2: MyP<'age'> = {
    name: 'jack Ma',
    age: 17
  }
  my2.name = '1'
  my2.age = 1
})()

// 现在我们需要把它改造一下，实现一个 MyReadOnly<T, K> ，K 应为 T 的属性集，
// 若指定 K ，则将 T 中对应的属性修改成只读属性，若不指定 K ，则将所有属性变为只读属性。

// * 小结：

// * 1. 第一步，我们先遍历一遍类型 K ，并将类型 T 中存在的 K 属性设置为 readonly

// type MyReadOnly<T, K> = {
//   readonly [P in K]: T[P]
// }

// * 2. 第二步，将 K 类型约束成 T 的子集

// type MyReadOnly<T, K extends keyof T> = {
//   readonly [P in K]: T[P]
// }

// * 3. 第三步只需将剩余的属性拼接进去即可，这里我们可以使用 交叉类型&，相同属性名的情况下，若其中一个类型属性设置为只读，交叉最终返回的这个属性类型也会是只读。

// type MyReadOnly<T, K extends keyof T> = {
//   readonly [P in K]: T[P]
// } & T;

// * 4. 最后一步，还需要满足当 K 为空的时候，默认将 T 类型下所有属性设置为只读，我们可以给 K 传一个默认值 keyof T

// type MyReadOnly<T, K extends keyof T = keyof T> = {readonly [P in K]: T[P]} & T;
