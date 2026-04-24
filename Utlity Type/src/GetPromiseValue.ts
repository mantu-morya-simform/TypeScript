// GetPromiseValue<T>\ Input: Promise<string>\ Output: string

type GetPromiseValue<T> = T extends Promise<infer U> ? U : never;

type stringPromise = GetPromiseValue<Promise<string>>;
type numberPromise = GetPromiseValue<Promise<number>>;
