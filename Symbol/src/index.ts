//symbol always give the unique identity even id its signature/ value is same

let a = Symbol();
let b = Symbol();

console.log(a === b); //false

let c = Symbol("abc");
let d = Symbol("abc");

console.log(c);
console.log(d);

console.log(c === d); //false
