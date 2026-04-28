import { doSomthing, sum } from "./math.js";

export { doSomthing, sum };
export type { basicOprArgs, ItemStorage, SomeItem } from "./types.js";

console.log(sum({ firstArguments: 3, secondArguments: 6 }));
console.log(doSomthing("Box-1", 5));
