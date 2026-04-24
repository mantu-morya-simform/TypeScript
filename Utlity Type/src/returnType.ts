type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

type Foo = () => { a: string };
type A = MyReturnType<Foo>; // {a: string}
