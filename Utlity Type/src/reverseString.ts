// given a string,reverse it and return it as type (recursion + infer)
type ReverseString<T extends string> = T extends `${infer first}${infer rest}`
  ? `${ReverseString<rest>}${first}`
  : T;
type R1 = ReverseString<"hello">; // R1 should be 'olleh'
