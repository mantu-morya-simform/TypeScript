type GetPromiseValue<P> = P extends Promise<infer U> ? U : never;

type stringPromise = GetPromiseValue<Promise<string>>;
type numberPromise = GetPromiseValue<Promise<number>>;
