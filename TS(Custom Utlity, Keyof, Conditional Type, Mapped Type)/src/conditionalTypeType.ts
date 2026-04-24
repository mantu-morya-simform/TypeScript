console.log(
  "Conditional types---------------------------------------------------------",
);
console.log("   ");

// T extends U ? X : Y

type onlyString<T> = T extends string ? T : never;
// type Result = onlyString<string | number | string>;

interface User {
  name: string;
  email: string;
  number: number;
}

type onlyStringTypes<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
};
type Result = onlyStringTypes<User>;

console.log("   ");
