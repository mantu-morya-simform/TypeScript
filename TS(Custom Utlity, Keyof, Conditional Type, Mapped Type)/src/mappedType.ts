console.log(
  "Mapped types------------------------------------------------------------------",
);
console.log("   ");

interface User {
  name?: string;
  email?: string;
  number?: number;
}

// keyof T = name | email | number

type myRequire<T> = {
  [P in keyof T]-?: T[P];
};

type requireResult = myRequire<User>;
console.log("   ");
