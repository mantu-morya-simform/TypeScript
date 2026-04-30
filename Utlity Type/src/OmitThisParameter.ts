function foo(this: { a: string }) {}
// foo(); // Error
const bar = foo.bind({ a: "BFE.dev" });
bar(); // OK
type Foo = (this: { a: string }) => string;

type MyOmitThisParameter<T> = T extends (this: any, ...args: infer A) => infer U
  ? (...args: A) => U
  : never;

type Bar = MyOmitThisParameter<Foo>; // () => string
