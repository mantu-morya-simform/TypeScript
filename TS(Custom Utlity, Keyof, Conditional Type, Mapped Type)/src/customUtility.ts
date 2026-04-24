console.log(
  "Custom utility types----------------------------------------------------",
);
console.log("   ");

interface User {
  name: string;
  email: string;
  number: number;
}

// keyof T = name | email | number

type myReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type readOnlyResult = myReadOnly<User>;

console.log("   ");
