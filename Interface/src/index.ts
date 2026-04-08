interface Name {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
}

let fullName: Name = {
  id: 0,
  firstName: "Mantu",
  lastName: "Morya",
  age: 21,
};

console.log(fullName);

//interface merge

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Mantu Kumar Morya",
  age: 21,
};

console.log(u);

// or

interface C extends User, Name {}

//generics

function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray("mantu"));
console.log(wrapInArray(42));
console.log(wrapInArray(false));
console.log(wrapInArray({ name: "Mantu Kumar", age: 23 }));

// or

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(pair("Name", "Mantu Morya"));
console.log(pair("Age", 21));
console.log(pair("IsMarried", false));
