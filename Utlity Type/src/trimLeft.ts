// given string, trim left spaces. (recursion + infer)
type TrimLeft<T extends string> = T extends ` ${infer rest}`
  ? `${TrimLeft<rest>}`
  : T;

type TrimRight<T extends string> = T extends `${infer rest} `
  ? `${TrimRight<rest>}`
  : T;

type TrimBoth<T extends string> = TrimLeft<TrimRight<T>>;

type trimmedLeft = TrimLeft<"  Hello World  ">; // type of trimmed should be "Hello World  "
type trimmedRight = TrimRight<"  Hello World  ">; // type of trimmed should be "  Hello World"
type trimmedBothSide = TrimBoth<"  Hello World  ">; // type of trimmed should be "Hello World"
