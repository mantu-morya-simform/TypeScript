type FirstChar<T extends string> = T extends `${infer First}${string}`
  ? First
  : never;

type A = FirstChar<"BFE">; // 'B'
type B = FirstChar<"dev">; // 'd'
type C = FirstChar<"">; // never
