/**
 * 1. Extract second element from tuple
 * Given a tuple, return its second element.
 */
type Second<T> = T extends [infer F, infer S, ...any[]] ? S : never;
type Q1 = Second<[1, 2, 3]>; // expected: 2

/**
 * 2. Reverse a tuple
 * Reverse the order of elements in a tuple.
 */
type Reverse<T> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];
type Q2 = Reverse<[1, 2, 3]>; // expected: [3, 2, 1]

/**
 * 3. Check if type is array
 * Return true if T is an array type, otherwise false.
 */
type IsArray<T> = T extends any[] ? true : false;
type Q3 = IsArray<string[]>; // true
type Q4 = IsArray<number>; // false

/**
 * 4. Extract last character of string
 * Given a string literal type, return its last character.
 */
type LastChar<T> = T extends `${infer First}${infer Last}`
  ? Last extends ""
    ? First
    : LastChar<Last>
  : T;
type Q5 = LastChar<"hello">; // "o"

/**
 * 5. Remove first character from string
 * Remove the first character from a string literal.
 */
type RemoveFirst<T> = T extends `${infer First}${infer Last}` ? Last : never;
type Q6 = RemoveFirst<"hello">; // "ello"

/**
 * 6. Check if string starts with prefix
 * Return true if T starts with prefix P.
 */
type StartsWith<T extends string, P extends string> = T extends `${P}${string}`
  ? true
  : false;

type Q7 = StartsWith<"typescript", "type">; // true

/**
 * 7. Check if string ends with suffix
 * Return true if T ends with suffix S.
 */
type EndsWith<T extends string, S extends string> = T extends `${string}${S}`
  ? true
  : false;
type Q8 = EndsWith<"typescript", "script">; // true

/**
 * 8. Replace substring
 * Replace substring From with To in string T.
 */
type Replace<
  T extends string,
  From extends string,
  To extends string,
> = T extends `${infer First} ${infer Last}` ? `${First} ${To}` : never;

type Replace2<
  T extends string,
  From extends string,
  To extends string,
> = From extends ""
  ? T
  : T extends `${infer F}${From}${infer L}`
    ? `${F}${To}${L}`
    : T;
type Q9 = Replace<"hello world", "world", "ts">; // "hello ts"
type Q9A = Replace2<"hello world", "world", "ts">; // "hello ts"

/**
 * 9. Extract function last argument
 * Given a function type, extract its last parameter type.
 */
type LastArg<T> = T extends (...args: infer U) => any
  ? U extends [...infer Rest, infer Last]
    ? Last
    : never
  : never;
type Q10 = LastArg<(a: number, b: string) => void>; // string

/**
 * 10. Convert union to intersection
 * Transform a union type into an intersection type.
 */
type UnionToIntersection<T> = any;
type Q11 = UnionToIntersection<{ a: 1 } | { b: 2 }>; // {a:1} & {b:2}

/**
 * 11. Make all properties readonly (custom)
 * Convert all properties of T to readonly.
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
type Q12 = MyReadonly<{ a: number; b: string }>;

/**
 * 12. Make specific keys optional
 * Make only keys K optional in type T.
 */
type PartialByKeys<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};

type Q13 = PartialByKeys<{ a: number; b: string }, "a">;

/**
 * 13. Remove keys from object
 * Remove keys K from object type T.
 */
type OmitKeys<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
type Q14 = OmitKeys<{ a: 1; b: 2; c: 3 }, "b">;

/**
 * 14. Extract keys of type string values
 * Return keys from T whose values are of type string.
 */
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type Q15 = StringKeys<{ a: string; b: number; c: string }>; // "a" | "c"

/**
 * 15. Deep flatten array
 * Recursively flatten nested array types into a single type.
 */
type DeepFlatten<T> = any;
type Q16 = DeepFlatten<number[][][]>; // number

/**
 * 16. Append item to tuple
 * Add a new element V at the end of tuple T.
 */
type Push<T, V> = any;
type Q17 = Push<[1, 2], 3>; // [1,2,3]

/**
 * 17. Prepend item to tuple
 * Add a new element V at the beginning of tuple T.
 */
type Unshift<T, V> = any;
type Q18 = Unshift<[2, 3], 1>; // [1,2,3]

/**
 * 18. Zip two tuples
 * Combine two tuples into a tuple of pairs.
 */
type Zip<T, U> = any;
type Q19 = Zip<[1, 2], ["a", "b"]>; // [[1,"a"], [2,"b"]]

/**
 * 19. Extract numeric part from string
 * Extract numeric substring from a string literal.
 */
type ExtractNumber<T> = any;
type Q20 = ExtractNumber<"id_123">; // "123"

/**
 * 20. Build API route with query params
 * Append query string Q to route T.
 */
type WithQuery<T, Q> = any;
type Q21 = WithQuery<"/users", "id=1">; // "/users?id=1"
