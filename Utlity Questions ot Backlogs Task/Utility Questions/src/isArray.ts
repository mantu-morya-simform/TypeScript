/**
 * Checks whether a value is an array.
 * @param val - Value to check
 * @returns True if the value is an array, otherwise false
 */
function isArray(val: any): boolean {
  return Array.isArray(val);
}

console.log("isArray------------------------------------");

console.log(isArray([])); // true
console.log(isArray([1, 2])); // true
console.log(isArray({})); // false
console.log(isArray("abc")); // false

/**
 * Checks whether a type is an array.
 * @template T - Type to check
 * @returns True if T is an array, otherwise false
 */
type isArrayGen<T> = T extends any[] ? true : false;

type ArrayType1 = isArrayGen<[1, 2, 3, 4, 5]>; // true

console.log("");
