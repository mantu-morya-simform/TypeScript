type GetLastWord<T extends string> = T extends `${infer first}  ${infer rest}`
  ? GetLastWord<rest>
  : T;
type L1 = GetLastWord<"The quick brown fox">; // "fox"

type GetFirstWord<T extends string> = T extends `${infer first} ${infer rest}`
  ? GetLastWord<first>
  : T;
type L2 = GetFirstWord<"The quick brown fox">; // "The"
