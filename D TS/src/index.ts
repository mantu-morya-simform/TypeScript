// Main library exports
export { sum, multiplyNumbers, doSomthing } from "./math.js";

// Type exports for consumers
export type { basicOprArgs, ItemStorage, SomeItem } from "./types.js";

// Example usage
import { sum, multiplyNumbers, doSomthing } from "./math.js";

const result = sum({ firstArguments: 3, secondArguments: 6 });
const product = multiplyNumbers({ firstArguments: 4, secondArguments: 5 });
console.log("Sum result:", result);
console.log("Product:", product);
console.log("Something Doing Result:", doSomthing("BOX-1", 5));
