type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Foo = {
  a: string;
};
const a: Foo = {
  a: "BFE.dev",
};
a.a = "bigfrontend.dev";
// OK
const b: MyReadonly<Foo> = {
  a: "BFE.dev",
};
b.a = "bigfrontend.dev";
// Error
