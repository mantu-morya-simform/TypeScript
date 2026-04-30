type FirstChar<T extends string> = T extends `${infer FirstChar}${string}`
  ? FirstChar
  : never;

type A = FirstChar<"BFE">; // 'B'
type B = FirstChar<"dev">; // 'd'
type C = FirstChar<"">; // never
