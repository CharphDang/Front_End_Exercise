// 实现一个 Includes<T, K> 工具泛型，T 为一个数组类型，判断 K 是否存在于 T 中，
// 若存在返回 true，否则返回 false
;(() => {
  type Includes<T extends any[], K> = K extends T[number] ? true : false
  type T1 = Includes<['name', 'age', 'sex'], 'name'>
  // T1 的期望为 true

  type T2 = Includes<['name', 'age'], 'sex'>
  // T2 的期望为 false
})()

// 这里由于 T extends any[] ，T 被约束成一个元素为 any 类型的数组，在 typescript 中，数组的类型是这样被声明的：

// interface Array<T> {
//   [n: number]: T;
//   length: number;
//   toString(): string;
//   toLocaleString(): string;
//   pop(): T | undefined;
//   push(...items: T[]): number;
//   concat(...items: ConcatArray<T>[]): T[];
//   ……
// }

// * 可以看到 [n: number]: T 这里约定了数组的下标类型为 number，所以我们可以使用 T[number] 来表示数组 T 的元素。
