import "./interfaceImplementation";

console.log("Interface Type...");
console.log("");

/**
 * Interface representing a person's name and age details.
 */
interface Name {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Example object implementing the Name interface.
 */
let fullName: Name = {
  id: 0,
  firstName: "Mantu",
  lastName: "Morya",
  age: 21,
};

console.log(fullName);

//interface merge

/**
 * Base interface for user name.
 */
interface User {
  name: string;
}

/**
 * Extended User interface with age.
 */
interface User {
  age: number;
}

/**
 * Object using the merged User interface.
 */
const u: User = {
  name: "Mantu Kumar Morya",
  age: 21,
};

console.log(u);

// or

/**
 * Interface extending both User and Name.
 */
interface C extends User, Name {}

//generics

/**
 * Wraps a single item in an array.
 *
 * @template T - The type of the item.
 * @param {T} item - The item to wrap.
 * @returns {T[]} An array containing the item.
 */
function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray("mantu"));
console.log(wrapInArray(42));
console.log(wrapInArray(false));
console.log(wrapInArray({ name: "Mantu Kumar", age: 23 }));

// or

/**
 * Creates a pair tuple from two values.
 *
 * @template A - The type of the first value.
 * @template B - The type of the second value.
 * @param {A} a - The first value.
 * @param {B} b - The second value.
 * @returns {[A, B]} A tuple containing both values.
 */
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(pair("Name", "Mantu Morya"));
console.log(pair("Age", 21));
console.log(pair("IsMarried", false));

function name<Type>(arr: Type[]): Type {
  return arr[1];
}

console.log(name([1, 2, 3]));
console.log(name(["1", "2", "3"]));
