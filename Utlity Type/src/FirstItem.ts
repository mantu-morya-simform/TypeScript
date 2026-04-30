type FirstItem<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type A = FirstItem<[string, number, boolean]>; // string
type B = FirstItem<["B", "F", "E"]>; // 'B'
