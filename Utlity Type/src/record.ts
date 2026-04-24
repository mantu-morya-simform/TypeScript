// implement Record<K, V>

type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

type Key = "a" | "b" | "c";
const a: Record<Key, string> = {
  a: "BFE.dev",
  b: "BFE.dev",
  c: "BFE.dev",
};
/*
a.a = "bigfrontend.dev"; // OK
a.b = 123; // Error
a.d = "BFE.dev"; // Error
*/
type Foo = MyRecord<{ a: string }, string>; // Error
