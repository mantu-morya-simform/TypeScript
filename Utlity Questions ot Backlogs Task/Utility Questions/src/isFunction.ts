/**
 * Checks whether a value is a function.
 * @param val - Value to check
 * @returns True if the value is a function, otherwise false
 */
function isFunction(val: any): boolean {
  return typeof val === "function";
}

console.log("isFunction------------------------------------");

console.log(isFunction(function () {})); // true
console.log(isFunction(() => {})); // true
console.log(isFunction(class A {})); // true
console.log(isFunction({})); // false
console.log(isFunction(null)); // false

/**
 * Checks whether a type is a function.
 * @template T - Type to check
 * @returns True if T is a function, otherwise false
 */
type isFunGen<T> = T extends (...args: any[]) => any ? true : false;

function abc(name: string) {}

/** All evaluate to true */
type FunGen1 = isFunGen<(name: string) => void>;
type FunGen2 = isFunGen<typeof abc>;
type FunGen3 = isFunGen<() => number>;
type FunGen4 = isFunGen<Function>;

console.log("");
