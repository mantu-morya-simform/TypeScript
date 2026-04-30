type MyExtract<T, U> = T extends U ? T : never;

type Foo = "a" | "b" | "c";

type A = MyExtract<Foo, "a">; // 'b' | 'c'
type B = MyExtract<Foo, "c">; // 'a' | 'b
type C = MyExtract<Foo, "c" | "d">; // 'a' | 'b'
type D = MyExtract<Foo, "a" | "b" | "c">; // never
