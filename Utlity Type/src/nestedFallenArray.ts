// given nested array, flatten it! (recursion + infer)
type FlattenOnce<T extends any[]> = T extends any[] ? FlattenOnce<T[any]> : T;

type F1 = FlattenOnce<[1, 2, [3, 4], [5]]>; //F1 should be [1,2,3,4,5]
