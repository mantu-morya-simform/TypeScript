// implement Record<K, V>

type MyPick<T, V extends keyof T> = {
  [P in V]: T[P];
};

type Foo = {
  a: string;
  b: number;
  c: boolean;
};
type A = MyPick<Foo, "a" | "b">; // {a: string, b: number}
type B = MyPick<Foo, "c">; // {c: boolean}
type C = MyPick<Foo, "d">; // Error
