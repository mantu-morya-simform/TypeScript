/**
 * Array to store numeric scores.
 */
const score: Array<number> = [];

/**
 * Array to store string names.
 */
const names: Array<string> = [];

/**
 * Identity function that accepts and returns boolean or number.
 *
 * @param {boolean | number} val - The value to return.
 * @returns {boolean | number} The same value.
 */
function identityOne(val: boolean | number): boolean | number {
  return val;
}

/**
 * Identity function using any type.
 *
 * @param {any} val - The value to return.
 * @returns {any} The same value.
 */
function identityTwo(val: any): any {
  return val;
}

/**
 * Generic identity function that preserves type.
 *
 * @template Type - The type of the value.
 * @param {Type} val - The value to return.
 * @returns {Type} The same value with preserved type.
 */
function identityThree<Type>(val: Type): Type {
  return val;
}

/**
 * Key benefits and characteristics of Generics in TypeScript:
 *
 * - **Reusability**: Generics make components reusable by allowing flexible types.
 * - **Flexibility**: Functions can accept and return specific types without losing type safety.
 * - **Type Preservation**: Unlike 'any', generics lock the type when a value is passed, ensuring type consistency.
 * - **Built-in Support**: Generics are a core feature of TypeScript for defining reusable functions and data types.
 * - **Input/Output Typing**: Allows defining types for input and output values dynamically.
 */

console.log(identityThree(3)); //function identityThree<3>(val: 3): 3
console.log(identityThree("3")); // function identityThree<"3">(val: "3"): "3"
