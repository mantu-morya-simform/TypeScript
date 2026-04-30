type MyExtract<T, U> = T extends U ? T : never;

type Foo = "a" | "b" | "c";

type A = MyExtract<Foo, "a">; // 'a'
type B = MyExtract<Foo, "c">; // 'c'
type C = MyExtract<Foo, "c" | "d">; // 'c'
type D = MyExtract<Foo, "a" | "b" | "c">; // 'a' | 'b' | 'c'
