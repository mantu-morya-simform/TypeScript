// implement Record<K, V>

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type Foo = {
  a: string;
  b: number;
  c: boolean;
};
type A = MyOmit<Foo, "a" | "b">; // {c: boolean;}
type B = MyOmit<Foo, "c">; // { a: string; b: number;}
