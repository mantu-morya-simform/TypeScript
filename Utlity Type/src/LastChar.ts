type LastChar<T extends string> = T extends `${infer First}${infer Last}`
  ? Last extends ""
    ? First
    : LastChar<Last>
  : never;

type A = LastChar<"BFE">; // 'E'
type B = LastChar<"dev">; // 'v'
type C = LastChar<"">; // never
