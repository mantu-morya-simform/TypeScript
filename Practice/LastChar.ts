type LastChar<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ""
    ? First
    : LastChar<Rest>
  : never;

type A = LastChar<"BFE">; // 'E'
type B = LastChar<"dev">; // 'v'
type C = LastChar<"">; // never
