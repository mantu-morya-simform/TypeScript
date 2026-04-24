/**
 *  extends
 * Used to restrict or check a type
 * - Restriction: T must follow a rule
 * - Condition: works like if-else in types
 *
 * Example:
 * T extends string ? yes : no
 */

/**
 *  infer
 * Used to extract a type from another type
 * - Works only inside extends
 * - Captures a type into a variable
 *
 * Example:
 * T extends Array<infer A> → A is extracted type
 */

/**
 * Generic type that enforces `name` to be a specific string literal
 */
type Generic<T extends string> = {
  name: T;
};

/**
 * Example usage
 * Result: { name: "abc" }
 */
type A = Generic<"abc">;

/**
 * Keep only string properties
 * Non-string becomes never
 */
type onlyStringGeneric<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
};

/**
 * Example object
 */
type User = {
  name: string;
  email: string;
  age: number;
};

/**
 * Result:
 * name: string
 * email: string
 * age: never
 */
type onlyStringType = onlyStringGeneric<User>;

/**
 * Extract element type from array
 * infer A = extracted type
 */
type ArrayGeneric<T> = T extends Array<infer A> ? A : never;

/**
 * Example array
 */
let arr = ["mantu", 22, "mantu@gmail.com"];

/**
 * Result: string | number
 */
type myArrType = ArrayGeneric<typeof arr>;

/**
 * Extract return type of function
 * infer R = return type
 */
type CustomReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

/**
 * fetch → Promise<Response>
 */
type ResponseType = CustomReturnType<typeof fetch>;

/**
 * Await removes Promise
 * Result: Response
 */
type awaitedREsponseType = Awaited<CustomReturnType<typeof fetch>>;
