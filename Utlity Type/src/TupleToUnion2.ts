type TupleToUnion<T extends any[]> = T extends (infer U)[] ? U : never;

type Foo = [string, number, boolean];
type Bar = TupleToUnion<Foo>; // string | number | boolean
