type Split<
  T extends string,
  Identifier extends string,
> = T extends `${infer First}${Identifier}${infer Rest}`
  ? [First, ...Split<Rest, Identifier>]
  : [T];

type Check = Split<"172.186.1.2", ".">;
// ["172", "186", "1", "2"]
