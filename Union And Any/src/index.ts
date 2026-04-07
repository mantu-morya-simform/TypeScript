/**
 * Demonstrates TypeScript union types and the `any` type.
 */

// 1.Union

/**
 * A value that can be either a number or a string.
 */
let subs: number | string = "1M";
console.log(subs);

/**
 * An API request status using literal union types for valid states.
 */
let apiRequestStatus: "sucess" | "panding" | "reject" = "panding";
apiRequestStatus = "sucess";
// apiRequestStatus = "Mantu";     //not valid type error
console.log(apiRequestStatus);

// 2. Any

/*
const orders = ["12", "13", "14", "15"]; // auto infer const orders: string[]

let currentOrder; //let currentOrder: any

for (let order of orders) {
  if (order === "13") {
    currentOrder = order;
    break;
  }
}

console.log("currectOrder:", currentOrder); //let currentOrder: string | undefined

currentOrder = 23; //here anyone can assing number in that cause currentOrder is type any thats not a good thing so thats why we avoid it
console.log("currectOrder:", currentOrder); //let currentOrder: number
*/

const orders: string[] = ["12", "13", "14", "15"]; // auto infer const orders: string[]

let currentOrder: string | undefined; //let currentOrder: string | undefined

for (let order of orders) {
  if (order === "13") {
    currentOrder = order;
    break;
  }
}

console.log("currectOrder:", currentOrder); //let currentOrder: string | undefined  not be anything accept it

// currentOrder = 23; // this will throw error here cause its type is let currentOrder: string | undefined, accept this type it throw error in that condition
