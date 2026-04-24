type MyInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer U ? U : never;

class Foo {}
type A = MyInstanceType<typeof Foo>; // Foo
type B = MyInstanceType<() => string>; // Error
