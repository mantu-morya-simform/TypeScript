type TupleOf<N extends number, T, R extends T[] = []> = R["length"] extends N
  ? R
  : TupleOf<N, T, [...R, T]>;

type A = TupleOf<3, string>; // Expected: [string, string, string]
type B = TupleOf<5, number>; // Expected: [number, number, number, number, number]
