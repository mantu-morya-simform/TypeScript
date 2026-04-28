type TupleToUnion<T> = T extends (infer U)[] ? U : never;

type AA = TupleToUnion<["a", "b", "c"]>; // "a" | "b" | "c"
