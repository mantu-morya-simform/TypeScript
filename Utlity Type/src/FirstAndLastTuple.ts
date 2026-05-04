type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

type A = First<[1, 2, 3]>; // Res: 1

type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;

type D = Last<["JSGenie", "is", "awesome"]>; // Res: "awesome"
