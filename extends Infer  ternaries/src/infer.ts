type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

type T1 = Foo<{ a: string; b: string }>;
type T2 = Foo<{ a: string; b: number }>;

// 1. Extract array element type

type ElementType<T> = T extends (infer U)[] ? U : never;

type A = ElementType<string[]>; // ?
type B = ElementType<number[]>; // ?

// 2. Extract function return type

type MyReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

type C = MyReturnType<() => string>; // ?
type D = MyReturnType<(x: number) => boolean>; // ?

// 3. Extract function parameter type

type FirstArg<T> = T extends (...args: infer U) => any ? U : never;
type E = FirstArg<(x: number, y: string) => void>; // ?

// 4. Extract property type

type PropType<T> = T extends { id: infer U; name: infer U } ? U : never;

// Test
type F = PropType<{ id: number; name: string }>; // ?

// 5. Extract first element from tuple
type First<T> = T extends [infer F, ...any[]] ? F : never;
type G = First<[1, 2, 3]>; // ?

// 6. Extract Last element from tuple
type Last<T> = T extends [...any[], infer L] ? L : never;
type H = Last<[1, 2, 3]>; // ?

// 7. Extract promise resolved type

type MyAwaited<T> = T extends Promise<infer U> ? U : T;

type I = MyAwaited<Promise<string>>; // ?
type J = MyAwaited<number>; // ?

// 8. Extract both params and return type

type FnDetails<T> = T extends (...args: infer ParamsType) => infer ReturnType
  ? { ParamsType: ParamsType; ReturnType: ReturnType }
  : never;

type K = FnDetails<(x: number, y: string) => boolean>; // ?

// 9. Flatten nested array
type Flatten<T> = T extends (infer U)[] ? U : never;
type L = Flatten<number[][][]>; // ?

// 10. Extract string before _
type BeforeUnderscore<T> = T extends `${infer A}_${string}` ? A : never;
type M = BeforeUnderscore<"user_id">; // ?

// 10. Extract string before _
type AfterUnderscore<T> = T extends `${string}_${infer B}` ? B : never;
type N = AfterUnderscore<"user_id">; // ?
